import { connect } from 'react-redux';
import { store } from '../store';
import { GetLastText } from '../actions';
import { Link } from "react-router-dom";
import "../scss/banner.scss";

function Banner(props) {

  var last = props.last;

  if (last === null) {
    store.dispatch(GetLastText())

    return (
      <div></div>
    )
  } else {
    return (

      <Link  to="/">
      
        <div className='banner'>

          <img src='/logo.svg' className='banner__logo' alt='logo'></img>
    
          <img src={`/banners/${last.id}.png`} alt="banner" className='banner__img'></img>

        <div className='banner__info'>
            <h1 className='banner__info__header'>{last.categoria}</h1>
            <img src='/barra-banner-principal.svg' className='banner__info__bar' alt='logo'></img>

            <h2 className='banner__info__title'> 
            <img src='/box-banner-principal.svg' className='banner__info__box' alt='logo'></img> <span className='banner__info__number'>{last.id}</span> {last.titulo}
            </h2>
        </div>
          
        </div>
      
      </Link>
      
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
