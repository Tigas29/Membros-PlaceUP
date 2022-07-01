import React from "react";
import { Container } from "./style";
import tiago from "./imgs/tiago.svg";
import { AiFillGithub, AiOutlineStar } from "react-icons/ai";
export default function Cards() {
  return (
    <>
      <Container>
        <div>
          <div className="header">
            <button>
              <AiFillGithub className="githubIcon" />
              <p>Place Up</p>
            </button>
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
                <button>
                  <h2>Linkedin</h2>
                </button>
                <button>
                  <h2>Instagram</h2>
                </button>
                <button>
                  <h2>Whatsapp</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
