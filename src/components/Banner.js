import { connect } from 'react-redux';
import { store } from '../store';
import { GetLastTexts } from '../actions';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "../scss/banner.scss";

function Banner(props) {

  var last = props.last;

  if (last === null) {
    store.dispatch(GetLastTexts())

    return (
      <div></div>
    )
  } else {


    return (
      <Carousel interval={4000} controls={false}>

        <Carousel.Item className="banner">

          <Link  to='/'>

            <img src={`/banners/first.png`} alt="banner" className='banner__img'></img>
            <div className="banner__gradient"></div>
            <img src={`/banners/first-mobile.png`} alt="banner" className='banner__img--mobile'></img>
              
          </Link>

        </Carousel.Item>

        { last.map( (text, index) => 

          <Carousel.Item key={text.id} className="banner">

            <Link  to={`/textos/${text.id}`}>


              <img src={`/banners/${text.id}.png`} alt="banner" className='banner__img'></img>
              <div className="banner__gradient"></div>
              <img src={`/banners/${text.id}-mobile.png`} alt="banner" className='banner__img--mobile'></img>
              <img src='/bola-banner-principal.png' className='banner__ball' alt='logo'></img>

              <div className='banner__info'>
                <h1 className='banner__info__header'>{text.categoria}</h1>
                <img src='/barra-banner-principal.svg' className='banner__info__bar' alt='logo'></img>

                <div className='banner__info__title'>
                  <h2 className='banner__info__title__text'> 
                  <img src='/box-banner-principal.svg' className='banner__info__title__box' alt='logo'></img> <span className='banner__info__title__number'>{text.numero}</span> {text.titulo}
                  </h2>
                </div>
              </div>
                
            </Link>

          </Carousel.Item>
        )}

      </Carousel>
    )

      

  }


  
}

function mapStateToProps(state) {
  return {
    last: state.last
  }
}

export default connect(
  mapStateToProps
)(Banner);
