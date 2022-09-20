import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/listaserviços.scss";

function ListaServiços() {

  return (
    <Container className="serviços">
      <h1 className="serviços__title">Nossos serviços</h1>

      <Container>
        <Row className="serviços__card">
          <Col md={6}>
            <div className="serviços__card__info">
              <h2 className="serviços__card__info__title">Planejamento <br></br> estratégico</h2>
              <p className="serviços__card__info__text">Planejamento de conteúdo visando especificamente o aumento da visibilidade e o aumento do engajamento utilizando ferramentas digitais para tráfego orgânico.</p>
            </div>
          </Col>

          <Col md={6}>
            <img src='/servicos/1.png' className="serviços__card__img" alt=""></img>
          </Col>
        </Row>

        <Row className="serviços__card">
          <Col md={6}>
            <img src='/servicos/2.png' className="serviços__card__img" alt=""></img>
          </Col>

          <Col md={6}>
            <div className="serviços__card__info">
              <h2 className="serviços__card__info__title right">Marketing <br></br> de conteúdo</h2>
              <p className="serviços__card__info__text right">Criação de conteúdo interessante e relevante para atração do público.</p>
            </div>
          </Col>

        </Row>

        <Row className="serviços__card">
          <Col md={6}>
            <div className="serviços__card__info">
              <h2 className="serviços__card__info__title">Copywriting</h2>
              <p className="serviços__card__info__text">Escrita persuasiva e criativa utilizando linguagem adequada ao público e ao canal.</p>
            </div>
          </Col>

          <Col md={6}>
            <img src='/servicos/3.png' className="serviços__card__img" alt=""></img>
          </Col>
        </Row>

        <Row className="serviços__card">
          <Col md={6}>
            <img src='/servicos/4.png' className="serviços__card__img" alt=""></img>
          </Col>

          <Col md={6}>
            <div className="serviços__card__info">
              <h2 className="serviços__card__info__title right">Artes gráficas</h2>
              <p className="serviços__card__info__text right">Comunicação visual com objetivo de expressar as ideias, posicionamentos e valores.</p>
            </div>
          </Col>

        </Row>

        <Row className="serviços__card">
          <Col md={6}>
            <div className="serviços__card__info">
              <h2 className="serviços__card__info__title">Gerenciamento <br></br> de publicações</h2>
              <p className="serviços__card__info__text">Postagens mediante aprovação e seguindo planejamento.</p>
            </div>
          </Col>

          <Col md={6}>
            <img src='/servicos/5.png' className="serviços__card__img" alt=""></img>
          </Col>
        </Row>

        <Row className="serviços__card">
          <Col md={6}>
            <img src='/servicos/6.png' className="serviços__card__img" alt=""></img>
          </Col>

          <Col md={6}>
            <div className="serviços__card__info">
              <h2 className="serviços__card__info__title right">Análise <br></br> de dados</h2>
              <p className="serviços__card__info__text right">Análise de dados fornecidos pela plataforma  para otimização de planejamento e criação de conteúdo.</p>
            </div>
          </Col>

        </Row>

        <Row className="serviços__card">
          <Col md={6}>
            <div className="serviços__card__info">
              <h2 className="serviços__card__info__title">Branding</h2>
              <p className="serviços__card__info__text">Criação de identidade visual e construção de imagem mediante análise da marca.</p>
            </div>
          </Col>

          <Col md={6}>
            <img src='/servicos/7.png' className="serviços__card__img" alt=""></img>
          </Col>
        </Row>

      </Container>

    </Container>
  )
  
}

export default ListaServiços