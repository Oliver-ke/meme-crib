import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import SearchBox from '../components/search/Search';
import CardContainer from '../components/displayCard/CardContainer';
class Home extends Component {
	render() {
		return (
			<Row>
				<Col style={{ padding: '0px' }} xs="12">
					<div className="landing" style={{ width: '100%', marginTop: '-3rem', height: '60vh' }}>
						<div style={{ textAlign: 'center' }} className="dark-overlay">
							<h1 style={{ color: '#fff', marginBottom: '-100px', paddingTop: '30px' }}>
								Welcome to the home of Meme<br />
								<span style={{ fontSize: '18px', color: '#ccc' }}>
									Find what you love, use what you love ):
								</span>
							</h1>
							<SearchBox />
						</div>
					</div>
				</Col>
				<Col style={{ padding: '0px' }} xs="12">
					<CardContainer />
				</Col>
			</Row>
		);
	}
}

export default Home;

// import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import logo from '../logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App" style={ {padding:'0px', backgroundImage: `url(require("back.jpeg"))` } }>
//         <img style={{marginRight:'10px'}} src={logo} alt="Logo" />
//         <br></br>
//         <br></br>
//         <p>Welcome to the World of Meme.<br /> Here Mimes arent just Hilarous, <br />but satisfying as well</p>
//         <Button outline color="secondary">Email Address</Button>{' '}
//         <Button clor="success">subscribe for new updates</Button>{' '}
//         <Button style={{float:'right',marginRight:'250px'}} outline color="secondary">Get Started</Button>{' '}
//       </div>
//     );
//   }
// }

// export default App;
