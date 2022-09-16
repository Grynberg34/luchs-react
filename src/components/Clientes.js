import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/clientes.scss";

function Clientes() {

  return (
    <div className="clientes">
      <h1 className="clientes__title">Nossos clientes</h1>

      <Container fluid>
        <Row>
          <Col md={3}>
            <img src='/clientes/1.png' className="clientes__img" alt='img'></img>
          </Col>

          <Col md={3}>
            <img src='/clientes/2.png' className="clientes__img" alt='img'></img>
          </Col>

          <Col md={3}>
            <img src='/clientes/3.png' className="clientes__img" alt='img'></img>
          </Col>

          <Col md={3}>
            <img src='/clientes/4.png' className="clientes__img" alt='img'></img>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <img src='/clientes/5.png' className="clientes__img" alt='img'></img>
          </Col>

          <Col md={3}>
            <img src='/clientes/6.png' className="clientes__img" alt='img'></img>
          </Col>

          <Col md={3}>
            <img src='/clientes/7.png' className="clientes__img" alt='img'></img>
          </Col>

        </Row>
      </Container>
      
    </div>

  )
  
}

export default Clientes