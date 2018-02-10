import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    /* Button to open left navigation bar - menu */
    const menuButton = (
      <IconButton onClick = { this.handleToggle }>
        <NavigationMenu/>
      </IconButton>
    );

    /* titles of the Navigation Bar */
    const title = (
      <div>
        <Route
          exact path = "/"
          render={ () => <div>Dashboard</div> }
        />
        <Route
          exact path = "/dashboard"
          render = { () => <div>Dashboard</div> }
        />
        <Route
          exact path = "/inspecciones"
          render = { () => <div>Inspecciones</div> }
        />
      </div>
    );

    return(
      <div style = { styles.header }>
        { /* Navigation Bar */ }
        <AppBar
          title = { title }
          iconElementLeft = { menuButton }
          style = { styles.navBar }
        />
        { /* Menu - Left Navigation Bar */ }
        <Drawer
          open = { this.state.open }
          docked = { false }
          onRequestChange = { (open) => this.setState({ open }) }
        >
          <Link to="/dashboard" >
            <MenuItem onClick = { this.handleClose }>
              Dashboard
            </MenuItem>
          </Link>

          <Link to="/inspecciones">
            <MenuItem onClick = { this.handleClose }>
            Inspecciones
            </MenuItem>
          </Link>
        </Drawer>
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
  }
}

export default Header;
