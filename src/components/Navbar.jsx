import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const location = useLocation();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/experience', label: 'Exp.' },
        { href: '/projects', label: 'Projects' },
        { href: '/profile', label: 'Profile' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">Portfolio.</Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <ul className="nav-links">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    to={link.href}
                                    className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
                                >
                                    {link.label}
                                    {location.pathname === link.href && (
                                        <motion.div
                                            layoutId="underline"
                                            className="nav-underline"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }}></div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
