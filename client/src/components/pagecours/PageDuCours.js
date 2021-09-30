import React from "react";
import reactlogo from "../../assets/images/reactlogo.png";
import what from "../../assets/images/what.png";
import compris from "../../assets/images/compris.png";
import comment from "../../assets/images/comment.png";
import { Link } from "react-router-dom";
import { NavLink} from 'react-router-dom';

const PageDuCours = () => {
  return (
    <>
  <div className="detailNavbar" >
       
       <ul>
       <NavLink  to="/" >
           <li className="detailNavLi" >Accueil</li>
       </NavLink>

       <NavLink   to="/formations">
           <li className="detailNavLi">Formation</li>
       </NavLink>

       <NavLink  to="/contact">
           <li className="detailNavLi">Contact</li>
       </NavLink>
       </ul>
        <input className = "detailSearch" type="text" placeholder="Votre recherche.." />
   </div>

  <div className='container'>
    <div className="pageprincipale">

      <div className="infolangage">
        <div className="logolangagediv">
          <img className="logolangage" src={reactlogo} alt="reactlogo" />;
        </div>
        <div className="infoUtile">
          <h5>Sur l'auteur</h5>
        </div>
        <div>
          <h6>Nom :</h6>
          <h6>Prenom :</h6>
        </div>

        <div className="utpar">
          <h5>Statistique</h5>
        </div>
      </div>

      {/* Debut Programme*/}
      <div className="programme scroller">
        <details className="sumario">
        <summary>Table des matières</summary>
        
      <details style={{ marginLeft: "10px" }}>
          <summary >Présentation du langage</summary>
        <Link style={{ marginLeft: "10px" }}>
          <input type="checkbox"/><label style={{marginLeft:'10px', color:'black'}}>historique</label>
        </Link>
        <br/>
        <Link style={{ marginLeft: "10px" }}>
        <input type="checkbox"/><label style={{marginLeft:'10px', color:'black' }}>Requis</label>
        </Link>
      </details>

      <details style={{ marginLeft: "10px" }}>
       <summary> Les variables </summary>
       <Link style={{ marginLeft: "10px" }} >
          <input type="checkbox"/><Link to ="#variables"><label style={{marginLeft:'10px', color:'black' }}>Declaration des variables</label></Link>
        </Link>
        <br/>
        <Link style={{ marginLeft: "10px" }}>
        <input type="checkbox"/><label style={{marginLeft:'10px' , color:'black'}}>Utilisation des variables</label>
        </Link>
      </details>

      <details style={{ marginLeft: "10px" }}>
       <summary> Les fonctions </summary>
       <Link style={{ marginLeft: "10px" }}>
          <input type="checkbox"/><label style={{marginLeft:'10px', color:'black' }}>C'est quoi une fonction?</label>
        </Link>
        <br/>
        <Link style={{ marginLeft: "10px" }}>
        <input type="checkbox"/><label style={{marginLeft:'10px', color:'black' }}>Les fonctions fléchées</label>
        </Link>
      </details>
        </details>
      </div>
      {/* Fin Programme*/}

      <div className="contenu">
        <div className="Cadre-video">
          <div className="video-de-la-session"></div>
          <div>
            <ul className="vue-like-dislike" >
              <li> <img className="compris" src={compris} alt="compris" /> </li>
              <li> <img className="what" src={what} alt="what" /> </li>
              <li> <img className="comment" src={comment} alt="comment" />  </li>
            </ul>
          </div>
        </div>
        <article>
        <div className="chapitre">
          <h4 style={{ textAlign: "center" }} id="presentation">
            Presentation du langage
          </h4>
          <hr />
          <h5 style={{ textAlign: "center" }}>Historique</h5>
          <p style={{ textAlign: "justify" }}>
            React (aussi appelé React.js ou ReactJS) est une bibliothèque
            JavaScript libre développée par Facebook depuis 2013. Le but
            principal de cette bibliothèque est de faciliter la création
            d'application web monopage, via la création de composants dépendant
            d'un état et générant une page (ou portion) HTML à chaque changement
            d'état. React est une bibliothèque qui ne gère que l'interface de
            l'application, considéré comme la vue dans le modèle MVC. Elle peut
            ainsi être utilisée avec une autre bibliothèque ou un framework MVC
            comme AngularJS. La bibliothèque se démarque de ses concurrents par
            sa flexibilité et ses performances, en travaillant avec un DOM
            virtuel et en ne mettant à jour le rendu dans le navigateur qu'en
            cas de nécessité2. La bibliothèque est utilisée par Netflix3 (côté
            serveur uniquement depuis le 25 octobre 2017 pour gagner 50 % de
            performance4), Yahoo5, Airbnb6, Sony7, Atlassian8 ainsi que par les
            équipes de Facebook, appliquant le dogfooding sur le réseau social
            éponyme, Instagram ou encore WhatsApp2. À la fin de 2015,
            WordPress.com annonce Gutenberg, une interface pour les éditeurs de
            sites WordPress, développée en JavaScript avec Node.js et React9,10.
          </p>
          <h5 style={{ textAlign: "center" }}>Requis</h5>
          <p style={{ textAlign: "justify" }}>
            Framework ou bibliothèque ? Il existe quelques tentatives de
            distinguer formellement l'un de l'autre ; par exemple, une
            explication populaire dit qu'un framework appelle notre propre code,
            là où c'est notre code qui appelle celui d'une bibliothèque. Mais en
            pratique, il arrive fréquemment que les deux se mêlent, comme dans
            le cas de React. Pour moi, la frontière est plus subtile, mais
            j'aurais tendance à dire que oui, React reste un framework, même
            s'il est beaucoup plus léger que des frameworks « qui veulent tout
            faire », comme Angular, Aurelia ou Ember…
          </p>
        </div>

        <div className="chapitre">
          <h4 style={{ textAlign: "center" }} id="variables">
            Les variables
          </h4>
          <hr></hr>
          <h5 style={{ textAlign: "center" }}>Les variables var</h5>
          <p style={{ textAlign: "justify" }}>
            React (aussi appelé React.js ou ReactJS) est une bibliothèque
            JavaScript libre développée par Facebook depuis 2013. Le but
            principal de cette bibliothèque est de faciliter la création
            d'application web monopage, via la création de composants dépendant
            d'un état et générant une page (ou portion) HTML à chaque changement
            d'état. React est une bibliothèque qui ne gère que l'interface de
            l'application, considéré comme la vue dans le modèle MVC. Elle peut
            ainsi être utilisée avec une autre bibliothèque ou un framework MVC
            comme AngularJS. La bibliothèque se démarque de ses concurrents par
            sa flexibilité et ses performances, en travaillant avec un DOM
            virtuel et en ne mettant à jour le rendu dans le navigateur qu'en
            cas de nécessité2. La bibliothèque est utilisée par Netflix3 (côté
            serveur uniquement depuis le 25 octobre 2017 pour gagner 50 % de
            performance4), Yahoo5, Airbnb6, Sony7, Atlassian8 ainsi que par les
            équipes de Facebook, appliquant le dogfooding sur le réseau social
            éponyme, Instagram ou encore WhatsApp2. À la fin de 2015,
            WordPress.com annonce Gutenberg, une interface pour les éditeurs de
            sites WordPress, développée en JavaScript avec Node.js et React9,10.
          </p>
          <h5 style={{ textAlign: "center" }}>Les variables const</h5>
          <p style={{ textAlign: "justify" }}>
            {" "}
            Framework ou bibliothèque ? Il existe quelques tentatives de
            distinguer formellement l'un de l'autre ; par exemple, une
            explication populaire dit qu'un framework appelle notre propre code,
            là où c'est notre code qui appelle celui d'une bibliothèque. Mais en
            pratique, il arrive fréquemment que les deux se mêlent, comme dans
            le cas de React. Pour moi, la frontière est plus subtile, mais
            j'aurais tendance à dire que oui, React reste un framework, même
            s'il est beaucoup plus léger que des frameworks « qui veulent tout
            faire », comme Angular, Aurelia ou Ember…
          </p>
        </div>
        </article>
      </div>
    </div>
    </div>
    </>
  );
};

export default PageDuCours;
