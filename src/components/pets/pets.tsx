import * as React from "react";
import * as ReactModal from 'react-modal';
import Modal from '../modal/modal';
import { Link } from "react-scroll";

interface Props {
  base: Answer[];
  onButtonClick: () => void;
}

interface Answer {
  name: string;
  src: string;
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

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root')

class Pets extends React.PureComponent<Props, State> {
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
        <header className="page-header page-header--background">
          <div className="page-header__wrapper page-header__wrapper--padding">
            <nav className="main-nav">
              <p onClick={this.props.onButtonClick} className="main-nav__logo main-nav__logo--color">Cozy House <span className="main-nav__logo--font-family main-nav__logo--color1">Shelter for pets in Boston</span></p>
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <a onClick={this.props.onButtonClick} className="main-nav__link main-nav__link--color">About the shelter</a>
                </li>
                <li className="main-nav__item">
                  <a className="main-nav__link main-nav__link--color main-nav__link--active">Our pets</a>
                </li>
                <li className="main-nav__item">
                  <a onClick={this.props.onButtonClick} className="main-nav__link main-nav__link--color">To help the shelter</a>
                </li>
                <li className="main-nav__item">
                  <Link className="main-nav__link main-nav__link--color" to="Contacts" spy={true} smooth={true} offset={-70} duration={500}>Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="page-main">
          <section className="friends friends--padding">
            <h1 className="friends__title">Our friends who <br/> are looking for a house</h1>
            <ul className="friends__list friends__list--width">
              {this.props.base.map((elem, i) => (
                <li key={i} onClick={this.handleOpenModal.bind(this, i)} className="friends__item friends__item--margin">
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
        <ReactModal 
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal.bind(this)}
          style={customStyles}
        >
          <Modal base={this.props.base[this.state.number]} onButtonClick={this.handleCloseModal.bind(this)}/>
        </ReactModal>
      </React.Fragment>
    )
  }
}

export default Pets; 