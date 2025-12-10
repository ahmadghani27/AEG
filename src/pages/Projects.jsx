import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const filters = ['All', 'Cybersecurity', 'DevOps', 'Cloud', 'Blog', 'Other'];

    const projects = [
        {
            title: "Cloud Infrastructure Demo",
            stack: ["Terraform", "AWS"],
            category: "Cloud",
            description: "A mock cloud architecture using Terraform for AWS provisioning. Demonstrates IaC best practices.",
            status: "coming-soon"
        },
        {
            title: "Mini SOC Dashboard",
            stack: ["React", "Dummy JSON"],
            category: "Cybersecurity",
            description: "A simulated SOC dashboard visualizing fake security events and threat logs in real-time.",
            status: "coming-soon"
        },
        {
            title: "DevOps Pipeline Simulation",
            stack: ["GitHub Actions", "YAML"],
            category: "DevOps",
            description: "Concept CI/CD flow demonstrating build, test, and deploy stages with status reporting.",
            status: "coming-soon"
        },
        {
            title: "Tech Blog: Future of AI",
            stack: ["Markdown", "Next.js"],
            category: "Blog",
            description: "A deep dive into the future agents and large language models in software development.",
            status: "published"
        },
        {
            title: "Hardware Lab Setup",
            stack: ["Raspberry Pi", "Linux"],
            category: "Other",
            description: "Home lab configuration for penetration testing and network monitoring.",
            status: "active"
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter || p.stack.includes(filter));

    const getStackColor = (tech) => {
        if (['AWS', 'Cloud', 'Terraform'].includes(tech)) return 'var(--color-cloud)';
        if (['React', 'Cybersecurity'].includes(tech)) return 'var(--color-security)';
        if (['DevOps', 'GitHub Actions', 'YAML'].includes(tech)) return 'var(--color-devops)';
        return 'var(--color-tech)';
    };

    const getHoverColor = (category, stack) => {
        if (category === 'DevOps' || category === 'Cloud') return '#22d3ee'; // Cyan
        if (category === 'Cybersecurity') return '#fb7185'; // Rose/Red
        if (stack.includes('React') || category === 'Web') return '#8b5cf6'; // Violet
        return '#34d399'; // Emerald/Default
    };

    return (
        <div className="projects-page section">
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="section-title">Projects & Experiments</h1>
                <p className="section-subtitle">Concept projects and practice labs.</p>

                {/* Filters */}
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: '0.6rem 1.4rem',
                                borderRadius: '30px',
                                border: filter === f ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                                background: filter === f ? 'rgba(35, 243, 194, 0.1)' : 'transparent',
                                color: filter === f ? 'var(--accent-color)' : 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                transition: 'all 0.3s',
                                boxShadow: filter === f ? '0 0 15px var(--accent-glow)' : 'none'
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </header>

            <motion.div
                layout
                className="grid-3"
                style={{ gap: '2rem' }}
            >
                {filteredProjects.map((project, idx) => (
                    <motion.div
                        layout
                        key={project.title}
                        className="card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2, boxShadow: 'none', borderColor: getHoverColor(project.category, project.stack) }}
                        transition={{ duration: 0.15 }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid var(--border-color)', transition: 'border-color 0.15s' }}
                    >
                        <div style={{
                            height: '180px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.03)'
                        }}>
                            {/* Abstract Tech Bg */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.03) 50%, transparent 55%)`,
                                backgroundSize: '200% 200%',
                                animation: 'glitch 3s infinite linear'
                            }} />

                            <span style={{ fontSize: '2.5rem', opacity: 0.15, fontWeight: 900, letterSpacing: '-2px', color: 'var(--text-muted)' }}>
                                {project.stack[0].toUpperCase()}
                            </span>

                            {project.status === 'coming-soon' && (
                                <span style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    background: 'rgba(255, 165, 2, 0.15)',
                                    color: '#ffa502',
                                    border: '1px solid rgba(255, 165, 2, 0.3)',
                                    boxShadow: '0 0 15px rgba(255, 165, 2, 0.15)',
                                    fontSize: '0.75rem',
                                    padding: '6px 14px',
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    backdropFilter: 'blur(4px)',
                                    letterSpacing: '0.5px'
                                }}>COMING SOON</span>
                            )}
                        </div>

                        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>{project.title}</h3>

                        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                            {project.stack.map(tech => (
                                <span key={tech} style={{
                                    fontSize: '0.75rem',
                                    background: 'var(--surface-hover)',
                                    border: `1px solid ${getStackColor(tech)}`,
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    color: getStackColor(tech),
                                    fontWeight: 600,
                                    opacity: 0.9
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, flex: 1 }}>
                            {project.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <style>{`
                @keyframes glitch {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
            `}</style>
        </div>
    );
};

export default Projects;
