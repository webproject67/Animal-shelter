import React, {Fragment} from "react";
import PropTypes from "prop-types";

const Pets = (props) => (
  <Fragment>
    <header className="page-header page-header--background">
      <div className="page-header__wrapper page-header__wrapper--padding">
        <nav className="main-nav">
          <p className="main-nav__logo main-nav__logo--color">Cozy House <span className="main-nav__logo--font-family main-nav__logo--color1">Shelter for pets in Boston</span></p>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--color" href="#">About the shelter</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--color" href="#">Our pets</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--color" href="#">To help the shelter</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--color" href="#">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="page-main">
      <section className="friends friends--padding">
        <h1 className="friends__title">Our friends who <br/> are looking for a house</h1>
        <ul className="friends__list friends__list--width">
          {props.base.map((elem, i) => (
            <li key={i} className="friends__item friends__item--margin">
              <img className="friends__img" src={`img/desktop/${elem.src}@1x.jpg`} srcSet={`img/desktop/${elem.src}@2x.jpg 2x`} alt={elem.name}/>
              <p className="friends__name">{elem.name}</p>
              <button className="friends__link">Learn More</button>
            </li>
          ))}
        </ul>
        <ul className="friends__pagination">
          <li className="friends__page-item">
            <button className="friends__button friends__button--active">1</button>
          </li>
          <li className="friends__page-item">
            <button className="friends__button">2</button>
          </li>
          <li className="friends__page-item">
            <button className="friends__button">3</button>
          </li>
          <li className="friends__page-item">
            <span className="friends__ellipsis">...</span>
          </li>
          <li className="friends__page-item">
            <button className="friends__button">10</button>
          </li>
        </ul>
      </section>
    </main>
  </Fragment>
);

Pets.propTypes = {
  base: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default Pets