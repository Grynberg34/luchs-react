import "../scss/logo.scss";
import { Link } from "react-router-dom";

function Logo() {

  return (
    <Link to="/">
      <img src='/logo.svg' id='logo' alt='logo'></img>
    </Link>
  )
  
}

export default Logo