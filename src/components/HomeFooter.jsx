import LinkContact from "./LinkContact";

import Photo from "../assets/me.jpg";

import "./HomeFooter.css";

const HomeFooter = () => {
  return (
    <footer className="home-footer">
      <div className="author">
        <img src={Photo} alt="Foto do Desenvolvedor" />
        <h2>
          Desenvolvido por <strong>Ernando Alves</strong>
        </h2>
      </div>
      <div className="contact-footer">
        <ul>
          <LinkContact
            url={"https://www.instagram.com/ernando.hr/"}
            icon_class={"fa-brands fa-instagram"}
          />
          <LinkContact
            url={"https://github.com/dErnandoV7/"}
            icon_class={"fa-brands fa-github"}
          />
          <LinkContact
            url={"https://www.linkedin.com/in/ernando-matias-5776b2292/"}
            icon_class={"fa-brands fa-linkedin"}
          />
          <LinkContact
            url={"https://devernando.netlify.app/"}
            icon_class={"fa-solid fa-code"}
          />
        </ul>
      </div>
    </footer>
  );
};

export default HomeFooter;
