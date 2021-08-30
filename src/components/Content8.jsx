import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Typography, Col } from "antd";
import QueueAnim from "rc-queue-anim";
import { getChildrenToRender } from "./utils";

const { Title, Paragraph, Text } = Typography;

class Content8 extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  getBlockChildren = (item, i) => {
    const children = item.children;
    const delay = this.props.isMobile ? i * 50 : this.getDelay(i, 24 / item.md);
    const liAnim = {
      y: 30,
      opacity: 0,
      type: "from",
      ease: "easeOutQuad",
      delay,
    };
    return (
      <TweenOne component={Col} animation={liAnim} key={i.toString()} {...item}>
        <div {...children}>
          <div className="image-wrapper" {...children.img}>
            <img src={children.img.children} alt="img" />
          </div>
          <h2 {...children.title}>{children.title.children}</h2>
          <div {...children.content}>{children.content.children}</div>
        </div>
      </TweenOne>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper} id="somos">
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="img">
              <div className="hero-div">
                <img
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="hero"
                  className="hero-img"
                />
              </div>
              <div className="hero-text">
                <Typography>
                  <Title>Misión</Title>
                  <Paragraph className="hero-p">
                    “Somos una firma de expertos, dedicados a la prestación de
                    servicios en Administración y Consultoría, Contaduría y
                    Organización de Empresas, que estamos comprometidos con
                    nuestros clientes ofreciendo la más alta calidad en los
                    servicios profesionales y soluciones integrales para el
                    desarrollo continuo de las operaciones de nuestros clientes,
                    comprometidos con la mejora continua”
                  </Paragraph>
                  <Paragraph className="hero-p">
                    Proporcionamos servicios de alta calidad en Auditoría,
                    Contabilidad, Impuestos, Administración, Recursos Humanos,
                    entre otros.
                  </Paragraph>
                  <Paragraph className="hero-p">
                    En la actualidad estamos constituidos por profesionistas en
                    múltiples disciplinas como son: Contaduría Pública,
                    Administración, Tecnologías de Información, Arquitectura,
                    etc., quiénes reúnen diversas cualidades, como son:
                    responsabilidad y experiencia profesional, así como
                    compromiso con la mejora continua y un constante desarrollo.
                  </Paragraph>
                </Typography>
              </div>
              <div className="hero-div">
                <img
                  src="https://images.pexels.com/photos/7693103/pexels-photo-7693103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="hero"
                  className="hero-img"
                />
              </div>
              <div className="hero-text">
                <Typography>
                  <Title>Fortalezas</Title>
                  <Paragraph className="hero-p">
                    La experiencia de los socios integrantes que cuentan con una
                    trayectoria profesional exitosa y con experiencia que
                    permite asegurar a nuestros clientes una amplia visión y
                    sinergia para cumplir con las expectativas.
                  </Paragraph>
                  <Paragraph className="hero-p">
                    Profesionales altamente calificados, con personal bilingüe y
                    con amplia experiencia en los diversos sectores comerciales
                    e industriales del país.
                  </Paragraph>
                  <Paragraph className="hero-p">
                    Experiencia en empresas multinacionales, empresas medianas,
                    familiares y pequeñas (PYMES).
                  </Paragraph>
                  <Paragraph className="hero-p">
                    Una administración optima de tiempos que nos permite
                    maximizar los recursos para poder ofrecer precios
                    competitivos con una calidad garantizada en nuestros
                    servicios.
                  </Paragraph>
                </Typography>
              </div>
              <div className="hero-div">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="hero"
                  className="hero-img"
                />
              </div>
              <div className="hero-text">
                <Typography>
                  <Title>Valores</Title>
                  <Title level={3} className="hero-t3">
                    Ética profesional
                  </Title>
                  <Paragraph className="hero-p">
                    Establecimos un compromiso colectivo e individual de una
                    aplicación estricta de normas y principios de ética
                    profesional, garantizando el cumplimiento en todas las
                    actividades realizadas que conlleva un aseguramiento de la
                    confidencialidad y honestidad de nuestros integrantes.
                  </Paragraph>
                  <Title level={3} className="hero-t3">
                    Compromiso
                  </Title>
                  <Paragraph className="hero-p">
                    Es un valor que nos permite una satisfacción total de
                    nuestros clientes mediante el cumplimiento de los
                    compromisos y respuestas a sus necesidades específicas.
                  </Paragraph>
                  <Title level={3} className="hero-t3">
                    Honestidad
                  </Title>
                  <Paragraph className="hero-p">
                    Somos honestos en nuestra conducta y actuación profesional,
                    buscamos una fidelidad de la cultura de negocio de nuestros
                    clientes y asociados.
                  </Paragraph>
                  <Title level={3} className="hero-t3" jus>
                    Lealtad
                  </Title>
                  <Paragraph className="hero-p">
                    Mantenemos un espíritu de identidad con nuestros clientes y
                    en la Firma, a fin de cuidar sus intereses y la integridad
                    en el desarrollo profesional.
                  </Paragraph>
                  <Title level={3} className="hero-t3">
                    Trabajo en equipo
                  </Title>
                  <Paragraph className="hero-p">
                    Los grupos de trabajo y la interacción de cada una de las
                    áreas de negocios en el desarrollo de nuestras actividades,
                    es el factor clave para encontrar la mejor solución a las
                    necesidades de nuestros clientes.
                  </Paragraph>
                  <Title level={3} className="hero-t3">
                    Trabajo en equipo
                  </Title>
                  <Paragraph className="hero-p">
                    En
                    <Text strong>
                      {" "}
                      HIGH LEVEL COUNSELINGS S.A. DE C.V.
                    </Text>{" "}
                    definimos la excelencia como la unión y la aplicación de
                    todos nuestros valores, para cumplir con las expectativas de
                    clientes y asociados.
                  </Paragraph>
                </Typography>
              </div>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content8;
