import { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import SassComponent from './Styling/SassComponent';
import CSSModule from './Styling/CSSModule';
import StyledComponent from './Styling/StyledComponent';

class Styling extends Component {
  render() {
    return (
      // <div className="App">
      // 	<header
      // 	// className="App-header"
      // 	>
      // 		<img src={logo} className="logo" alt="logo" />
      // 		<p>
      // 			Edit <code>src/App.js</code> and save to reload.
      // 		</p>
      // 		<a
      // 			// className="App-link"
      // 			href="https://reactjs.org"
      // 			target="_blank"
      // 			rel="noopener noreferrer">
      // 			Learn React
      // 		</a>
      // 	</header>
      // </div>
      <div>
        <div>
          <SassComponent />
        </div>
        <div>
          <CSSModule />
        </div>
        <div>
          <StyledComponent />
        </div>
      </div>
    );
  }
}

export default Styling;
