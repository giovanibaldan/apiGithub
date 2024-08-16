import './App.css'
import Header from './components/Header';
import InputAPI from './components/InputAPI'
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
    </ThemeProvider>
  );
}

export default App
