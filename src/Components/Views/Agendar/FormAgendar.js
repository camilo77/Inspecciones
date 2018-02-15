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

const styles = {
	radioButton: {
		marginTop: 16,
	},
};

const equipos = [
	{id: 1, nombre: "Ascensor"},
	{id: 2, nombre: "Puerta Eléctrica"},
	{id: 3, nombre: "Escalera / Anden"},
]

class FormAgendar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
							    	razon_social: '',
							    	valueEquipo: undefined,
							    	valueInspector: null,
							    	open: false
							    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEquipo = this.handleChangeEquipo.bind( this );
    this.handleChangeInspector = this.handleChangeInspector.bind( this );
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( event ) {
    this.setState({ razon_social: event.target.value });
  }

  handleChangeEquipo( event, index, value ) {
    this.setState({ valueEquipo: value });
  }

  handleChangeInspector( event, index, value ) {
    this.setState({ valueInspector: value });
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleOptionChange( event ) {
  	var codEquipo = event.target.value;
  	var equipo = equipos.find( (e) => e.id == codEquipo );
		this.setState({ valueEquipo: equipo.nombre });
  }

  handleSubmit( event ) {
    alert( 'A name was submitted: ' + this.state.razon_social );
    event.preventDefault();
  }

  render() {
  	const actions = [
  		<FlatButton
  			label = "Cancel"
  			primary = { true }
  			onClick = { this.handleClose }
  		/>,
  		<FlatButton
  			label = "Aceptar"
  			primary = { true }
  			keyboardFocused = { false }
  			onClick = { this.handleClose }
  		/>,
  	];

    return (
    	<div style = { {textAlign: 'center'} }>
				<h2>AGENDAR INSPECCIÓN</h2>
    		<form onSubmit={this.handleSubmit}>
					{ /* Form Empresa*/ }
	      	<TextField
						value = { this.state.razon_social }
					  floatingLabelText = "Razón Social"
					  onChange = { this.handleChange }
					  type = 'text'
					  required = { true }
					/><br/><br/>
					<TextField
						value = { this.state.valueEquipo }
					  hintText = "Tipo Equipo"
					  onClick = { this.handleOpen }
					  type = 'text'
					  readOnly = { true }
					/><br/>
					<div >
				    <Dialog
				    	title = "TIPO DE EQUIPO"
				    	actions = { actions }
				    	modal = { false }
				    	open = { this.state.open }
				    	onRequestClose = { this.handleClose }
				    	autoScrollBodyContent = { true }
				    >
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
				    </Dialog>
		  		</div>
					<TextField
					  floatingLabelText = "Empresa Mantenimiento"
					  type = 'text'
					/><br/><br/>
					<div style = { {textAlign: "left", width: 50} }>
						<label
							style = { {color: "gray"} }
						>Inspector
						</label>
					</div>
					<FloatingActionButton
			    	mini = { true }
			    >
			      <ContentAdd />
			    </FloatingActionButton>
					<br/>
					<TextField
					  	floatingLabelText = "Costo Inspección"
					  	type = 'number'
					/><br/><br/>

					{ /* Another Fields */ }
			    <h3>FECHA DE INSPECCIÓN</h3>
			    <DatePicker hintText="Seleccione fecha" />
					<br/><br/>
			    <RaisedButton
			    	type="submit"
			    	label = "Agendar"
			    	primary = { true }
			    	fullWidth = { true }
			    />
			    <br/><br/>
	      </form>
    	</div>
    );
  }
}

export default FormAgendar;
