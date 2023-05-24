import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard.page';

const App = () => {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
     
    </BrowserRouter>
  );
};

export default App;
