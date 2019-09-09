import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

//factory
import {getUsuario, logout} from '../factory/usuario';

class Theme extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          usuario: null,
          routesSidebar: null,
          routesSwitch: null,
        };
      }

      componentDidMount() {
        const usuario = getUsuario();
        this.setState({ usuario });
        console.log(usuario);
      }

      render(){
        let { collapse, usuario } = this.state;
        if (usuario === null) return null;
          return(
              <h1>Testing :3</h1>
          )
      }
}

export default Theme;