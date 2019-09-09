import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

//factory
import {login} from '../factory/usuario';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          form: {}
        };
      }


    render(){

        const { form } = this.state;

        if (sessionStorage.getItem('Usuario') !== null) {
            return null;
        }

        const handleForm = event => {
            const { name, value } = event.target;
            this.setState({ form: { ...form, [name]: value } });
        };

        const onSubmit = event => {
            event.preventDefault();
            (async () => {
                const usuario = await login(form.login, form.password);
                if(usuario){
                    document.location.href = "/";
                }else{
                    this.setState({ form: { ...form, message: 'Usuario/Contraseña Erroneo' } });
                    setTimeout(() =>{
                        this.setState({form: { ...form, message: null } })
                    },2000);
                }
              })();
        }

        return(
            <form style={{ width: 400, margin: 'auto', backgroundColor: '#ddd', padding: 20, textAlign: 'center' }}
            autoComplete="off" onSubmit={onSubmit}>
                <Typography variant="h4">Acceso</Typography>

                <TextField label="Usuario" name="login" inputProps={{ placeholder: 'Usuario' }} onChange={handleForm} autoFocus /> <br/>
                <TextField label="Contraseña" name="password" inputProps={{ placeholder: 'Contraseña' }}  onChange={handleForm} type="password" />
                <br/>

                {form.message && (
                    <div style={{ color: 'red' }}>{form.message}</div>
                )}
                <br/><br/>
                <Button type="submit" variant="contained" color="primary">Acceder</Button>
            </form>
        )
    }
}

export default Login;