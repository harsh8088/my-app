import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from "reactjs-popup";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, isLogin: false };
  }




  render() {

    const isLogin = this.state.isLogin;
    let button;

    if (isLogin) {
      button = <button className="App-button-signin" type="button" onClick={this.sign_out} >Sign Out</button>;
    } else {
      button = <button className="App-button-signin" type="button" onClick={this.sign_in}>Sign In</button>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-div-signin">

          {button}

        </div>
        <button className="App-button-signin" type="button" onClick={this.openModal}>
          Show Popup
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal" style={{ "padding": 5, "color": '#000000' }}>
            <a className="close" onClick={this.closeModal}>
              &times;
            </a >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
            omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
            ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
            doloribus. Odit, aut.
          </div>
        </Popup>
      </div>
    );
  }

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };


  sign_in = () => {
    this.setState({ isLogin: true });
  }

  sign_out = () => {
    this.setState({ isLogin: false });
  }
}

export default App;
