import React from 'react';
import './card.css';

const DisplayCard = (props) => {
	return (
		<li className="cards__item">
			<div className="card">
				<div style={{ backgroundImage: `url(${props.img})` }} className="card__image" />
				<div className="card__content">
					<div className="card__title">{props.title}</div>
					<p className="card__text">
						Lorem ipsum dolor sit, amet consectetur adipisicin amet consectetur adipisicin
					</p>
					<button style={{ background: 'black', color: 'white' }} className="btn btn--block card__btn">
						View Memes
					</button>
				</div>
			</div>
		</li>
	);
};

export default DisplayCard;
