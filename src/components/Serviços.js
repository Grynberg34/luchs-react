import "../scss/serviços.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/seta-prox.png"
      style={{ ...style, display: "block", width: "40px", height: "40px", right: "-70px"}}
      className={className}
      onClick={onClick}
      alt=""
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/seta-ante.png"
      style={{ ...style, display: "block", width: "40px", height: "40px", left: "-70px"}}
      className={className}
      onClick={onClick}
      alt=""
    />
  );
}

function Serviços() {

  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="serviços">
      <h1 className="serviços__title">Nossos serviços</h1>
      <Slider className="serviços__carousel" {...settings}>
        <Link to="/" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Marketing <br></br> de conteúdo</h2>
        </Link>
        <Link to="/" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Copywriting</h2>
        </Link>
        <Link to="/" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Artes <br></br> gráficas</h2>
        </Link>
        <Link to="/" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text" id="gerenciamento">Gerenciamento <br></br> de publicações</h2>
        </Link>
        <Link to="/" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Análise <br></br> de dados</h2>
        </Link>
        <Link to="/" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Branding</h2>
        </Link>
      </Slider>

    </div>

  )
  
}

export default Serviços