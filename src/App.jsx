import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    // TAMBAHKAN basename DI SINI
    // import.meta.env.BASE_URL akan otomatis mengambil nilai '/AEG/' dari vite.config.js
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;