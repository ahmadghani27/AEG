import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Shield, Server, Box, Terminal, Activity, FileText } from 'lucide-react';
import UsernameRotator from './UsernameRotator';
import TerminalWidget from './TerminalWidget';
import DevJokesWidget from './DevJokesWidget';
import StatusWidget from './StatusWidget';

// Panel Component Wrapper
const BentoPanel = ({ children, className = '', style = {}, delay = 0, accentColor = 'var(--accent-color)' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
            borderColor: accentColor,
            boxShadow: 'none'
        }}
        transition={{ duration: 0.15 }}
        className={`glass-panel ${className}`}
        style={{
            '--panel-accent': accentColor,
            background: 'var(--surface-color)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius)',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'border-color 0.15s ease',
            ...style
        }}
    >
        {children}
    </motion.div>
);

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '2rem'
        }}>
            <div className="bento-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                /* Row 1: Identity/Avatar | Row 2: Widgets | Row 3: Control | Row 4: Footer */
                gridTemplateRows: 'minmax(260px, auto) 140px minmax(200px, auto) minmax(160px, auto)',
                gap: 'var(--spacing-standard)',
                width: '100%',
                maxWidth: 'var(--max-width)',
                margin: '0 auto',
            }}>

                {/* --- ROW 1: HEADER --- */}

                {/* Panel A1: Identity Text (Span 8) */}
                <BentoPanel
                    style={{ gridColumn: 'span 8', justifyContent: 'center' }}
                    delay={0.1}
                    accentColor="var(--accent-color)" // Cyan
                >
                    <div style={{ marginBottom: 'auto' }}>
                        <div style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-color)',
                            marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px'
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)' }} className="pulse"></span>
                            <span>ID: AGE_V5 // SYS_ADMIN</span>
                        </div>
                        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>
                            Ahmad Ediwan Ghani <br /><UsernameRotator />
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '90%' }}>
                            Constructing secure digital infrastructures. <br />
                            Cyber Security Enthusiast & DevOps Practitioner.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center', marginTop: '1.5rem' }}>
                        <motion.a href="#" className="social-icon" whileHover={{ borderColor: 'var(--accent-color)', boxShadow: '0 4px 12px var(--accent-glow)' }}><Github size={20} /></motion.a>
                        <motion.a href="#" className="social-icon" whileHover={{ borderColor: 'var(--accent-color)', boxShadow: '0 4px 12px var(--accent-glow)' }}><Linkedin size={20} /></motion.a>
                        <motion.a href="#" className="social-icon" whileHover={{ borderColor: 'var(--accent-color)', boxShadow: '0 4px 12px var(--accent-glow)' }}><Mail size={20} /></motion.a>
                        <motion.a href="#" className="social-icon" whileHover={{ borderColor: 'var(--accent-color)', boxShadow: '0 4px 12px var(--accent-glow)' }} title="Download CV"><FileText size={20} /></motion.a>
                    </div>
                </BentoPanel>

                {/* Panel A2: Avatar (Span 4) */}
                <BentoPanel
                    style={{ gridColumn: 'span 4', padding: 0, justifyContent: 'center', alignItems: 'center', background: 'var(--bg-secondary)' }}
                    delay={0.15}
                    accentColor="#22c55e" // Green
                >
                    <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'radial-gradient(var(--border-thin) 1px, transparent 1px)',
                            backgroundSize: '15px 15px',
                            opacity: 0.6
                        }} />
                        <img
                            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=transparent"
                            alt="Avatar"
                            style={{
                                width: '120%', height: '120%',
                                objectFit: 'contain',
                                transform: 'translateY(15px)',
                                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
                            }}
                        />
                    </div>
                </BentoPanel>

                {/* --- ROW 2: WIDGETS (NEW) --- */}

                {/* Widget A: Dev Jokes (Span 9) */}
                <DevJokesWidget style={{ gridColumn: 'span 9' }} />

                {/* Widget B: Status (Span 3) */}
                <StatusWidget style={{ gridColumn: 'span 3' }} />


                {/* --- ROW 3: CONTROL DECK --- */}

                {/* Panel B1: Mission Control (Span 5) */}
                <BentoPanel
                    style={{ gridColumn: 'span 5', cursor: 'pointer', background: 'var(--surface-hover)' }}
                    delay={0.2}
                    accentColor="var(--color-devops)"
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            padding: '6px 12px', borderRadius: '20px',
                            background: 'var(--bg-color)', border: '1px solid var(--border-color)'
                        }}>
                            <Activity size={16} color="var(--color-devops)" />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>MISSION_CTRL</span>
                        </div>
                        <ArrowUpRight size={20} color="var(--text-muted)" />
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>CURRENT OBJECTIVE</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.75rem' }}>
                            Cloud Security Architecture & DevSecOps Pipelines
                        </h3>
                    </div>
                </BentoPanel>

                {/* Panel B2: System Modules (Span 7) */}
                <BentoPanel
                    style={{ gridColumn: 'span 7' }}
                    delay={0.25}
                    accentColor="var(--color-security)"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <Shield size={20} color="var(--color-security)" />
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>System Modules</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', height: '100%' }}>
                        {/* Card 1 */}
                        <div className="status-card" style={{ '--widget-accent': 'var(--color-security)' }}>
                            <div className="status-header" style={{ color: 'var(--color-security)' }}>SECURITY</div>
                            <div className="status-val">ACTIVE</div>
                        </div>
                        {/* Card 2 */}
                        <div className="status-card" style={{ '--widget-accent': 'var(--color-devops)' }}>
                            <div className="status-header" style={{ color: 'var(--color-devops)' }}>DEVOPS</div>
                            <div className="status-val">READY</div>
                        </div>
                        {/* Card 3 */}
                        <div className="status-card" style={{ '--widget-accent': 'var(--color-cloud)' }}>
                            <div className="status-header" style={{ color: 'var(--color-cloud)' }}>CLOUD</div>
                            <div className="status-val">DEPLOYED</div>
                        </div>
                    </div>
                </BentoPanel>


                {/* --- ROW 4: FOOTER --- */}

                {/* Panel C: Terminal Footer (Span 12) */}
                <BentoPanel
                    style={{ gridColumn: 'span 12', minHeight: '160px' }}
                    delay={0.3}
                    accentColor="#52525b" // Gray/Muted
                >
                    <TerminalWidget />
                </BentoPanel>

            </div>

            <style>{`
                .social-icon {
                    width: 42px; height: 42px; border-radius: 10px;
                    border: 1px solid var(--border-color);
                    display: flex; alignItems: center; justifyContent: center;
                    color: var(--text-secondary); transition: all 0.2s;
                    background: var(--bg-color);
                }
                .social-icon:hover {
                    color: var(--accent-color); border-color: var(--accent-color);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px var(--accent-glow);
                }
                .glass-panel:hover {
                    border-color: var(--panel-accent);
                    box-shadow: 0 0 10px -2px var(--panel-accent);
                }
                .status-card {
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 1rem;
                    display: flex; flex-direction: column; justify-content: center;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                .status-card:hover {
                    border-color: var(--widget-accent);
                    background: var(--surface-hover);
                    box-shadow: 0 0 10px -2px var(--widget-accent);
                }
                .status-header {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    opacity: 0.8;
                }
                .status-val {
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: var(--text-primary);
                }

                @media (max-width: 1024px) {
                    .bento-grid {
                        grid-template-columns: 1fr 1fr !important;
                        grid-template-rows: auto !important;
                        gap: 1rem !important;
                        display: grid !important;
                    }
                    /* Tablet: 2 columns */
                    div[style*="span 8"], div[style*="span 4"], div[style*="span 9"], div[style*="span 3"],
                    div[style*="span 5"], div[style*="span 7"], div[style*="span 12"] {
                        grid-column: span 2 !important;
                    }
                    div[style*="span 4"] {
                        order: -1;
                    }
                }

                @media (max-width: 768px) {
                    .bento-grid {
                        display: flex !important;
                        flex-direction: column;
                        gap: 1rem !important;
                    }
                    .glass-panel { 
                        min-height: 200px; 
                        width: 100% !important;
                        grid-column: auto !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
