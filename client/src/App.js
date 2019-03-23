import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Container } from 'reactstrap';
import Home from './screens/Home';
export class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Container fluid={true} style={{ margin: '0' }}>
					<Home />
				</Container>
			</div>
		);
	}
}

export default App;
