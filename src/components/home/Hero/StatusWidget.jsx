import { motion } from 'framer-motion';

const StatusWidget = ({ style = {} }) => {
    return (
        <motion.div
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15, delay: 0.25, ease: "circOut" }}
            style={{
                '--panel-accent': 'var(--accent-tertiary)',
                background: 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', /* Centered */
                textAlign: 'center',
                transition: 'all 0.15s ease',
                ...style
            }}
            whileHover={{
                borderColor: 'var(--accent-tertiary)',
                boxShadow: 'none'
            }}
        >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>
                ☕
            </div>
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.5px'
            }}>
                FUELING
            </div>
            <div style={{
                fontSize: '0.65rem',
                color: 'var(--accent-tertiary)',
                marginTop: '2px',
                fontWeight: 600
            }}>
                STATUS: IDLE
            </div>
        </motion.div>
    );
};

export default StatusWidget;
