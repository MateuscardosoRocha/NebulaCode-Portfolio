import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


class Navbar extends Component {
    state = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
    
      <nav className="NavbarItems">
        <Link to="/"> 
        <h1 className="logo">
          NEBULA 
        </h1>
        </Link>


        <div className="mobile-menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>


        <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
            <li > <Link to="/about" className="nav-menu-links">  <i className="fa-solid fa-address-card"></i>Sobre nós </Link> </li>
            <li > <Link to="/projects" className="nav-menu-links"> <i className="fa-solid fa-folder"></i>Projetos </Link> </li>
            <li > <Link to="/works" className="nav-menu-links"> <i className="fa-solid fa-briefcase"></i>Trabalhos </Link> </li>
            <li > <Link to="/contact" className="nav-menu-links"> <i className="fa-solid fa-address-book"></i>Contato </Link> </li>
           
           
       
        </ul>
      </nav>
    
    );
  }
}

export default Navbar;
