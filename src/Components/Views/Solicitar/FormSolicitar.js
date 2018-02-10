import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import MenuItem from 'material-ui/MenuItem';


class FormSolicitar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
							    	razon_social: '',
							    	contacto: '',
							    	direccion: '',
							    	telefono: '',
							    	noEquipo: 1,
							    	equipos: [],
							    	buttonRemoveDisabled: true
							    };

		this.addEquipo = this.addEquipo.bind(this);
		this.removeEquipo = this.removeEquipo.bind(this);
		this.renderEquipo = this.renderEquipo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( event ) {
    this.setState({ razon_social: event.target.value });
  }

  handleSubmit( event ) {
    alert( 'A name was submitted: ' + this.state.razon_social );
    event.preventDefault();
  }

  addEquipo() {
  	var equipos = this.state.equipos.slice();
  	if ( equipos.length == 0 )
  		this.setState( { buttonRemoveDisabled: false } )
  	equipos.push( this.renderEquipo() );
  	this.setState( { equipos: equipos, noEquipo: this.state.noEquipo + 1  } );
  }

  removeEquipo() {
  	var equipos = this.state.equipos.slice();
  	if ( equipos.length > 0) {
	  	equipos.pop();
	  	this.setState( { equipos: equipos, noEquipo: this.state.noEquipo - 1  } );
  	}

  	if ( equipos.length == 0 )
  		this.setState( { buttonRemoveDisabled: true } )
  }

	renderEquipo() {
  	return (
  		<SelectEquipo
  			noEquipo = { this.state.noEquipo }
  		/>
		);
  }

  render() {
    return (
    	<div>
				<h2>SOLICITUD INSPECCIÓN</h2>
    		<form onSubmit={this.handleSubmit}>
					{ /* Form Empresa*/ }
    			<h3>INFORMACIÓN EMPRESA</h3>
	      	<TextField
						value = { this.state.razon_social }
					  floatingLabelText = "Razón Social"
					  onChange = { this.handleChange }
					  type = 'text'
					  required = { true }
					/><br/>
					<TextField
					  floatingLabelText = "Nombre Contacto"
					  type = 'text'
					/><br/>
					<TextField
					  floatingLabelText = "Dirección"
					  type = 'text'
					/><br/>
					<TextField
					  floatingLabelText = "Teléfono"
					  type = 'number'
					/><br/><br/>
					{ /* Form Equipos*/ }
			    <h3>EQUIPOS</h3>
		      { this.state.equipos }
			    <FloatingActionButton
			    	mini = { true }
			    	onClick = { this.addEquipo }
			    >
			      <ContentAdd />
			    </FloatingActionButton>
			    { " " }
			    <FloatingActionButton
			    	mini = { true }
			    	secondary = { true } ç
			    	disabled = { this.state.buttonRemoveDisabled }
			    	onClick={ this.removeEquipo }>
			      <ContentRemove />
			    </FloatingActionButton><br/><br/><br/><br/>

					{ /* Another Fields */ }
			    <h3>FECHA DE INSPECCIÓN</h3>
			    <DatePicker hintText="Seleccione fecha" />
					<br/><br/>
					<h3>COTIZACIÓN</h3>
			    <TextField
					  floatingLabelText = "Ingrese un valor"
					  type = 'number'
					/><br/><br/>
			    <RaisedButton
			    	type="submit"
			    	label = "Solicitar"
			    	primary = { true }
			    	fullWidth = { true }
			    />
			    <br/><br/>
	      </form>
    	</div>
    );
  }
}

/* Component to render a select to choose a Equipo  */
class SelectEquipo extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: null
		}
		this.handleChange = this.handleChange.bind( this );
	}

	handleChange( event, index, value ) {
    this.setState({ value });
  }

	render() {
		return(
			<div>
		    <SelectField
		    	id = { this.props.noEquipo }
		      floatingLabelText = { "Equipo " + this.props.noEquipo }
		      value = { this.state.value }
		      onChange = { this.handleChange }
		    >
		      <MenuItem value = { 1 } primaryText = "Ascensor" />
		      <MenuItem value = { 2 } primaryText = "Puerta Eléctrica" />
		      <MenuItem value = { 3 } primaryText = "Escalera / Anden" />
		    </SelectField>
  		</div>
		);
	}
}

export default FormSolicitar;
