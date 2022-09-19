import Menu from './Menu';
import Banner from './Banner';
import QuemSomos from './QuemSomos';
import Serviços from './Serviços';
import Clientes from './Clientes';
import TextosEmp from './TextosEmp';
import TextosMar from './TextosMar';
import Contato from './Contato';

function Home() {

  return (
    <div>
      <Menu />
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