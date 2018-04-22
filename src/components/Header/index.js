import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './index.less';

class Header extends Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}!</p>
      </div>
    );
  }
}

export default Header;
