import { connect } from 'react-redux';
import { store } from '../store';
import { Link, useParams, Navigate } from "react-router-dom";
import { ShowTextById } from '../actions';
import { CheckText } from '../actions';
import Menu from './Menu';
import Contato from './Contato';
import "../scss/paginatexto.scss";

function PaginaTexto(props) {

  var { id } = useParams();

  var text = props.textById;

  var check = props.checkText;

  async function checkText() {
    await store.dispatch(CheckText(0));
  }

  if (check === false) {
    checkText()

    return (
      <Navigate to="/" />
    )

  } else if (text === null) {
    store.dispatch(CheckText(id));
    store.dispatch(ShowTextById(id));

    return (
      <div></div>
    )
  } else if (text.id !== parseInt(id)) {
    store.dispatch(CheckText(id));
    store.dispatch(ShowTextById(id));


    return (
      <div></div>
    )
  }  else {
    var next = text.id + 1;

    return (
      <div>
        <div className="texto" style={{backgroundImage: `url('/blog/${text.id}.png')`}}>
          <Menu />
          <h2 className="texto__category">{text.categoria}</h2>
          <img src='/logo.svg' className='logo' alt='logo'></img>
          <Link to={`/textos/${next}`} className="texto__mais">
            <img className='texto__mais__seta' src='/seta-prox.png' alt=""></img>
            Leia mais!
          </Link>

          <h1 className="texto__title">{text.titulo}</h1>
          <img src='/seta-texto.svg' className='texto__arrow' alt=''></img>
          <p className="texto__text">{text.texto}</p>
          <h3 className="texto__author">Por {text.autora}</h3>
        </div>
        <Contato/>
      </div>

    )
  }
  
}

function mapStateToProps(state) {
  return {
    textById: state.textById,
    checkText: state.checkText
  }
}

export default connect(
  mapStateToProps
)(PaginaTexto);
