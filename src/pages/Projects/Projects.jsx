import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Projects.css";

const Projects = () => {
  return (
<>
        <Navbar />
        <div id="header-container-projects">
      <h1>Traga sua empresa para
fazer parte do ecossistema NEBULA CODE</h1>

        </div>

      <div id="container-projects">
        
      <main className="cards">
        <section className="card">
          <span>LOGO</span>
          <h3>Propulsione vidas</h3>
          <p>
            Sua empresa pode ser nossa parceira através do Patrocínio de bolsas
            e outros projetos de Impacto Social. Conte-nos sua idéia de
            transformação.
          </p>
        
        </section>

        <section className="card">
          <span>LOGO</span>
          <h3>Embarque em Collabs</h3>
          <p>
          Vamos juntos criar experiências de aprendizado extraordinárias. Colabore com a criação conteúdos para a comunidade dev.
          </p>
        
        </section>

        <section className="card">
          <span>LOGO</span>
          <h3>Impulsione sua empresa</h3>
          <p>
          Vamos te ajudar a levar a área de tecnologia da sua empresa para o próximo nível de e Tech Recruiting.
          </p>
        
        </section>
          </main>
        
      <main className="cards">
        <section className="card">
          <span>LOGO</span>
          <h3>Propulsione vidas</h3>
          <p>
            Sua empresa pode ser nossa parceira através do Patrocínio de bolsas
            e outros projetos de Impacto Social. Conte-nos sua idéia de
            transformação.
          </p>
        
        </section>

        <section className="card">
          <span>LOGO</span>
          <h3>Embarque em Collabs</h3>
          <p>
          Vamos juntos criar experiências de aprendizado extraordinárias. Colabore com a criação conteúdos para a comunidade dev.
          </p>
        
        </section>

        <section className="card">
          <span>LOGO</span>
          <h3>Impulsione sua empresa</h3>
          <p>
          Vamos te ajudar a levar a área de tecnologia da sua empresa para o próximo nível de e Tech Recruiting.
          </p>
        </section>
          </main>
      
      </div>
      <Footer />
      </>
  );
};

export default Projects;
