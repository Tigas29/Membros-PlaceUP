import styled from "styled-components";

const Media = {
  Laptop: "@media(max-width:1250px)",
  Desktop: "@media(max-width:1440px)",
  Tablet: "@media(max-width:994px)",
  MobileL: "@media(max-width:425px)",
};



export const Container = styled.div`
  padding-top: 20px;
  width: 80%;
  margin: auto;
  .header {
    display: flex;
    align-items: center;
    justify-content: start;
    color: white;

    /* Titulo membro scopo da pagina  */
    h1 {
      font-family: "Poppins";
      font-style: normal;
      font-size: 34px;
      text-align: center;
      font-weight: 500;
      color: #f5f5f5;
    }
    button {
      display: flex;
      align-items: center;
      .githubIcon {
        margin-left: 10px;
        width: 34px;
        height: 34px;
        ${Media.MobileL}{
          width: 24px;
          height: 24px;
        }
      }

      border: 1px solid #ffffff;
      cursor: pointer;
      /* texto dentro do botao */
      p {
        padding: 10px 20px;
        font-size: 20px;
        text-align: center;
        color: #ffffff;
        mix-blend-mode: normal;
      }
    }
  }
  /* Começo do card */
  .cards {
    /* container do card*/
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;

    /* Background do card */
    .backgroundCard {
      width: 600px;
      background: linear-gradient(
        146.69deg,
        transparent,
        rgba(217, 217, 217, 0) 100%
      );
      box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(20px);
      backdrop-filter: blur(13.5px);
      -webkit-backdrop-filter: blur(13.5px);
      border-radius: 10px;
      border-radius: 20px; 
      
      /* container das informacoes do cards */
      .containerInfoCards {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 70%;
        margin: auto;
        margin-top: 20px;

        /* nome da pessoa */
        h1 {
          margin-top: 30px;
          font-family: "Poppins";
          font-weight: 600;
          font-size: 32px;
          color: #f5f5f5;
          ${Media.MobileL}{
            font-size: 22px;
          }
          ${Media.Tablet}{
            font-size: 26px;
          }
        }
        

        /* onde a pessoa atuou no projeto */
        p {
          margin-top: 10px;
          font-family: "Poppins";
          font-weight: 600;
          font-size: 28px;
          line-height: 45px;
          color: #f5f5f5;
          ${Media.MobileL}{
            font-size: 16px;
          }
          ${Media.Tablet}{
            font-size: 22px;
          }
        }
        /* Caracteristas */

        span {
          display: flex;
          align-items: center;
          justify-content: start;
          background: rgba(0, 19, 152, 0.07);
          mix-blend-mode: normal;
          border-radius: 5px;
          color: white;

          /* Estrela do card */
          .starIcon {
            width: 24px;
            height: 24px;
            margin: 5px 10px;
            ${Media.MobileL}{
              width: 18px;
              height:18px;
            }
            ${Media.Tablet}{
              width: 20px;
              height: 20px;
            }
          }

          h3 {
            font-family: "Poppins";
            font-style: normal;
            font-size: 15px;
            color: #ffffff;
            margin-right: 10px;
            ${Media.MobileL}{
              font-size: 12px;
            }
            ${Media.Tablet}{
              font-size: 13px;
            }
          }
        }
        .buttonSocialMedias {
          margin-top: 20px;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          a {
            width: 100%;
          }
          button {
            width: 80%;
            border: 1px solid #ffffff;
            cursor: pointer;

            /* texto dentro do botao */
            h2 {
              margin: auto;
              padding: 10px 20px;
              font-size: 20px;
              text-align: center;
              color: #ffffff;
              mix-blend-mode: normal;
            }
          }
        }
      }
      .optionNavigation {
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        .numberIcon {
          cursor: pointer;
        }
      }
    }
  }
`;
