import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton';

import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import ActionDone from 'material-ui/svg-icons/action/done';

import Avatar from 'material-ui/Avatar';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import PropTypes from 'prop-types';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const styles = {
	radioButton: {
		marginTop: 20,
	},
};

const equipos = [
	{id: 1, nombre: "Ascensor"},
	{id: 2, nombre: "Puerta Eléctrica"},
	{id: 3, nombre: "Escalera / Anden"},
]

const inspector = [
	{id: 1, nombre: "Jairo", apellido: "Torres"},
	{id: 2, nombre: "Roberth", apellido: "Gomez"},
	{id: 3, nombre: "Jose", apellido: "Gutierrez"},
]

class FormAgendar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
							    	razon_social: '',
							    	valueEquipo: undefined,
							    	valueInspector: null,
							    	openEquipos: false,
							    	openInspector: false,
							    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleOptionInspector = this.handleOptionInspector.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( event ) {
    this.setState({ razon_social: event.target.value });
  }

  handleopenEquipos = () => {
    this.setState({ openEquipos: true });
  }

  handleCloseEquipos = () => {
    this.setState({ openEquipos: false });
  }

  handleopenInspector = () => {
    this.setState({ openInspector: true });
  }

  handleCloseInspector = () => {
    this.setState({ openInspector: false });
  }

  handleCalendarInspector = () => {
    alert("Inspector Seleccionado: " + this.state.valueInspector);
    this.setState({ openInspector: false });
  }

  handleOptionChange( event ) {
  	console.log(event.target);
  	var codEquipo = event.target.value;
  	var equipo = equipos.find( (e) => e.id == codEquipo );
		this.setState({ valueEquipo: equipo.nombre });
  }

  handleOptionInspector( event ) {
  	console.log(event.target);
  }

  handleSubmit( event ) {
    alert( 'A name was submitted: ' + this.state.valueInspector );
    event.preventDefault();
  }

  render() {
  	const titleStyle = { backgroundColor: '#00c1d6', color: 'white' };
  	const textFiledStyle = { width: '50%', height: '70px', fontSize: 'medium' };
  	const customContentStyle = {
		  width: '50%',
		  maxWidth: 'none',
		};
  	const actionsTipoEquipo = [
  		<FlatButton
  			label = "Cancel"
  			primary = { true }
  			onClick = { this.handleCloseEquipos }
  		/>,
  		<FlatButton
  			label = "Aceptar"
  			primary = { true }
  			keyboardFocused = { false }
  			onClick = { this.handleCloseEquipos }
  		/>,
  	];
  	const actionsInspector = [
  		<FlatButton
  			label = "Cancel"
  			primary = { true }
  			onClick = { this.handleCloseInspector }
  		/>,
  		<FlatButton
  			label = "Aceptar"
  			primary = { true }
  			keyboardFocused = { false }
  			onClick = { this.handleCalendarInspector }
  		/>,
  	];

    return (
    	<div>
    		<form onSubmit={this.handleSubmit} style={{ width: '90%' }}>
    			<div style={ titleStyle }>
    				<br/>
          	<label>INFORMACIÓN INSPECCIÓN</label>
          	<br/><br/>
          	<Divider/>
          </div>
          <br/>
          <Divider/>
          <div style={{ borderLeft: '10px solid', borderColor: '#00c1d6'}}>
		      	<TextField
						  floatingLabelText = "Razón Social"
						  onChange = { this.handleChangeEmpresa }
						  type = 'text'
						  
						  style = { textFiledStyle }
						/><br/>
						<TextField
						  floatingLabelText = "Empresa Mto"
						  type = 'text'
						  
						  style = { textFiledStyle }
						/><br/>
						<TextField
							value = { this.state.valueInspector }
						  floatingLabelText = "Inspector"
						  onClick = { this.handleopenInspector }
						  type = 'text'
						  readOnly = { true }
						  style = { textFiledStyle }
						/><br/>
						<TextField
							value = { this.state.valueEquipo }
							floatingLabelText = "Tipo de equipo"
						  onClick = { this.handleopenEquipos }
						  type = 'text'
						  readOnly = { true }
						  style = { textFiledStyle }
						/><br/>				
						<TextField
						  floatingLabelText = "Fecha Inspección"
						  type = 'text'
						  
						  style = { textFiledStyle }
						/><br/>
						<TextField
						  floatingLabelText = "Valor Inspección"
						  type = 'number'
						  style = { textFiledStyle }
						/><br/><br/><br/>
						<RaisedButton
				    	type="submit"
				    	label = "Agendar"
      				labelPosition="before"
				    	secondary = { true }
				    	fullWidth = { false }
				    	icon={<ActionDone />}
				    /><br/><br/><br/>
					</div>
					<Divider/>
	      </form>

	    	{ /* MODAL OPCIONES EQUIPOS*/ }

	      <div >
			    <Dialog
			    	title = "TIPO DE EQUIPO"
			    	actions = { actionsTipoEquipo }
			    	modal = { false }
			    	open = { this.state.openEquipos }
			    	onRequestClose = { this.handleClose }
			    	autoScrollBodyContent = { true }
			    >
			    	<div style={{ borderLeft: '5px solid', borderColor: '#00c1d6', paddingLeft: '30px' }}>
				    	<RadioButtonGroup name = "shipSpeed" onChange = { this.handleOptionChange }>
				    		{ 
				    			equipos.map( (equipo) => 
				    				<RadioButton
				    					key = { equipo.id }
						    			value = { equipo.id }
						    			label = { equipo.nombre }
						    			style = { styles.radioButton }
						    		/>
						    	) 
				    		}
				    	</RadioButtonGroup>
				    </div>
			    </Dialog>
	  		</div>

	  		{ /* MODAL INSPECTORES*/ }

	      <div>
			    <Dialog
			    	title = "INSPECTORES"
			    	actions = { actionsInspector }
			    	modal = { false }
			    	open = { this.state.openInspector }
			    	onRequestClose = { this.handleClose }
			    	autoScrollBodyContent = { true }
			    >	
			    	<br/>
			    	<div style={{ borderLeft: '5px solid', borderColor: '#00c1d6' }}>
				    	<SelectableList>
				    	{ 
			    			inspector.map( (inspector) => 
						      <ListItem
						        value = { inspector.id }
						        primaryText = { <span>{inspector.nombre}{" "}{inspector.apellido}</span> }
						        leftAvatar = { <Avatar src = "images/avatar.jpg" /> }
						        rightIcon = { <ActionDateRange/> }
						        onClick = { (list) => this.setState({ valueInspector: inspector.nombre }) }
						      />
					    	) 
			    		}
			    		</SelectableList>
			    	</div>
			    </Dialog>
	  		</div>
    	</div>
    );
  }
}

export default FormAgendar;
