import React from 'react';
import './card.css';
import DisplayCard from './DisplayCard';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
const CardContainer = () => {
	return (
		<div className="card-container">
			<ul className="cards">
				<DisplayCard title="Dog meme" img={img3} />
				<DisplayCard title="Programmers" img={img2} />
				<DisplayCard title="Jokes" img={img1} />
			</ul>
		</div>
	);
};

export default CardContainer;
