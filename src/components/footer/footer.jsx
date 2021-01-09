import React, {Fragment} from "react";
import PropTypes from "prop-types";

const Footer = (props) => (
  <Fragment>
    {props.children}
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

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;