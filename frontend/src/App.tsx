import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/modules/Dashboard';
import Generator from './components/modules/Generator';
import Analysis from './components/modules/Analysis';
import Responsible from './components/modules/Responsible';
import Profile from './components/modules/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/generate" element={<Generator />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/responsible" element={<Responsible />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;