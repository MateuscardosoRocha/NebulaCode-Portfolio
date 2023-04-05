import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-main">
      <Navbar />
      <div id="container-about-us">
        <div id="content-left-about-us">
          <h1>SOMOS O<br></br>  FUTURO</h1>
          <p>
            DESPERTE O POTENCIAL DE SUA EMPRESA E LEVE-A AO PRÓXIMO NÍVEL COM
            NOSSAS SOLUÇÕES DE SOFTWARE PERSONALIZADAS. JUNTE-SE A NÓS E JUNTOS
            CRIAREMOS UM FUTURO MAIS EFICIENTE E INOVADOR PARA O SEU NEGÓCIO!
          </p>

          <h4>
            NÓS TORNAMOS A TECNOLOGIA ACESSIVEL PARA TODOS.
            <button id="contrast">DESCUBRA COMO</button>
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
