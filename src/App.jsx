import './App.css'
import Header from './components/Header';
import InputAPI from './components/InputAPI'
import DataAPI from './components/dataAPI';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <InputAPI />
      <DataAPI />
    </ThemeProvider>
  );
}

export default App
