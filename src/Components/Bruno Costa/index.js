import React from "react";
import { Container } from "./style";
import bruno from "./imgs/Bruno.svg";
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
              <img src={bruno} alt="Foto da perfil" />
              <h1>Bruno Costa</h1>
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
                  href="https://www.linkedin.com/in/bruno-costa-a643621b2/"
                  target="blanked"
                >
                  <button>
                    <h2>Linkedin</h2>
                  </button>
                </a>
                <a href="https://github.com/ihyperbr" target="blanked">
                  <button>
                    <h2>Git Hub</h2>
                  </button>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511943884494"
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
      </Container>
    </>
  );
}
