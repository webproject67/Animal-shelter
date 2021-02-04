import * as React from "react";
import Slider from "react-slick";
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

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1
};

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

class Welcome extends React.PureComponent<Props, State> {
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
    console
  }

  handleCloseModal (): void {
    this.setState({ showModal: false });
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <header className="page-header">
          <div className="page-header__wrapper">
            <nav className="main-nav">
              <p className="main-nav__logo">Cozy House <span className="main-nav__logo--font-family">Shelter for pets in Boston</span></p>
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <Link className="main-nav__link" to="AboutTheShelter" spy={true} smooth={true} offset={-70} duration={500}>About the shelter</Link>
                </li>
                <li className="main-nav__item">
                  <a onClick={this.props.onButtonClick} className="main-nav__link">Our pets</a>
                </li>
                <li className="main-nav__item">
                  <Link className="main-nav__link" to="ToHelpTheShelter" spy={true} smooth={true} offset={-70} duration={500}>To help the shelter</Link>
                </li>
                <li className="main-nav__item">
                  <Link className="main-nav__link" to="Contacts" spy={true} smooth={true} offset={-70} duration={500}>Contacts</Link>
                </li>
              </ul>
            </nav>
            <section className="page-header__house">
              <h1 className="page-header__title">Not only people <br/> need a house</h1>
              <p className="page-header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula condimentum erat fringilla et.</p>
              <Link to="friends" className="page-header__btn" spy={true} smooth={true} offset={-70} duration={500}>Make a friend</Link>
            </section>
          </div>
        </header>
        <main className="page-main">
          <section id="AboutTheShelter" className="cozy-house">
            <img className="cozy-house__img" src="img/desktop/Cozy-House@1x.png" srcSet="img/desktop/Cozy-House@2x.png 2x" alt="Cozy-House"/>
            <div className="cozy-house__description">
              <h2 className="cozy-house__title">About the shelter <br/> “Cozy House”</h2>
              <p className="cozy-house__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.</p>
              <p className="cozy-house__text">Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis ultrices pharetra. Morbi tempus at ante sit amet tristique. Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, dignissim lorem. Sed at ligula et sem mattis gravida ac vel erat.</p>
            </div>
          </section>
          <section id="friends" className="friends">
            <div className="friends__wrapper">
              <h2 className="friends__title">Our friends who <br/>	are looking for a house</h2>
              <Slider {...settings}>
                {this.props.base.map((elem, i) => (
                  <div key={i} onClick={this.handleOpenModal.bind(this, i)} className="friends__item">
                    <img className="friends__img" src={`img/desktop/${elem.src}@1x.jpg`} srcSet={`img/desktop/${elem.src}@2x.jpg 2x`} alt={elem.name}/>
                    <p className="friends__name">{elem.name}</p>
                    <button className="friends__link">Learn More</button>
                  </div>
                ))}
              </Slider>
              <a onClick={this.props.onButtonClick} className="friends__btn">Get to know the rest</a>
            </div>	
          </section>
          <section id="ToHelpTheShelter" className="help">
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
              <img className="donation__img" src="img/desktop/Dog@1x.png" srcSet="img/desktop/Dog@2x.png 2x" alt="dog"/>
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

export default Welcome;