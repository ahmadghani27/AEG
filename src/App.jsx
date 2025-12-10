import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    // PERUBAHAN ADA DI SINI:
    // Kita tambahkan 'basename' agar router tahu dia sedang berjalan di folder /AEG/
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