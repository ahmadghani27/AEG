import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import ScrollToTop from './components/ScrollToTop'; // Pastikan file ini sudah dibuat
import './App.css';

function App() {
  // Hook ini sekarang aman dipakai karena App sudah dibungkus Router di main.jsx
  const location = useLocation();

  return (
    <>
      {/* Komponen agar scroll balik ke atas saat pindah page */}
      <ScrollToTop />
      
      <Layout>
        {/* PENTING: 'key={location.pathname}' 
           Ini memaksa React untuk merender ulang halaman sepenuhnya saat URL berubah.
           Solusi ampuh untuk masalah blank screen/bug animasi.
        */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;