import React from "react";
import { Container } from "./style";
import gustavo from "./imgs/Gustavo.svg";
import { AiFillGithub, AiOutlineStar } from "react-icons/ai";

export default function Gustavo() {
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
              <img src={gustavo} alt="Foto da perfil" />
              <h1>Gustavo Pereira</h1>
              <p>FRONT-END</p>

              {/* Container que ficam  logo apos a area de atuacao do mebro */}
              <div className="cardInfoStar">
                <span>
                  <AiOutlineStar className="starIcon" />
                  <h3>Designer </h3>
                </span>
              </div>
              <div className="buttonSocialMedias">
                <a
                  href="https://www.linkedin.com/in/gustavo-pereira-martins-64ba221a1/"
                  target="blanked"
                >
                  <button>
                    <h2>Linkedin</h2>
                  </button>
                </a>

                <a href="https://github.com/XfireX157" target="blanked">
                  <button>
                    <h2>Git Hub</h2>
                  </button>
                </a>
 <a href="https://portifolio-xfirex157.vercel.app" target="blanked">
                  <button>
                    <h2>Portifolio</h2>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
