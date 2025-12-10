import { motion } from 'framer-motion';
import { Briefcase, Award, Trophy, Star } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            year: "2025 - Present",
            role: "DevOps Engineer Intern",
            company: "Tech Solutions Inc.",
            desc: "Building CI/CD pipelines and managing cloud infrastructure using Terraform and AWS.",
            tags: ["AWS", "Terraform", "Jenkins"]
        },
        {
            year: "2024 - 2025",
            role: "Junior Security Analyst",
            company: "CyberGuard Corp",
            desc: "Monitored SIEM logs, conducted vulnerability scans, and assisted in incident response.",
            tags: ["Splunk", "Nessus", "Python"]
        },
        {
            year: "2023 - 2024",
            role: "Web Development Freelancer",
            company: "Self-Employed",
            desc: "Developed responsive websites for local businesses using React and Node.js.",
            tags: ["React", "Node.js", "CSS"]
        }
    ];

    const achievements = [
        {
            title: "CTF Winner 2024",
            desc: "Secured 1st place in the University National CTF competition.",
            icon: <Trophy size={18} color="var(--color-security)" />
        },
        {
            title: "AWS Certified Solutions Architect",
            desc: "Achieved associate level certification for AWS architecture.",
            icon: <Award size={18} color="var(--color-cloud)" />
        },
        {
            title: "Hackathon Finalist",
            desc: "Top 10 finalist in the Global Cloud Innovation Hackathon.",
            icon: <Star size={18} color="var(--color-devops)" />
        }
    ];

    return (
        <div className="experience-page">
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 className="section-title">Experience & Achievements</h1>
                <p className="section-subtitle">My professional journey and key milestones.</p>
            </header>

            <div className="grid-2" style={{ gap: '3rem' }}>
                {/* Experience Timeline */}
                <section>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '2rem',
                        borderBottom: '1px solid var(--border-color)',
                        paddingBottom: '0.5rem'
                    }}>
                        <Briefcase size={20} color="var(--accent-color)" />
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Work History</h2>
                    </div>

                    <div style={{ position: 'relative', borderLeft: '2px solid var(--border-color)', paddingLeft: '2rem', marginLeft: '0.5rem' }}>
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ marginBottom: '3rem', position: 'relative' }}
                            >
                                {/* Connector Node */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-2.4rem',
                                    top: '0.25rem',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-color)',
                                    border: '2px solid var(--accent-color)',
                                    boxShadow: '0 0 10px var(--accent-glow)'
                                }} />

                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.85rem',
                                    color: 'var(--accent-color)',
                                    fontWeight: 600,
                                    marginBottom: '0.25rem'
                                }}>
                                    {exp.year}
                                </span>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                                    @ {exp.company}
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                                    {exp.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {exp.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.75rem',
                                            background: 'var(--surface-color)',
                                            padding: '2px 8px',
                                            borderRadius: '4px',
                                            border: '1px solid var(--border-color)',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Achievements List */}
                <section>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '2rem',
                        borderBottom: '1px solid var(--border-color)',
                        paddingBottom: '0.5rem'
                    }}>
                        <Award size={20} color="var(--accent-color)" />
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Achievements</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {achievements.map((item, idx) => {
                            let borderColor = '#c2410c'; // Bronze
                            if (item.title.includes("Winner")) borderColor = '#fbbf24'; // Gold
                            if (item.title.includes("Certified")) borderColor = '#cbd5e1'; // Silver

                            return (
                                <motion.div
                                    key={idx}
                                    className="card"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.15, delay: 0.2 + (idx * 0.1) }}
                                    whileHover={{ x: 2, borderColor: borderColor, boxShadow: 'none' }}
                                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'border-color 0.15s' }}
                                >
                                    <div style={{
                                        background: 'var(--bg-secondary)',
                                        padding: '0.5rem',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Experience;
