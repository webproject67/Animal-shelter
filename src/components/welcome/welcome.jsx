import React, {Fragment} from "react";
import Picture from "react-picture-webp";
import {cozyHouse, dog} from "../../pictures/pictures";

export default () => (
  <Fragment>
    <header className="page-header">
      <div className="page-header__wrapper">
        <nav className="main-nav">
          <p className="main-nav__logo">Cozy House <span className="main-nav__logo--font-family">Shelter for pets in Boston</span></p>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">About the shelter</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Our pets</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">To help the shelter</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <section className="page-header__house">
          <h1 className="page-header__title">Not only people <br/> need a house</h1>
          <p className="page-header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula condimentum erat fringilla et.</p>
          <button className="page-header__btn">Make a friend</button>
        </section>
      </div>
    </header>
    <main className="page-main">
      <section className="cozy-house">
        <Picture {...cozyHouse} />
        <div className="cozy-house__description">
          <h2 className="cozy-house__title">About the shelter <br/> “Cozy House”</h2>
          <p className="cozy-house__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.</p>
          <p className="cozy-house__text">Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis ultrices pharetra. Morbi tempus at ante sit amet tristique. Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, dignissim lorem. Sed at ligula et sem mattis gravida ac vel erat.</p>
        </div>
      </section>
      <section className="friends">
        <div className="friends__wrapper">
          <h2 className="friends__title">Our friends who <br/>	are looking for a house</h2>
          <ul className="friends__list">
            <li className="friends__item">
              <img className="friends__img" src="img/desktop/Cat@1x.jpg" srcSet="img/desktop/Cat@2x.jpg 2x" alt="Katrine"/>
              <p className="friends__name">Katrine</p>
              <button className="friends__link">Learn More</button>
            </li>
            <li className="friends__item">
              <img className="friends__img" src="img/desktop/Dog1@1x.jpg" srcSet="img/desktop/Dog1@2x.jpg 2x" alt="Jennifer"/>
              <p className="friends__name">Jennifer</p>
              <button className="friends__link">Learn More</button>
            </li>
            <li className="friends__item">
              <img className="friends__img" src="img/desktop/Dog2@1x.jpg" srcSet="img/desktop/Dog2@2x.jpg 2x" alt="Woody"/>
              <p className="friends__name">Woody</p>
              <button className="friends__link">Learn More</button>
            </li>
          </ul>
          <button className="friends__arrow friends__arrow--left" aria-label="arrow">
            <svg className="friends__icon">
              <use xlinkHref="img/svg/sprite.svg#arrow"></use>
            </svg>
          </button>
          <button className="friends__arrow friends__arrow--right" aria-label="arrow">
            <svg className="friends__icon">
              <use xlinkHref="img/svg/sprite.svg#arrow"></use>
            </svg>
          </button>
          <button className="friends__btn">Get to know the rest</button>
        </div>	
      </section>
      <section className="help">
        <h2 className="help__title">Than you can help <br/> our shelter</h2>
        <ul className="help__list">
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#cat-food"></use>
            </svg>
            <p className="help__text">Pet food</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#ambulance"></use>
            </svg>
            <p className="help__text">Transportation</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#ball"></use>
            </svg>
            <p className="help__text">Toys</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#bowl"></use>
            </svg>
            <p className="help__text">Bowls and cups</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#shampoo"></use>
            </svg>
            <p className="help__text">Shampoos</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#pills"></use>
            </svg>
            <p className="help__text">Vitamins</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#syringe"></use>
            </svg>
            <p className="help__text">Medicines</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#leash"></use>
            </svg>
            <p className="help__text">Collars / leashes</p>
          </li>
          <li className="help__item">
            <svg className="help__icon">
              <use xlinkHref="img/svg/sprite.svg#cat"></use>
            </svg>
            <p className="help__text">Sleeping area</p>
          </li>
        </ul>
      </section>
      <section className="donation">
        <div className="donation__wrapper">
          <Picture {...dog} />
          <div className="donation__description">
            <h2 className="donation__title">In addition, you <br/> can make a donation</h2>
            <p className="donation__name">Name of the bank / Type of bank account</p>
            <p className="donation__number">
              <svg className="donation__icon">
                <use xlinkHref="img/svg/sprite.svg#credit-card"></use>
              </svg>8380 2880 8028 8791 7435</p>
            <p className="donation__text">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
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