import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* Material components*/
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

/* Icons */
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import MapsDirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';

/* render sub menu when is request to open */
const SubMenuInspeciones = ( props ) => (
  <div style = { styles.subMenu }>
    <Link to = "/solicitar" style = { styles.link }>
      <MenuItem
        onClick = { props.onClickMenuItem }
        rightIcon = { <CommunicationCall/> }
      >
        Solicitar
      </MenuItem>
    </Link>
    <Link to = "/agendar" style = { styles.link }>
      <MenuItem
        onClick = { props.onClickMenuItem }
        rightIcon = { <ActionDateRange/> }
      >
        Agendar
      </MenuItem>
    </Link>
  </div>
);

/* render sub menu when is request to open */
const SubMenuInspectores = ( props ) => (
  <div style = { styles.subMenu }>
    <MenuItem
      onClick = { props.onClickMenuItem }
      rightIcon = { <CommunicationCall/> }
    >
      Registrar
    </MenuItem>
    <MenuItem
      onClick = { props.onClickMenuItem }
      rightIcon = { <ActionDateRange/> }
    >
      Agendar
    </MenuItem>
  </div>
);

class MenuBody extends Component{
  constructor( props ) {
    super( props );
    this.state = {
      openSubMenuInspecciones: false,
      openSubMenuInspectores: false,
    }
  }

  handleInspeccionesSubMenu = () =>
    this.setState({ openSubMenuInspecciones: !this.state.openSubMenuInspecciones });

  handleInspectoresSubMenu = () =>
    this.setState({ openSubMenuInspectores: !this.state.openSubMenuInspectores });

  render() {
    return(
      <div>
        { /* Section Dashboard */ }
        <Link to = "/dashboard" style = { styles.link }>
          <MenuItem
            onClick = { this.props.onClickMenuItem }
            leftIcon = { <ActionDashboard/> }
          >
            Dashboard
          </MenuItem>
        </Link>
        <Divider />

        { /* Section Ispecciones */ }
        <Link to = "/inspecciones" style = { styles.link }>
          <MenuItem
            onClick = { this.handleInspeccionesSubMenu }
            leftIcon = { <ActionBuild/> }
            rightIcon = {
              this.state.openSubMenuInspecciones ?
                <HardwareKeyboardArrowUp/> :
                <HardwareKeyboardArrowDown/>
            }
          >
            Inspecciones
          </MenuItem>
        </Link>
        { /* Sub Menu Inspecciones*/}
        { this.state.openSubMenuInspecciones ?
            <SubMenuInspeciones
              onClickMenuItem = { this.props.onClickMenuItem }
            />
          : ''
        }
        <Divider />

        { /* Section Inspectores */ }
        <Link to = "/inspecciones" style = { styles.link }>
          <MenuItem
            onClick = { this.handleInspectoresSubMenu }
            leftIcon = { <MapsDirectionsWalk/> }
            rightIcon = {
              this.state.openSubMenuInspectores ?
                <HardwareKeyboardArrowUp/> :
                <HardwareKeyboardArrowDown/>
            }
          >
            Inspectores
          </MenuItem>
        </Link>
        { /* Sub Menu Inspecctores*/}
        { this.state.openSubMenuInspectores ?
            <SubMenuInspectores
              onClickMenuItem = { this.props.onClickMenuItem }
            />
          : ''
        }
        <Divider/>
      </div>
    );
  }
}

class LeftMenu extends Component {

  render() {
    return(
      <Drawer
        open = { this.props.open }
        docked = { false }
        onRequestChange = { this.props.onRequestChange }
      >
        { /* Header */ }
        <div style = { styles.leftMenuHeader }>
          <Avatar
            src = "images/avatar.jpg"
            style = { styles.avatarLeftMenu }
          />
        </div>
        { /*  Menu */ }
        <MenuBody
          onClickMenuItem = { this.props.onClickMenuItem }
        />

      </Drawer>
    );
  }
}

const styles = {
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

export default LeftMenu;
