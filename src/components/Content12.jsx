import React from "react";
import { Row, Col, Typography } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "./utils";

const { Title } = Typography;

class Content12 extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <div {...item.children.wrapper}>
            <span {...item.children.img}>{item.children.img.children}</span>
          </div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: "+=30",
                opacity: 0,
                type: "from",
                ease: "easeOutQuad",
              }}
              leave={{ y: "+=30", opacity: 0, ease: "easeOutQuad" }}
              {...dataSource.block}
            >
              {childrenToRender}
            </TweenOneGroup>
            <Typography className="typo-title">
              <Title level={4}>y más...</Title>{" "}
            </Typography>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content12;
