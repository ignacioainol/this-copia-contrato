import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Typography, TextField, Button, InputLabel, Input, FormHelperText } from '@material-ui/core';

class Login extends React.Component{
    render(){
        return(
            <form style={{ width: 400, margin: 'auto', backgroundColor: '#ddd', padding: 20, textAlign: 'center' }}
            autoComplete="off">
                <Typography variant="h4">Acceso</Typography>

                <TextField label="Usuario" name="login" autoFocus /> <br/>
                <TextField label="Contraseña" name="password" type="password" />
                
                <br/><br/>
                <Button type="submit" variant="contained" color="primary">Acceder</Button>
            </form>
        )
    }
}

export default Login;