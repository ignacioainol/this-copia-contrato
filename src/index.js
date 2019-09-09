import React from 'react';
import ReactDOM from 'react-dom';

//material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/theme-ui';
import App from './components/theme';

import './index.css';

//pages controllers
import Login from './pages/Login';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
        <App/>
    </ThemeProvider>,

    document.getElementById('root')
    );
