import React from "react";
import { Container } from "./style";
import tiago from "./imgs/Tiago.svg";
import { AiFillGithub, AiOutlineStar } from "react-icons/ai";

export default function Bruno() {
  return (
    <>
      <Container>
        <div>
          <div className="header">
            <a
              href="https://github.com/Place-UP/PlaceUP-FrontEnd"
              target="blanked"
            >
              <button>
                <AiFillGithub className="githubIcon" />
                <p>Place Up</p>
              </button>
            </a>
          </div>
        </div>
        <div className="cards">
          <div className="backgroundCard">
            {/* container das infromacoes que tem dentro do card */}
            <div className="containerInfoCards">
              <img src={tiago} alt="Foto da perfil" />
              <h1>Tiago Santos</h1>
              <p>P.O FRONT-END</p>

              {/* Container que ficam  logo apos a area de atuacao do mebro */}
              <div className="cardInfoStar">
                <span>
                  <AiOutlineStar className="starIcon" />
                  <h3>Designer </h3>
                </span>
              </div>
              <div className="buttonSocialMedias">
                <a
                  href="https://www.linkedin.com/in/tiagosantos-dev/"
                  target="blanked"
                >
                  <button>
                    <h2>Linkedin</h2>
                  </button>
                </a>
                <a href="https://github.com/Tigas29" target="blanked">
                  <button>
                    <h2>Github</h2>
                  </button>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511995350039"
                  target="blanked"
                >
                  <button>
                    <h2>Whatsapp</h2>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Opções de navegação */}
        {/* <div className="optionNavigation">
          <div>
            <img className="numberIcon" src={segundo} alt="segundo" />
            <img className="numberIcon" src={terceiro} alt="terceiro" />
            <img className="numberIcon" src={primeiro} alt="primeiro" />
            <img className="numberIcon" src={quarto} alt="quarto" />
            <img className="numberIcon" src={quinto} alt="quinto" />
            <img className="numberIcon" src={sexto} alt="sexto" />
            <img className="numberIcon" src={setimo} alt="setimo" />
          </div>
        </div> */}
      </Container>
    </>
  );
}
