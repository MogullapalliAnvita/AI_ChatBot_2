import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from './context/AuthContext.tsx';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#38bdf8' },
    secondary: { main: '#60a5fa' },
    background: { default: '#050914', paper: '#0b1224' },
  },
  typography: {
    fontFamily: 'Space Grotesk, Manrope, sans-serif',
    allVariants: { color: '#e2e8f0' },
  },
  shape: { borderRadius: 14 },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position='top-right'/>
            <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
