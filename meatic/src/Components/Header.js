import React, { Component } from "react";
import "../Styles.css" 

// const divLogo = {
//   height: "50px",
//   text-align: "center",
// };

class Header extends Component {
  render() {

    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="#">Meatic</a>
      <a class="navbar-brand">
    <img alt="Burger" className="imgnavbar" src="img/hamburger.svg"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link">Accueil
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Carte</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li>
          <button class="btn nav-link btn-success navbar-btn">
            Mon Compte
          </button>
        </ul>
      </div>
    </div>
  </nav>
    );
  }
}

export default Header;
