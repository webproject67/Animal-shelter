import * as React from "react";

interface Props {
  base: {name: string; src: string};
  onButtonClick: () => void;
}

const types = [`Pooch + Labrador`, `Pooch`, `Labrador`];
const statuses =[`none`, `yes`];
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; 

const Modal: React.FunctionComponent<Props> = (props: Props) => (
  <div className="modal-content">
		<button onClick={props.onButtonClick} className="modal-content__cancel" aria-label="Сancel">
			<svg className="modal-content__icon">
				<use xlinkHref="img/svg/sprite.svg#cancel"></use>
			</svg>
		</button>
		<div className="modal-content__wrapper">
			<img className="modal-content__img" src={`img/desktop/${props.base.src}@1x.jpg`} srcSet={`img/desktop/${props.base.src}@2x.jpg 2x`} alt={props.base.name}/>
			<div className="modal-content__description">
				<p className="modal-content__name">{props.base.name}</p>
				<p className="modal-content__type1">{types[getRandom(0, types.length - 1)]}</p>
				<p className="modal-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gra vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec consectetur, diam in porta tempus, urna ligula ves tibulum nibh.</p>
				<ul className="modal-content__list">
					<li className="modal-content__item">
						<p className="modal-content__type2">Age: <span className="modal-content__type2--color">{getRandom(1, 11)} months</span></p>
					</li>
					<li className="modal-content__item">
						<p className="modal-content__type2">Inoculations: <span className="modal-content__type2--color">{statuses[getRandom(0, statuses.length - 1)]}</span></p>
					</li>
					<li className="modal-content__item">
						<p className="modal-content__type2">Diseases: <span className="modal-content__type2--color">{statuses[getRandom(0, statuses.length - 1)]}</span></p>
					</li>
					<li className="modal-content__item">
						<p className="modal-content__type2">Parasites: <span className="modal-content__type2--color">{statuses[getRandom(0, statuses.length - 1)]}</span></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Modal; 