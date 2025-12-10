import { motion } from 'framer-motion';
import { Award, Briefcase, Star, Trophy, MapPin, Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

const Profile = () => {
    const badges = [
        { text: "React", type: "tech" },
        { text: "Node.js", type: "tech" },
        { text: "Cloud Security", type: "security" },
        { text: "Docker", type: "devops" },
        { text: "Cyber Defense", type: "security" },
        { text: "CI/CD", type: "devops" }
    ];

    const getBadgeStyle = (type) => {
        switch (type) {
            case 'security': return { border: 'var(--color-security)', color: 'var(--color-security)', bg: 'rgba(255, 71, 87, 0.1)' };
            case 'devops': return { border: 'var(--color-devops)', color: 'var(--color-devops)', bg: 'rgba(255, 165, 2, 0.1)' };
            default: return { border: 'var(--accent-color)', color: 'var(--accent-color)', bg: 'var(--surface-hover)' };
        }
    };

    const education = [
        { year: "2024", title: "B.Sc. Computer Science", place: "Tech University" },
        { year: "2020", title: "High School Diploma", place: "City High School" }
    ];

    return (
        <div className="profile-page section">
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="section-title">About Me</h1>
                <p className="section-subtitle">Exploring the digital frontier.</p>
            </header>

            <div className="grid-2-profile">
                {/* Left Col */}
                <div>
                    <section className="bio-section" style={{ marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <img
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=transparent"
                                alt="Profile"
                                style={{
                                    width: '80px', height: '80px', borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--surface-hover)',
                                    padding: '5px'
                                }}
                            />
                            <div>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>AEG</h2>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>System Operator</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                                    <MapPin size={14} />
                                    <span>Special Region of Yogyakarta (DIY), Indonesia</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ maxWidth: '680px', textAlign: 'left', lineHeight: 1.7 }}>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                Tech enthusiast exploring cybersecurity, DevOps, and cloud engineering. I love diving into system architecture, security protocols, and automated pipelines.
                            </p>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                I focus on building secure, efficient, and scalable solutions — from cloud setups to CI/CD automation — always hands-on and practical.
                            </p>

                            <div style={{
                                color: 'var(--text-primary)',
                                fontWeight: 500,
                                fontSize: '1rem',
                                borderLeft: '3px solid var(--accent-color)',
                                paddingLeft: '1rem',
                                marginTop: '1.5rem',
                                background: 'var(--surface-hover)',
                                padding: '1rem',
                                borderRadius: '0 8px 8px 0'
                            }}>
                                When I’m not coding, I enjoy learning new tools, participating in tech challenges, and keeping up with the latest in cybersecurity and cloud trends.
                            </div>
                        </div>
                    </section>

                    <section className="tech-interests">
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Tech Interests</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {badges.map(badge => {
                                const style = getBadgeStyle(badge.type);
                                return (
                                    <motion.span
                                        key={badge.text}
                                        whileHover={{ scale: 1.05, filter: 'brightness(1.3)' }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            background: style.bg,
                                            padding: '0.4rem 1rem',
                                            borderRadius: '6px',
                                            fontSize: '0.85rem',
                                            color: style.color,
                                            cursor: 'default',
                                            border: `1px solid ${style.border}`,
                                            fontWeight: 600
                                        }}
                                    >
                                        {badge.text}
                                    </motion.span>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Right Col */}
                <div style={{ paddingLeft: '0rem' }}>
                    <section className="timeline-section" style={{ marginBottom: '4rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Education History</h3>
                        <div style={{ borderLeft: '2px solid var(--border-color)', marginLeft: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                            {education.map((item, idx) => (
                                <div key={idx} style={{ position: 'relative', marginBottom: '2.5rem' }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: '-2.55rem',
                                        top: '0.3rem',
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        background: 'var(--bg-color)',
                                        border: '2px solid var(--accent-color)',
                                        boxShadow: '0 0 10px var(--accent-glow)'
                                    }} />
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{item.year}</div>
                                    <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem' }}>{item.title}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.place}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="contact-section">
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Connect</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <motion.a href="#" className="contact-btn" transition={{ duration: 0.15 }} whileHover={{ y: -2, borderColor: '#71717a', color: '#71717a', boxShadow: 'none' }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', transition: 'border-color 0.15s, color 0.15s' }}>
                                <Github size={20} /> <span>GitHub</span> <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                            </motion.a>
                            <motion.a href="#" className="contact-btn" transition={{ duration: 0.15 }} whileHover={{ y: -2, borderColor: '#0077b5', color: '#0077b5', boxShadow: 'none' }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', transition: 'border-color 0.15s, color 0.15s' }}>
                                <Linkedin size={20} /> <span>LinkedIn</span> <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                            </motion.a>
                            <motion.a href="#" className="contact-btn" transition={{ duration: 0.15 }} whileHover={{ y: -2, borderColor: '#ef4444', color: '#ef4444', boxShadow: 'none' }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', transition: 'border-color 0.15s, color 0.15s' }}>
                                <Mail size={20} /> <span>Email</span> <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                            </motion.a>
                            <motion.a href="#" className="contact-btn" transition={{ duration: 0.15 }} whileHover={{ y: -2, borderColor: '#ffffff', color: '#ffffff', boxShadow: 'none' }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-secondary)', transition: 'border-color 0.15s, color 0.15s' }}>
                                <FileText size={20} /> <span>Resume</span> <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                            </motion.a>
                        </div>
                    </section>
                </div>
            </div>

            {/* Mobile Styles for Profile */}
            <style>{`
                .grid-2-profile {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 2rem;
                }
                @media (max-width: 900px) {
                    .grid-2-profile {
                        display: flex;
                        flex-direction: column;
                        gap: 3rem;
                    }
                    div[style*="paddingLeft: '2rem'"] {
                        padding-left: 0 !important;
                    }
                    .bio-section { 
                        text-align: center; 
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .bio-section > div[style*="alignItems: 'center'"] { 
                        justify-content: center; 
                        flex-direction: column;
                        text-align: center;
                    }
                    .bio-section p { text-align: center; } /* Center text on mobile */
                    
                    /* Reset text alignment override */
                     div[style*="maxWidth: '680px'"] {
                        text-align: center !important;
                     }
                }
                .contact-btn:hover {
                    border-color: var(--accent-color) !important;
                    color: var(--accent-color) !important;
                    background: rgba(0, 255, 255, 0.05) !important;
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default Profile;
