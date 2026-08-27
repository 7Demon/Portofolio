import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

