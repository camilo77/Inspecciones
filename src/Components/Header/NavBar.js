import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/* Material components*/
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

/* Icons */
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

/* Button to open left navigation bar - menu */
const MenuButton = ( props ) => (
  <IconButton onClick = { props.onClick }>
    <NavigationMenu color = { "white" }/>
  </IconButton>
);
MenuButton.muiName = 'IconButton';

/* titles of the Navigation Bar */
const Title = ( props ) => (
  <div >
    <Route
      exact path = "/"
      render = { () => <div>Dashboard</div> }
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
Title.muiName = 'div';

/* Right Menu */
const RightMenu = ( props ) => (
  <div >
    <IconButton>
      <SocialNotifications color = {"white"}/>
    </IconButton>
    <Avatar
      src = "images/avatar.jpg"
      size = {30}
    />
    <IconMenu
      iconButtonElement = {
        <IconButton><MoreVertIcon color = {"white"}/></IconButton>
      }
      targetOrigin = { {horizontal: 'right', vertical: 'top'} }
      anchorOrigin = { {horizontal: 'right', vertical: 'top'} }
    >
      <MenuItem primaryText = "Ayuda" />
      <MenuItem primaryText = "Salir" />
    </IconMenu>
  </div>
);
RightMenu.muiName = 'div';

class NavBar extends Component {
  render(){
    return(
      <AppBar
        title = { <Title/> }
        iconElementLeft = { <MenuButton onClick = { this.props.onClick } /> }
        iconElementRight = { <RightMenu/>}
        style = { styles.navBar }
      />
    );
  }
}

const styles = {
  navBar: {
    position: 'fixed',
    top: 0,
    height: 65,
  },
}

export default NavBar;
