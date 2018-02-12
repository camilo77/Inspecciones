import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

class Index extends Component {
  render(){
    return(
      <div>
        <h1>Agenda</h1>
        <Divider/>
        <h1>Otras Funciones</h1>

        <Link to="/inspecciones">
          <RaisedButton
            primary = { true }
            label = "Solicitar Inspección"
          />
        </Link>
        { " " }
        <Link to="/inspecciones">
          <RaisedButton
            primary = { true }
            label = "Agendar Inspección"
          />
        </Link>
        <br/>
        <Link to="/inspecciones">
          <RaisedButton
            primary = { true }
            label = "Agendar Inspección"
          />
        </Link>
        { " " }
        <Link to="/inspecciones">
          <RaisedButton
            primary = { true }
            label = "Agendar Inspección"
          />
        </Link>
      </div>
    );
  }
}

export default Index;
