import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import emailjs from '@emailjs/browser'

import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  function sendEmail(e){
    e.preventDefault()
    
const templateParams = {
  from_name: name,
  message: message,
  email: email
}

    emailjs.send('service_1h6t5wf', 'template_46psuak', templateParams, 'LvMM2M8AxESdWA5kI')
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setName("")
      setEmail("")
      setMessage("")
    }, (err) => {
      console.log("Erro: "+ err)
    })
  }
  return (
    <div>
      <Navbar />
      <div id="header-contact">
        <h1>Contact us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div id="container-contact">
        <div id="content-contact">
          <h3>Ou nos envie uma mensagem</h3>
          <form className="form" onSubmit={sendEmail}>
            <div className="input-items">

          <label for="name">Nome:</label>
            <input
              className="input"
              type="text"
              placeholder="Digite o seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
              </div>
              <div className="input-items">

<label for="name">Email:</label>
            <input
              className="input"
              type="text"
              placeholder="Digite o seu E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            </div>
            <div className="input-items">

<label for="name">Sua mensagem:</label>
            <textarea
              className="textarea"
              placeholder="Digite o seu nome"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            </div>
            <input type="submit" value="Enviar" />

          <div id="main-infos-contact">
            <div className="social-icon">
              <i className="fa fa-envelope"> </i>
              <span>nebulacodee@gmail.com</span>
            </div>
            <div className="social-icon">
              <i className="fa-brands fa-tiktok"> </i>
              <span>nebulaCode</span>
            </div>
            <div className="social-icon">
              <i className="fa-brands fa-instagram"> </i>
              <span>nebulacodeagencia</span>
            </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
