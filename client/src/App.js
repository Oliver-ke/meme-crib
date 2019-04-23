import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Container } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About'
import Contact from './screens/contact';
export class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Navbar />
					<Container fluid={true} style={{ margin: '0' }}>
						<Route component={Home} path="/" exact />
						<Route component={About} path="/about" exact />
						<Route component={Contact} path="/contact" exact />
					</Container>
				</Router>
			</div>
		);
	}
}

export default App;
