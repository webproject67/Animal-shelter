import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import Modal from 'react-modal';

Modal.setAppElement('#root')

class Footer extends PureComponent {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
        <footer id="Contacts" className="page-footer">
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
              <button onClick={this.handleOpenModal} className="page-footer__address">
                <svg className="page-footer__icon page-footer__icon--pin">
                  <use xlinkHref="img/svg/sprite.svg#pin"></use>
                </svg>Boston, Central Street, 1st <br/> (Entrance from the store)</button>
              <button onClick={this.handleOpenModal2} className="page-footer__address">
                <svg className="page-footer__icon page-footer__icon--pin">
                  <use xlinkHref="img/svg/sprite.svg#pin"></use>
                </svg>London, South Park, 18st</button>
            </div>
          </div>
        </footer>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
           style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.5)'
            }
          }}
        >
          <div className="modal-content">
            <button onClick={this.handleCloseModal} className="modal-content__cancel" aria-label="Сancel">
              <svg className="modal-content__icon">
                <use xlinkHref="img/svg/sprite.svg#cancel"></use>
              </svg>
            </button>
            <div className="modal-content__wrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23585.875334999833!2d-71.07045116193163!3d42.35884324317194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370865345ba21%3A0x44f6c81aa9436fb7!2zQ2VudHJhbCBTdCwgQm9zdG9uLCBNQSwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1610277503919!5m2!1sru!2sru" width="1000" height="500" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
        </Modal>
        <Modal 
           isOpen={this.state.showModal2}
           contentLabel="Modal #2 Global Style Override Example"
           onRequestClose={this.handleCloseModal2}
           style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.5)'
            }
          }}
        >
          <div className="modal-content">
            <button onClick={this.handleCloseModal2} className="modal-content__cancel" aria-label="Сancel">
              <svg className="modal-content__icon">
                <use xlinkHref="img/svg/sprite.svg#cancel"></use>
              </svg>
            </button>
            <div className="modal-content__wrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.71192633547!2d-0.3817840693070167!3d51.52873519756609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1610275186167!5m2!1sru!2sru" width="1000" height="500" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
        </Modal>
      </Fragment>
    )
  }
}; 

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;