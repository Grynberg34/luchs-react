import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/contato.scss";

function Contato() {

  return (
    <div id="contato" className="contato">

      <Container fluid>
        <Row>
          <Col md={7}>
          <h1 className="contato__title">Contato</h1>
          <div className="contato__bar">
            <h2 className="contato__subtitle"> <img className="contato__img" src="/contato/whatsapp.svg" alt=""></img> Ana - 44 99142 6531  |  Nathália - 44 99143 4573 </h2>
            <h2 className="contato__subtitle"> <img className="contato__img" src="/contato/email.svg" alt=""></img> luchsagencia@gmail.com </h2>
          </div>
          </Col>

          <Col md={1}>
            <a href="https://www.instagram.com/luchsagencia/" target="_blank" rel="noreferrer"><img className='contato__logo' src="/contato/instagram.svg" alt=""></img></a>
          </Col>

          <Col md={1}>
            <a href="https://www.facebook.com/luchsagencia" target="_blank" rel="noreferrer"><img className='contato__logo' src="/contato/facebook.png" alt=""></img></a>
          </Col>
        </Row>
      </Container>

    </div>

  )
  
}

export default Contato