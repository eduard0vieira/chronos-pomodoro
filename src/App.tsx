import './styles/global.css';
import './styles/theme.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutPomodoro from './pages/AboutPomodoro';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
