import { connect } from 'react-redux';
import { store } from '../store';
import { OpenCloseMenu } from '../actions';
import { HashLink as Link } from 'react-router-hash-link';
import "../scss/menu.scss";

function Menu(props) {

  var open = props.open;

  function openClose() {
    open = !open;

    store.dispatch(OpenCloseMenu(open))

  }

  if (open === false) {
    return (
      <img onClick={openClose} className="icon" src="/menu-icon.svg" alt=""></img>
    )
  } else {
    return (
      <div className="open">
          <h1 onClick={openClose} className="open__close">x</h1>
          <Link onClick={openClose}  to="/#quemsomos" className="open__link">_Quem São</Link>
          <Link onClick={openClose}  to="/servicos" className="open__link">_Serviços</Link>
          <Link onClick={openClose}  to="/#clientes" className="open__link">_Clientes</Link>
          <Link onClick={openClose}  to="/#empresarias" className="open__link">_Para empresárias</Link>
          <Link onClick={openClose}  to="/#marketeiras" className="open__link">_Para marketeiras</Link>
          <Link onClick={openClose}  to="#contato" className="open__link">_Contato</Link>
      </div>
    )
  }
} 
  

  

function mapStateToProps(state) {
  return {
    open: state.open
  }
}

export default connect(
  mapStateToProps
)(Menu);