import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalWidget = () => {
    const [lines, setLines] = useState([
        "System initialized...",
        "Loading core modules...",
        "Connecting to secure server..."
    ]);

    useEffect(() => {
        const possibleLines = [
            "Analyzing network traffic...",
            "Optimizing build pipeline...",
            "Encrypting data streams...",
            "Checking status: ONLINE",
            "Refreshing user session...",
            "Ping: 24ms",
            "Security scan complete.",
            "Deploying to production..."
        ];

        const interval = setInterval(() => {
            setLines(prev => {
                const newLine = possibleLines[Math.floor(Math.random() * possibleLines.length)];
                const newLines = [...prev, `> ${newLine}`];
                if (newLines.length > 5) newLines.shift(); // Keep last 5 lines
                return newLines;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            color: 'var(--terminal-text)',
            background: 'var(--terminal-bg)',
            justifyContent: 'space-between',
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'background-color 0.3s, color 0.3s'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '0.75rem',
                borderBottom: '1px solid var(--terminal-border)',
                paddingBottom: '10px',
                width: '100%',
                transition: 'border-color 0.3s'
            }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--terminal-text)' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--terminal-meta)' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--terminal-meta)' }}></div>
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.7, fontWeight: 600, color: 'var(--terminal-text)' }}>TERMINAL.exe</span>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
                <AnimatePresence mode='popLayout'>
                    {lines.map((line, i) => {
                        const isSuccess = line.includes("ONLINE") || line.includes("complete") || line.includes("Connected");
                        const isMeta = line.includes("Ping");
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    color: isSuccess ? 'var(--terminal-success)' : (isMeta ? 'var(--terminal-meta)' : 'var(--terminal-text)'),
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    textShadow: isSuccess ? 'var(--terminal-glow, 0 0 5px rgba(0,255,255,0.5))' : 'none',
                                    transition: 'color 0.3s'
                                }}
                            >
                                {line.startsWith('>') ? <span style={{ color: 'var(--terminal-meta)', marginRight: '8px' }}>{new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span> : null}
                                {line}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TerminalWidget;
