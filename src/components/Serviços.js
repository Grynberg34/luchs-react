import "../scss/serviços.scss";
import Slider from "react-slick";
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { store } from '../store';
import { CheckOffset } from '../actions';

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

function Serviços(props) {

  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  var offset = props.checkOffset;

  console.log(offset);

  if (window.innerWidth < 767 && offset !== 0) {
    store.dispatch(CheckOffset(850))
  } else if (offset !== 0) {
    store.dispatch(CheckOffset(1000))
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    store.dispatch(CheckOffset(0))
  }

  return (
    <div id="serviços" className="serviços">
      <h1 className="serviços__title">Nossos serviços</h1>
      <Slider className="serviços__carousel" {...settings}>
        <Link to="/servicos#1" className="serviços__carousel__item" scroll={el => scrollWithOffset(el)}>
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Planejamento <br></br> estratégico</h2>
        </Link>
        <Link to="/servicos#2" className="serviços__carousel__item" scroll={el => scrollWithOffset(el)}>
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Marketing <br></br> de conteúdo</h2>
        </Link>
        <Link to="/servicos#3" className="serviços__carousel__item" scroll={el => scrollWithOffset(el)}>
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Copywriting</h2>
        </Link>
        <Link to="/servicos#4" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Artes <br></br> gráficas</h2>
        </Link>
        <Link to="/servicos#5" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text" id="gerenciamento">Gerenciamento <br></br> de publicações</h2>
        </Link>
        <Link to="/servicos#6" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Análise <br></br> de dados</h2>
        </Link>
        <Link to="/servicos#7" className="serviços__carousel__item">
          <img className="serviços__carousel__item__img" src="/servicos/circle.png" alt=""></img>
          <h2 className="serviços__carousel__item__text">Branding</h2>
        </Link>
      </Slider>

    </div>

  )
  
}

function mapStateToProps(state) {
  return {
    checkOffset: state.checkOffset
  }
}

export default connect(
  mapStateToProps
)(Serviços);