import React, { Component } from 'react';

import NavBar from './NavBar';
import LeftMenu from './LeftMenu';

class Header extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return(
      <div style = { styles.header }>
        { /* Navigation Bar */ }
        <NavBar
          onClick = { this.handleToggle }
        />
        { /* --- Left Navigation Bar --- */ }
        <LeftMenu
          open = { this.state.open }
          onRequestChange = { (open) => this.setState({ open }) }
          onClickMenuItem = { this.handleToggle }
        />
      </div>
    );
  }
}

const styles = {
  header: {
    textAlign: 'left',
  },
  navBar: {
    position: 'fixed',
    top: 0,
    height: 65,
  },
}

export default Header;
