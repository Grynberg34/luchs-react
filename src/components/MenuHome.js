import { connect } from 'react-redux';
import { store } from '../store';
import { OpenCloseMenu } from '../actions';
import "../scss/menu.scss";

function MenuHome(props) {

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
          <a onClick={openClose}  href="#quemsomos" className="open__link">_Quem São</a>
          <a onClick={openClose}  href="#serviços" className="open__link">_Serviços</a>
          <a onClick={openClose}  href="#clientes" className="open__link">_Clientes</a>
          <a onClick={openClose}  href="#empresarias" className="open__link">_Para empresárias</a>
          <a onClick={openClose}  href="#marketeiras" className="open__link">_Para marketeiras</a>
          <a onClick={openClose}  href="#contato" className="open__link">_Contato</a>
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
)(MenuHome);