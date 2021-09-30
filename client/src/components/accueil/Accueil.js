import React, { Component } from "react";
import loop from "../../assets/images/loop.png";
import Carou from "./Carou";
import cours from "../../assets/images/cours.png";
import userIcon from "../../assets/images/userIcon.png";
import { Link } from "react-router-dom";
import "../../assets/css/accueil.css";
import Login from "../body/auth/Login";
import Register from "../body/auth/Register";

class Accueil extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true,
      showRegister: true
    };
  }

  handleLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };
  handleRegister = () => {
    this.setState({
      showRegister: !this.state.showRegister
    });
  };

  render() {
    return (
      <div className=" container containerDiv">
        <Carou />
        <div className="youcours">
          <Link to="/profil">
            <img className="you" alt="" src={userIcon} />
          </Link>
          <Link to="/formations">
            <img className="cours" alt="" src={cours} />
          </Link>
    
        </div>

        <div className="search">
          <form className="inputDiv">
            <input
              className="classInput"
              type="text"
              placeholder="Votre recherche .."
            />
            <img className="loop" src={loop} alt="" />
            <button className="go" type="submit">
              Go..
            </button>
          </form>
          <div className="filterDiv"></div>
        </div>
        <div className="wilicodelogo"></div>

        {/** Login*/}
        <div className="loginDiv">
          <button className="loginButton" onClick={this.handleLogin}>
            Se connecter
          </button>

          {this.state.showLogin ? null : <Login />}
        </div>

        {/** Register*/}
        <div className="registerDiv">
         
          <button className="registerButton" onClick={this.handleRegister}>
            S'inscrire
          </button>
         

          {this.state.showRegister ? null : <Register />}
        </div>
      </div>
    );
  }
}

export default Accueil;
