import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="page-container"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            <footer className="footer">
                <p>© 2025 Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
