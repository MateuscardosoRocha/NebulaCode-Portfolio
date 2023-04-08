import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./About.css";
const About = () => {
  return (
    <div className="container-main">
      <Navbar />
      <div id="container-about">
        <h1>A NEBULA CODE</h1>
        <div id="content-info-about">
          <h3>Estamos Aqui para Lançar sua Missão Online</h3>
          <p>
            Desde 2022, a missão da Nebula Code é oferecer serviços de
            hospedagem que facilitam a vida dos desenvolvedores e dos seus
            clientes. E temos cumprido nossa promessa ao atualizar
            constantemente nossa tecnologia, melhorar nosso serviço de suporte
            ao cliente.
          </p>
        </div>
        <div className="content-about">
          <h3>Nosso Forte é</h3>
          <div id="cards-about">
            <div className="card-about">
              <span>TECNOLOGIA</span>
              <h4>Inovação Constante</h4>
              <p>
                Acreditamos que para um crescimento rápido é preciso nos
                adaptarmos aos mais novos avanços tecnológicos. Para mantermos o
                máximo de velocidade e eficiência para os nossos clientes,
                buscamos melhorar sempre a infraestrutura dos nossos servidores
                com as soluções avançadas contra DDoS, LiteSpeed e nosso hPanel.
              </p>
            </div>
            <div className="card-about">
              <span>PESSOAS</span>
              <h4>Nossos Heróis são Pessoas de Verdade</h4>
              <p>
                A empresa cresce à medida que seus funcionários crescem. E a
                Hostinger oferece um ambiente perfeito para o desenvolvimento
                pessoal. Fazer parte dessa equipe maravilhosa nos deixa felizes
                e mais empenhados em entregar Sucesso do Cliente. Se você está
                pronto para essa missão, venha para a Hostinger!
              </p>
            </div>
            <div className="card-about">
              <span>OBSESSÃO PELO CLIENTE</span>
              <h4>Antes de Falarmos, Nós Ouvimos</h4>
              <p>
                Os Clientes são a parte mais importante da Hostinger. Eles nos
                ajudam a desenvolver e melhorar nossos produtos com suas
                opiniões, sugestões e críticas. Além de sermos muito elogiados.
                Temos excelentes avaliações na Trustpilot e no Reclame Aqui, e
                isso mostra que estamos no caminho certo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
