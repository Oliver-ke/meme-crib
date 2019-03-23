import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App" style={ {padding:'0px', backgroundImage: `url(require("back.jpeg"))` } }>
        <img style={{marginRight:'10px'}} src={logo} alt="Logo" />
        <br></br>
        <br></br>
        <p>Welcome to the World of Meme.<br /> Here Mimes arent just Hilarous, <br />but satisfying as well</p>
        <Button outline color="secondary">Email Address</Button>{' '}
        <Button clor="success">subscribe for new updates</Button>{' '}
        <Button style={{float:'right',marginRight:'250px'}} outline color="secondary">Get Started</Button>{' '}
      </div>
    );
  }
}

export default App;
