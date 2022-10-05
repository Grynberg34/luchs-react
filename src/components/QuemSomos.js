import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/quemsomos.scss";

function QuemSomos() {

  return (
    <div id="quemsomos" className="quemsomos" style={{backgroundImage: `url("/fundo-quemsomos.png")` }}>
      <Container fluid>
        <h1 className="quemsomos__title title__mobile">Quem são</h1>
        
        <Row>
          <Col xs={{span: 12, order: 2 }} md={{span: 7, order: 1 }}>
            <h1 className="quemsomos__title title__desktop">Quem são</h1>
            <p className="quemsomos__text">
              A Lüchs é diferente de todas as agências que você conhece. 
              <br></br><br></br>
              Criamos um método único de comunicação capaz de 
              aumentar a qualidade da entrega e tornar os 
              processos claros e agradáveis. 
              <br></br><br></br>
              É o mundo do marketing sendo apresentado de 
              forma mais empática, consciente e cuidadosa.
              <br></br><br></br>
              Acreditamos que sua empresa é o seu sonho e torná-lo 
              um sucesso é o que nos move.
              <br></br><br></br>
              Nossa equipe pode ajudar você a desenvolver seu negócio 
              utilizando as principais ferramentas do marketing digital, 
              fale conosco e descubra como.
            </p>
          </Col>

          <Col xs={{span: 12, order: 1 }} md={{span: 5, order: 2 }}>
            <img className="quemsomos__img" src="/quemsomos.png" alt="quemsomos"></img>
          </Col>
        </Row>
      </Container>
    </div>

  )
  
}

export default QuemSomos