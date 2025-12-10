import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UsernameRotator = () => {
    const [index, setIndex] = useState(0);
    const words = ["Cakra27","amdcakra", "revv."];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <span style={{
            marginLeft: '0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 300, userSelect: 'none' }}>&gt;</span>
            <span style={{ position: 'relative', fontWeight: 300, display: 'inline-block', color: 'var(--accent-color)', minWidth: '140px' }}>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={words[index]}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ position: 'absolute', left: 0 }}
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
                {/* Invisible spacer to keep layout stable if needed */}
                <span style={{ opacity: 0 }}>{words[0]}</span>
            </span>
        </span>
    );
};

export default UsernameRotator;
