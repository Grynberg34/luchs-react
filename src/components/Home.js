import MenuHome from './MenuHome';
import Banner from './Banner';
import QuemSomos from './QuemSomos';
import Serviços from './Serviços';
import Clientes from './Clientes';
import TextosEmp from './TextosEmp';
import TextosMar from './TextosMar';
import Contato from './Contato';
import Logo from './Logo';

function Home() {

  return (
    <div>
      <MenuHome />
      <Logo />
      <Banner />
      <QuemSomos />
      <Serviços />
      <Clientes />
      <TextosEmp />
      <TextosMar />
      <Contato />
    </div>
  )
  
}

export default Home