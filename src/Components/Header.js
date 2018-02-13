import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

/* Material components*/
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import Divider from 'material-ui/Divider';

/* Icons */
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import MapsDirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';

class Header extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: false,
      openSubMenuInsp: true,
      openSubMenuInsp2: false,
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleInspSubMenu = () =>
    this.setState({ openSubMenuInsp: !this.state.openSubMenuInsp });

  handleInsp2SubMenu = () =>
    this.setState({ openSubMenuInsp2: !this.state.openSubMenuInsp2 });

  handleClose = () => this.setState({ open: false });

  render() {
    /* Button to open left navigation bar - menu */
    const menuButton = (
      <IconButton onClick = { this.handleToggle }>
        <NavigationMenu/>
      </IconButton>
    );

    /* Left Menu */
    const leftMenu = (
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

    /* render sub menu when is request to open */
    const subMenuInsp = (
      this.state.openSubMenuInsp ?
      <div style = { styles.subMenu }>
        <MenuItem
          onClick = { this.handleClose }
          rightIcon = { <CommunicationCall/> }
        >
          Solicitar
        </MenuItem>
        <MenuItem
          onClick = { this.handleClose }
          rightIcon = { <ActionDateRange/> }
        >
          Agendar
        </MenuItem>
      </div>  :
      <div></div>
    );

    /* render sub menu when is request to open */
    const subMenuInsp2 = (
      this.state.openSubMenuInsp2 ?
      <div style = { styles.subMenu }>
        <MenuItem
          onClick = { this.handleClose }
          rightIcon = { <CommunicationCall/> }
        >
          Registrar
        </MenuItem>
        <MenuItem
          onClick = { this.handleClose }
          rightIcon = { <ActionDateRange/> }
        >
          Agendar
        </MenuItem>
      </div>  :
      <div></div>
    );

    return(
      <div style = { styles.header }>
        { /* Navigation Bar */ }
        <AppBar
          title = { title }
          iconElementLeft = { menuButton }
          iconElementRight = { leftMenu }
          style = { styles.navBar }
        />
        { /* --- Left Navigation Bar --- */ }
        <Drawer
          open = { this.state.open }
          docked = { false }
          onRequestChange = { (open) => this.setState({ open }) }
        >

          <div style = { styles.leftMenuHeader }>
            <Avatar
              src = "images/avatar.jpg"
              style = { styles.avatarLeftMenu }
            />
          </div>

          { /*  Menu */ }

            <Link to = "/dashboard" style = { styles.link }>
              <MenuItem
                onClick = { this.handleClose }
                leftIcon = { <ActionDashboard/> }
              >
                Dashboard
              </MenuItem>
            </Link>
            <Divider />
            <Link to = "/inspecciones" style = { styles.link }>
              <MenuItem
                onClick = { this.handleInspSubMenu }
                leftIcon = { <ActionBuild/> }
                rightIcon = {
                  this.state.openSubMenuInsp ?
                    <HardwareKeyboardArrowUp/> :
                    <HardwareKeyboardArrowDown/>
                }
              >
              Inspecciones
              </MenuItem>
            </Link>
            { /* Sub Menu Inspecciones*/}
            { subMenuInsp }

            <Divider />

            <Link to = "/inspecciones" style = { styles.link }>
              <MenuItem
                onClick = { this.handleInsp2SubMenu }
                leftIcon = { <MapsDirectionsWalk/> }
                rightIcon = {
                  this.state.openSubMenuInsp2 ?
                    <HardwareKeyboardArrowUp/> :
                    <HardwareKeyboardArrowDown/>
                }
              >
              Inspectores
              </MenuItem>
            </Link>
            { /* Sub Menu Inspecctores*/}
            { subMenuInsp2 }
            <Divider/>
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
  },
  leftMenuHeader: {
    height: 120,
    backgroundColor: '#00BCD4',
    textAlign: 'center',
  },
  avatarLeftMenu: {
    position: 'relative',
    top: 20,
    height: 80,
    width: 80
  },
  link: {
    textDecoration: 'none'
  },
  subMenu: {
    textAlign: 'left'
  }
}

export default Header;
