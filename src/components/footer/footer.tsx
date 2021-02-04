import * as React from "react";
import * as ReactModal from 'react-modal';
import Map from '../map/map';

interface Props {
  children: React.ReactNode;
}

interface State {
  number: number;
  showModal: boolean;
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
};

const src = [
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23585.875334999833!2d-71.07045116193163!3d42.35884324317194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370865345ba21%3A0x44f6c81aa9436fb7!2zQ2VudHJhbCBTdCwgQm9zdG9uLCBNQSwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1610277503919!5m2!1sru!2sru`,
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.71192633547!2d-0.3817840693070167!3d51.52873519756609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1610275186167!5m2!1sru!2sru`
];

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root')

class Footer extends React.PureComponent<Props, State> {
  constructor(props: never) {
    super(props);

    this.state = {
      showModal: false,
      number: 0
    };
  }

  handleOpenModal (i: number): void {
    this.setState({ showModal: true });
    this.setState({ number: i });
  }

  handleCloseModal (): void {
    this.setState({ showModal: false });
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
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
              <button onClick={this.handleOpenModal.bind(this, 0)} className="page-footer__address">
                <svg className="page-footer__icon page-footer__icon--pin">
                  <use xlinkHref="img/svg/sprite.svg#pin"></use>
                </svg>Boston, Central Street, 1st <br/> (Entrance from the store)</button>
              <button onClick={this.handleOpenModal.bind(this, 1)} className="page-footer__address">
                <svg className="page-footer__icon page-footer__icon--pin">
                  <use xlinkHref="img/svg/sprite.svg#pin"></use>
                </svg>London, South Park, 18st</button>
            </div>
          </div>
        </footer>
        <ReactModal 
           isOpen={this.state.showModal}
           onRequestClose={this.handleCloseModal.bind(this)}
           style={customStyles}
        >
          <Map src={src[this.state.number]} onButtonClick={this.handleCloseModal.bind(this)}/>
        </ReactModal>
      </React.Fragment>
    )
  }
}

export default Footer; 