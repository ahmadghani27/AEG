import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Terminal, Cloud, ArrowRight, Lock } from 'lucide-react';
import Hero from '../components/home/Hero/Hero';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            {/* About Preview */}
            <section className="about-preview section">
                <div className="card" style={{ textAlign: 'center', padding: '2.5rem', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-color)' }} />
                    <h2 className="section-title">Mission Directive</h2>
                    <p style={{ maxWidth: '650px', margin: '0 auto 2rem', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        Technology enthusiast focusing on Cyber Security, DevOps, and Cloud.
                        Currently learning how systems work, how to secure them, and how to automate deployment workflows.
                    </p>
                    <Link to="/profile" className="btn btn-secondary">Read Full Dossier</Link>
                </div>
            </section>


            {/* Skills Highlight */}
            <section className="skills-highlight section">
                <div className="grid-3">
                    <SkillCard
                        icon={<Lock size={32} color="var(--color-security)" />}
                        title="Cyber Security"
                        desc="Exploring system security and web vulnerabilities."
                        color="var(--color-security)"
                    />
                    <SkillCard
                        icon={<Terminal size={32} color="var(--color-devops)" />}
                        title="DevOps"
                        desc="Learning automation, CI/CD pipelines, and containerization."
                        color="var(--color-devops)"
                    />
                    <SkillCard
                        icon={<Cloud size={32} color="var(--color-cloud)" />}
                        title="Cloud"
                        desc="Practicing modern cloud platforms and infrastructure."
                        color="var(--color-cloud)"
                    />
                </div>
            </section>

            {/* Featured Projects */}
            <section className="projects-preview section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 className="section-title" style={{ margin: 0 }}>Featured Projects</h2>
                    <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: 'var(--accent-color)' }}>
                        Access All <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid-2">
                    <ProjectPreviewCard
                        title="Cloud Infrastructure Demo"
                        desc="A mock Terraform + AWS architecture."
                        tech="Terraform"
                    />
                    <ProjectPreviewCard
                        title="Mini SOC Dashboard"
                        desc="A simulated SOC dashboard with dummy logs."
                        tech="React"
                    />
                </div>
            </section>
        </div>
    );
};

const SkillCard = ({ icon, title, desc, color }) => (
    <motion.div
        className="card"
        whileHover={{ boxShadow: 'none', borderColor: color }}
        transition={{ duration: 0.15 }}
        style={{ textAlign: 'center', borderTop: `2px solid ${color}`, transition: 'border-color 0.15s' }}
    >
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
        <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{desc}</p>
    </motion.div>
);

const ProjectPreviewCard = ({ title, desc, tech }) => (
    <motion.div
        className="card"
        whileHover={{ boxShadow: 'none', borderColor: 'var(--accent-color)' }}
        transition={{ duration: 0.15 }}
        style={{ cursor: 'pointer', position: 'relative', transition: 'border-color 0.15s' }}
    >
        <div style={{
            height: '140px',
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border-color)',
            overflow: 'hidden'
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                opacity: 0.1,
                backgroundImage: 'radial-gradient(circle at 2px 2px, var(--text-secondary) 1px, transparent 0)',
                backgroundSize: '20px 20px'
            }} />
            <span style={{ position: 'absolute', fontWeight: 700, color: 'var(--text-muted)', fontSize: '1.5rem' }}>
                {tech}
            </span>
        </div>
        <h3>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>{desc}</p>
    </motion.div>
);

export default Home;
