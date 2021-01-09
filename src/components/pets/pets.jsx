import React, {Fragment} from "react";

export default () => (
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
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Cat@1x.jpg" srcSet="img/desktop/Cat@2x.jpg 2x" alt="Katrine"/>
            <p className="friends__name">Katrine</p>
            <button className="friends__link">Learn More</button>
          </li>
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Dog1@1x.jpg" srcSet="img/desktop/Dog1@2x.jpg 2x" alt="Jennifer"/>
            <p className="friends__name">Jennifer</p>
            <button className="friends__link">Learn More</button>
          </li>
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Dog2@1x.jpg" srcSet="img/desktop/Dog2@2x.jpg 2x" alt="Woody"/>
            <p className="friends__name">Woody</p>
            <button className="friends__link">Learn More</button>
          </li>
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Dog3@1x.jpg" srcSet="img/desktop/Dog3@2x.jpg 2x" alt="Sophia"/>
            <p className="friends__name">Sophia</p>
            <button className="friends__link">Learn More</button>
          </li>
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Cat1@1x.jpg" srcSet="img/desktop/Cat1@2x.jpg 2x" alt="Timmy"/>
            <p className="friends__name">Timmy</p>
            <button className="friends__link">Learn More</button>
          </li>
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Dog4@1x.jpg" srcSet="img/desktop/Dog4@2x.jpg 2x" alt="Charly"/>
            <p className="friends__name">Charly</p>
            <button className="friends__link">Learn More</button>
          </li>
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Dog5@1x.jpg" srcSet="img/desktop/Dog5@2x.jpg 2x" alt="Scarlett"/>
            <p className="friends__name">Scarlett</p>
            <button className="friends__link">Learn More</button>
          </li>
          <li className="friends__item friends__item--margin">
            <img className="friends__img" src="img/desktop/Cat2@1x.jpg" srcSet="img/desktop/Cat2@2x.jpg 2x" alt="Freddie"/>
            <p className="friends__name">Freddie</p>
            <button className="friends__link">Learn More</button>
          </li>
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
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <div className="page-footer__contacts">
          <b className="page-footer__title">For questions <br/> and suggestions</b>
          <a className="page-footer__email" href="mailto:email@shelter.com">
            <svg className="page-footer__icon">
              <use xlinkHref="img/svg/sprite.svg#envelope"></use>
            </svg>email@shelter.com</a>
          <a className="page-footer__tel" href="tel:+136745677554">
            <svg className="page-footer__icon">
              <use xlinkHref="img/svg/sprite.svg#telephone"></use>
            </svg>+13 674 567 75 54</a>
        </div>
        <div className="page-footer__contacts">
          <b className="page-footer__title">We are waiting <br/> for your visit</b>
          <button className="page-footer__address">
            <svg className="page-footer__icon page-footer__icon--pin">
              <use xlinkHref="img/svg/sprite.svg#pin"></use>
            </svg>Boston, Central Street, 1st <br/> (Entrance from the store)</button>
          <button className="page-footer__address">
            <svg className="page-footer__icon page-footer__icon--pin">
              <use xlinkHref="img/svg/sprite.svg#pin"></use>
            </svg>London, South Park, 18st</button>
        </div>
      </div>
    </footer>
  </Fragment>
)