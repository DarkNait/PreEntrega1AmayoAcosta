import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpvsqPxC_9YNcnVuRJfmNNhEmXc6W_0E",
  authDomain: "coder-react-djstore.firebaseapp.com",
  projectId: "coder-react-djstore",
  storageBucket: "coder-react-djstore.appspot.com",
  messagingSenderId: "811564311261",
  appId: "1:811564311261:web:a8c455a6b3ad71965eb134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
          