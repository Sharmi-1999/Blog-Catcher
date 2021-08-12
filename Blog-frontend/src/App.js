import React from 'react';

// Handle console logs
// import './utils/dropConsole';

// ROUTER
import { BrowserRouter } from 'react-router-dom';
import  RouterConfig  from './navigation/RouterConfig';

// MUI Theme
import { ThemeProvider } from '@material-ui/core';
import { dark } from './styles/muiTheme';
import './scss/home.scss';

function App() {
  return (
      <div>
        <ThemeProvider theme={dark()}>
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </ThemeProvider>
      </div>
  );
}

export default App;
