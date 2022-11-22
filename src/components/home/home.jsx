import { Fade } from "react-awesome-reveal";

import { FiDownload } from "react-icons/fi";

import { typeWrite } from "../typewriter";
import astronaut from "../../utils/imgs/headerimg.png";
import cv from "../../utils/cv.pdf";

import "./home.css";
const Home = () => {
  return (
    <section id="#" className="home">
      <div className="shadow-horizontal"></div>
      <Fade>
        <img id="games-edit-draw" src={astronaut} alt="" srcSet="" />
      </Fade>

      <div className="profile">
        <h1>
          Olá
          <br /> eu sou <span>Luis</span>,
          <br />
          Desenvolvedor Web
        </h1>
        <p className="typewriter">
          Me chamo Luis Henrique, mas pode me chamar de <span>Luis</span>,
          tenho 19 anos e sou apaixonado pelo mundo digital, jogos, desenhos digitais, edições, programação etc.
        </p>
      </div>
      <div className="links">
        <a id="full" download href={cv}>
           Baixar Currículo
        </a>
        <a target="_blank" href="https://wa.me/+5534988732949">
          Vamos conversar
        </a>
      </div>
    </section>
  );
};

export default Home;
