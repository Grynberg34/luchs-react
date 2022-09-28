import { connect } from 'react-redux';
import { store } from '../store';
import { GetTextsE } from '../actions';
import { ShowAllTextsE } from '../actions';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/textosemp.scss";

function TextosEmp(props) {

  var texts_emp = props.texts_emp;
  var show_emp = props.show_emp;

  function showAll() {
    store.dispatch(ShowAllTextsE())
  }

  if (texts_emp === null) {
    store.dispatch(GetTextsE())

    return (
      <div></div>
    )
  } else if (show_emp === false) {
    return (
      <div id="empresarias" className='textos' style={{backgroundImage: `url("/fundo-blog.png")` }}>
        <h1 className='textos__title'>Para empresárias</h1>
        <img src='/blog-barra.svg' className='textos__bar' alt=''></img>

        { texts_emp.map( (text, i) => 
            {
              if (text.numero % 2 !== 0 && i < 2) {
                return (
                  <Link key={text.id} className='textos__link'  to={`/textos/${text.id}`}>
                    <div className='textos__texto'>
                      <Container fluid>
                        <Row>
                          <Col md={6} className='textos__col'>
                            <div className='left'>
                              <img src='/seta-texto.svg' className='textos__texto__arrow--left' alt=''></img>
                              <h2 className='textos__texto__title--left'>{text.titulo}</h2>
                              <p className='textos__texto__paragraph--left'>{text.texto}</p>
                            </div>
                          </Col>
      
                          <Col md={6} className='textos__col'>
                            <img src='/box-blog.png' className='textos__texto__box--left' alt='logo'></img> 
                            <span className='textos__texto__number--left'>{text.numero}</span>
                            <img src={`/empresarias/${text.id}.png`} className='textos__texto__img' alt=''></img>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Link>
                )
              } else if (text.numero % 2 === 0 && i < 2) {
                return (
                  <Link key={text.id} className='textos__link'  to={`/textos/${text.id}`}>
                    <div className='textos__texto'>
                      <Container fluid>
                        <Row>
                          <Col md={6} className='textos__col'>
                            <img src={`/empresarias/${text.id}.png`} className='textos__texto__img' alt=''></img>
                            <img src='/box-blog.png' className='textos__texto__box' alt='logo'></img> 
                            <span className='textos__texto__number'>{text.numero}</span>
                          </Col>
      
                          <Col md={6} className='textos__col'>
                            <div className='right'>
                              <img src='/seta-texto.svg' className='textos__texto__arrow' alt=''></img>
                              <h2 className='textos__texto__title'>{text.titulo}</h2> 
                              <p className='textos__texto__paragraph'>{text.texto}</p>    
                            </div>                       
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Link>
                )
              } else {
                return (
                  <div key={text.id}></div>
                )
              }
            }

        )}

        <button onClick={showAll} className='textos__button'>Leia mais! <img src='/seta-mais.svg' alt='' className='textos__button__arrow'></img></button>
        
      </div>
      
    )
  } else if (show_emp === true) {
    return (
      <div id="empresarias" className='textos' style={{backgroundImage: `url("/fundo-blog.png")` }}>
        <h1 className='textos__title'>Para empresárias</h1>
        <img src='/blog-barra.svg' className='textos__bar' alt=''></img>

        { texts_emp.map( (text) => 
            {
              if (text.numero % 2 !== 0) {
                return (
                  <Link key={text.id} className='textos__link'  to={`/textos/${text.id}`}>
                    <div className='textos__texto'>
                      <Container fluid>
                        <Row>
                          <Col md={6} className='textos__col'>
                            <div className='left'>
                              <img src='/seta-texto.svg' className='textos__texto__arrow--left' alt=''></img>
                              <h2 className='textos__texto__title--left'>{text.titulo}</h2>
                              <p className='textos__texto__paragraph--left'>{text.texto}</p>
                            </div>
                          </Col>
      
                          <Col md={6} className='textos__col'>
                            <img src='/box-blog.png' className='textos__texto__box--left' alt='logo'></img> 
                            <span className='textos__texto__number--left'>{text.numero}</span>
                            <img src={`/empresarias/${text.id}.png`} className='textos__texto__img' alt=''></img>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Link>
                )
              } else if (text.numero % 2 === 0) {
                return (
                  <Link key={text.id} className='textos__link'  to={`/textos/${text.id}`}>
                    <div className='textos__texto'>
                      <Container fluid>
                        <Row>
                          <Col md={6} className='textos__col'>
                            <img src={`/empresarias/${text.id}.png`} className='textos__texto__img' alt=''></img>
                            <img src='/box-blog.png' className='textos__texto__box' alt='logo'></img> 
                            <span className='textos__texto__number'>{text.numero}</span>
                          </Col>
      
                          <Col md={6} className='textos__col'>
                            <div className='right'>
                              <img src='/seta-texto.svg' className='textos__texto__arrow' alt=''></img>
                              <h2 className='textos__texto__title'>{text.titulo}</h2> 
                              <p className='textos__texto__paragraph'>{text.texto}</p>    
                            </div>                       
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Link>
                )
              } else {
                return (
                  <div key={text.id}></div>
                )
              }
            }

        )}
        
      </div>
      
    )
  } else {
    return (
      <div></div>
    )
  }
}


function mapStateToProps(state) {
  return {
    texts_emp: state.texts_emp,
    show_emp: state.show_emp
  }
}

export default connect(
  mapStateToProps
)(TextosEmp);
