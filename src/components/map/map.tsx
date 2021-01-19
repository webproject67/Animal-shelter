import * as React from "react";

interface Props {
  src: string;
  onButtonClick: () => void; 
}

const Map: React.FunctionComponent<Props> = (props: Props) => (
  <div className="modal-content">
    <button onClick={props.onButtonClick} className="modal-content__cancel" aria-label="Сancel">
      <svg className="modal-content__icon">
        <use xlinkHref="img/svg/sprite.svg#cancel"></use>
      </svg>
    </button>
    <div className="modal-content__wrapper">
      <iframe src={props.src} width="1000" height="500" frameBorder="0" style={{border: 0}} aria-hidden="false"></iframe>
    </div>
  </div>
);

export default Map; 