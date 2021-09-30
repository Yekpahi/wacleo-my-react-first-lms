import React from "react";
import Header from "../header/Header";
import "../../assets/css/formation.css";
import vignette1 from "../../assets/images/vignette1.jpg";
import vignette2 from "../../assets/images/vignette2.jpg";
import vignette3 from "../../assets/images/vignette3.jpg";
import vignette4 from "../../assets/images/vignette4.jpg";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Footer from "../footer/Footer";
import Carousel from "react-grid-carousel";

const Formation = () => {
  return (
    <div className="container">
      <Header />
      <div className="conteneur">
        {/* Debut  Recent */}
        <div className="conteneurRecent">
          <h3>Les formation les plus recentes</h3>
          <hr />

          <Carousel cols={4} rows={1} gap={10} loop className="recent">

          <div className="recentContenu">
            <Carousel.Item>
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts, l'essai en 4</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>
            </div>

            <div className="recentContenu">
            <Carousel.Item>
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts, l'essai en 4</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>
            </div>

            <Carousel.Item className="recentContenu">
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts, l'essai en 4</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>

            <Carousel.Item className="recentContenu">
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts, l'essai en 4</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>

            <Carousel.Item className="recentContenu">
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>

            <Carousel.Item className="recentContenu">
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts, l'essai en 4</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>

            <Carousel.Item className="recentContenu">
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts, l'essai en 4</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>

            <Carousel.Item className="recentContenu">
              <img className="imageVignette" alt="" src={vignette1} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts, l'essai en 4</h4>
              <hr className="hr1" />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Debut  Populaires */}

        <div className="conteneurPopulaire">
          <h3>Populaires</h3>
          <hr />
          <div className="populaire">
            <div className="populaireContenu">
              <img className="imageVignette" alt="" src={vignette2} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="populaireContenu">
              <img className="imageVignette" alt="" src={vignette2} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="populaireContenu">
              <img className="imageVignette" alt="" src={vignette2} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="populaireContenu">
              <img className="imageVignette" alt="" src={vignette2} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Debut  Tendance */}
        <div className="conteneurTendance">
          <h3>Tendances</h3>
          <hr />
          <div className="tendance">
            <div className="contenuTendance">
              <img className="imageVignette" alt="" src={vignette3} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="contenuTendance">
              <img className="imageVignette" alt="" src={vignette3} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="contenuTendance">
              <img className="imageVignette" alt="" src={vignette3} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="contenuTendance">
              <img className="imageVignette" alt="" src={vignette3} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Debut  Gout */}
        <div className="conteneurGout">
          <h3>Selons vos goûts</h3>
          <hr />
          <div className="gout">
            <div className="contenuGout">
              <img className="imageVignette" alt="" src={vignette4} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="contenuGout">
              <img className="imageVignette" alt="" src={vignette4} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="contenuGout">
              <img className="imageVignette" alt="" src={vignette4} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>

            <div className="contenuGout">
              <img className="imageVignette" alt="" src={vignette4} />
              <h6>Par : Yekpahi Prince</h6>
              <h4>JavaScript pour les debuts</h4>
              <hr />
              <p>Description lorem mmns dennd siinn dnsnssndnd...</p>
              <Link to="/page-du-cours">
                <button className="buttona">Choisir</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Formation;
