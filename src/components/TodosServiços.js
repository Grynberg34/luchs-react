import BannerServiços from './BannerServiços';
import Menu from './Menu';
import ListaServiços from './ListaServiços';
import Contato from './Contato';
import Logo from './Logo';

function TodosServiços() {

  return (
    <div>
      <Menu />
      <Logo />
      <BannerServiços />
      <ListaServiços />
      <Contato />
    </div>
  )
  
}

export default TodosServiços