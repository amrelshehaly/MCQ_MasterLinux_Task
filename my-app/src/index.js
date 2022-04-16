import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import {QuestionProvider} from './context/questions.context'

let theme = createTheme({
  typography: {
    h3:{
      color:'white'
    },
    body1:{
      color:'white'
    }
  }
});

theme = responsiveFontSizes(theme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
