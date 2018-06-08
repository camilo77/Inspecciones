import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {
  Step,
  Stepper,
  StepLabel,
  StepButton
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import ActionDone from 'material-ui/svg-icons/action/done';


class FormSolicitar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
							    	razon_social: undefined,
							    	contacto: undefined,
							    	direccion: undefined,
							    	telefono: undefined,
							    	noEquipo: 1,
							    	equipos: [],
							    	buttonRemoveDisabled: true,
							    	stepIndex: 0,
							    	dateTime: null
							    };

		this.addEquipo = this.addEquipo.bind(this);
		this.removeEquipo = this.removeEquipo.bind(this);
		this.renderEquipo = this.renderEquipo.bind(this);
    this.handleChangeEmpresa = this.handleChangeEmpresa.bind(this);
    this.handleChangeContacto = this.handleChangeContacto.bind(this);
    this.handleChangeDireccion = this.handleChangeDireccion.bind(this);
    this.handleChangeTelefono = this.handleChangeTelefono.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);

		// this.setDate = (dateTime) => this.setState({ dateTime: dateTime });
    this.setDate = this.setDate.bind(this);
    this.validarStepDos = this.validarStepDos.bind(this);
    this.validarStepTres = this.validarStepTres.bind(this);
  }

  validarStepDos() {
  	var razon_social = this.state.razon_social;
  	var contacto = this.state.contacto;
  	var direccion = this.state.direccion;
  	var telefono = this.state.telefono;

    if (razon_social != undefined  && contacto != undefined && direccion != undefined && telefono != undefined) {
    	this.setState({stepIndex: 1});
    }
  }

  validarStepTres() {
  	var equipos = this.state.equipos.slice();
  	if ( equipos.length != 0 ){
  		//this.setState({stepIndex: 2});
  	}else{

  	}
  }

  handleNext() {
    const {stepIndex} = this.state;

    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;

    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  handleChangeEmpresa( event ) {
    this.setState({ razon_social: event.target.value });
  }
  
  handleChangeContacto( event ) {
    this.setState({ contacto: event.target.value });
  }

  handleChangeDireccion( event ) {
    this.setState({ direccion: event.target.value });
  }

  handleChangeTelefono( event ) {
    this.setState({ telefono: event.target.value });
  }

  handleSubmit( event ) {
    //alert( 'A name was submitted: ' + this.state.razon_social );
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

  setDate( dateTime ) {
    this.setState({ dateTime: dateTime });
  }

	renderEquipo() {
  	return (
  		<SelectEquipo
  			noEquipo = { this.state.noEquipo }
  		/>
		);
  }

  getStepContent(stepIndex) {
  	const titleStyle = { backgroundColor: '#00c1d6', color: 'white' };
  	const textFiledStyle = { width: '50%', height: '70px', fontSize: 'medium' };
  	const equipos = this.state.buttonRemoveDisabled;

    switch (stepIndex) {
      case 0:
        return (
          <p>
          	<div style={ titleStyle }>
	          	<Divider/>
	          	<br/>
	          	<label>INFORMACIÓN BÁSICA</label>
	          	<br/><br/>
	          	<Divider/>
	          </div>
	          <br/>
	          <Divider/>
	          <div style={{ borderLeft: '10px solid', borderColor: '#00c1d6' }}>
			      	<TextField
								value = { this.state.razon_social }
							  floatingLabelText = "Razón Social"
							  onChange = { this.handleChangeEmpresa }
							  type = 'text'
							  required = { true }
							  style = { textFiledStyle }
							/><br/>
							<TextField
								value = { this.state.contacto }
							  floatingLabelText = "Nombre Contacto"
							  onChange = { this.handleChangeContacto }
							  type = 'text'
							  required = { true }
							  style = { textFiledStyle }
							/><br/>
							<TextField
								value = { this.state.direccion }
							  floatingLabelText = "Dirección"
							  onChange = { this.handleChangeDireccion }
							  type = 'text'
							  required = { true }
							  style = { textFiledStyle }
							/><br/>
							<TextField
								value = { this.state.telefono }
							  floatingLabelText = "Teléfono"
							  onChange = { this.handleChangeTelefono }
							  type = 'number'
							  required = { true }
							  style = { textFiledStyle }
							/>
							<br/><br/><br/>
						</div>
						<Divider/>
						<br/>
          </p>
        );

      case 1:
        return (
          <p>
          	<div style={ titleStyle }>
	          	<Divider/>
	          	<br/>
	          	<label>SELECCIÓN DE EQUIPOS</label>
	          	<br/><br/>
	          	<Divider/>
	          </div>
	          <br/>
            <Divider/>
            <div style={{ borderLeft: '10px solid', borderColor: '#00c1d6' }}>
				      { this.state.equipos }
				      { equipos ? '' : <br/>}
				      { equipos ? '' : <br/>}
				      { equipos ? '' : <br/>}
			      </div>
			      <Divider/>
            <br/>
				    <FloatingActionButton
				    	mini = { true }
				    	onClick = { this.addEquipo }
				    >
				      <ContentAdd />
				    </FloatingActionButton>
				    { " " }
				    <FloatingActionButton
				    	mini = { true }
				    	secondary = { true }
				    	disabled = { this.state.buttonRemoveDisabled }
				    	onClick={ this.removeEquipo }>
				      <ContentRemove />
				    </FloatingActionButton>
				    <br/><br/>
				    <Divider/>
				    <br/><br/>
          </p>
        );

      case 2:
        return (
          <p>
          	<div style={ titleStyle }>
	          	<Divider/>
	          	<br/>
	          	<label>FECHA DE INSPECCIÓN</label>
	          	<br/><br/>
	          	<Divider/>
	          </div>
	          <br/>
	          <Divider/>
            <div style={{ paddingLeft: '30%', borderLeft: '10px solid', borderColor: '#00c1d6' }}>
            	<DateTimePicker 
		          	floatingLabelText = 'Seleccione fecha'
		          	value = { this.state.dateTime }
				        onChange = { this.setDate }
				        DatePicker = { DatePickerDialog }
				        TimePicker = { TimePickerDialog }
				        format = 'MMM DD, YYYY hh:mm A'
				        clearIcon = { null } // set null to not render nothing
				        style = { textFiledStyle }
				      />
				      <br/><br/>
            </div>
	          <Divider/>
	          <br/>
            <div style={ titleStyle }>
	          	<Divider/>
	          	<br/>
	          	<label>COTIZACIÓN</label>
	          	<br/><br/>
	          	<Divider/>
	          </div>
	          <br/>
	          <Divider/>
	          <div style={{ borderLeft: '10px solid', borderColor: '#00c1d6' }}>
					    <TextField
							  floatingLabelText = "Ingrese un valor"
							  type = 'number'
							  style = { textFiledStyle }
							/>
							<br/><br/><br/>
						</div>
						<Divider/>
						<br/>
				    <RaisedButton
				    	type="submit"
				    	label = "Solicitar"
      				labelPosition="before"
				    	secondary = { true }
				    	fullWidth = { false }
				    	icon={<ActionDone />}
				    />
				    <br/><br/>
          </p>
        );
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
    	<form onSubmit={this.handleSubmit}>
	      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
	      	<br/>
	      	<Divider/>
	        <Stepper 
	        	linear={false}
	        	activeStep={stepIndex}
	        >
	          <Step>
	            <StepButton onClick={() => this.setState({stepIndex: 0})}>
	              <b>EMPRESA</b>
	            </StepButton>
	          </Step>
	          <Step>
	            <StepButton type="submit" onClick={this.validarStepDos}>
	              <b>EQUIPOS</b>
	            </StepButton>
	          </Step>
	          <Step>
	            <StepButton type="submit" onClick={() => this.setState({stepIndex: 2})}>
	              <b>OTROS</b>
	            </StepButton>
	          </Step>
	        </Stepper>
	        <Divider/>
	        <div style={contentStyle}>
	          <p>{this.getStepContent(stepIndex)}</p>
	        </div>
	      </div>
      </form>
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
		      required = { true }
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