import "./reset.css";
import React from "react";
import background from "./video/backgroundVideo.mp4";
import { Main } from "./style";
import Cards from "./Components/Cards/index";
export default function App() {
  return (
    <>
      <Main>
        {/* background video */}
        <div>
          <video className="VIDEO" autoPlay loop muted>
            <source src={background} type="video/mp4" />
          </video>
        </div>
        {/* Card */}
        <Cards />
      </Main>
    </>
  );
}
