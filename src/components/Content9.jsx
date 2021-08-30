import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { getChildrenToRender } from "./utils";
import { Typography, Modal } from "antd";

const { Link } = Typography;

class Content9 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      title: "",
      contain: "",
    };
  }

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  getBlockChildren = (block, i) => {
    const { isMobile } = this.props;
    const item = block.children;

    const showModal = () => {
      this.setState({
        isModalVisible: true,
        title: item.title.children,
        contain: item.text,
      });
    };

    const handleOk = () => {
      this.setState({
        isModalVisible: false,
      });
    };

    const handleCancel = () => {
      this.setState({
        isModalVisible: false,
      });
    };

    const textWrapper = (
      <QueueAnim
        key="text"
        leaveReverse
        delay={isMobile ? [0, 100] : 0}
        {...item.textWrapper}
      >
        <div key="time" {...item.time}>
          {item.time.children}
        </div>
        <h2 key="title" {...item.title}>
          <i {...item.icon}>
            <img src={item.icon.children} alt="img" />
          </i>
          {item.title.children}
        </h2>
        <Link key="p" {...item.content} onClick={showModal}>
          {item.content.children}
        </Link>
      </QueueAnim>
    );

    return (
      <OverPack key={i.toString()} {...block}>
        {isMobile && textWrapper}
        <QueueAnim
          className="image-wrapper"
          key="image"
          type={isMobile ? "right" : "bottom"}
          leaveReverse
          delay={isMobile ? [100, 0] : 0}
          {...item.imgWrapper}
        >
          <div key="image" {...item.img}>
            <img src={item.img.children} alt="img" />
          </div>
          <div key="name" className="name-wrapper">
            {isMobile ? (
              <Link key="p" {...item.content} onClick={showModal}>
                {item.content.children}
              </Link>
            ) : (
              ""
            )}

            <div key="post" {...item.post}>
              {item.post.children}
            </div>
          </div>
        </QueueAnim>
        <Modal
          title={this.state.title}
          visible={this.state.isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          {...item.title}
        >
          <p className="content9-text">{this.state.contain.children}</p>
          <p className="content9-text">{this.state.contain.children1}</p>
          <p className="content9-text">{this.state.contain.children2}</p>
        </Modal>

        {!isMobile && textWrapper}
      </OverPack>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const children = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <div {...dataSource.block}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Content9;
