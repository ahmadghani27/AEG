import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DevJokesWidget = ({ style = {} }) => {
    const [joke, setJoke] = useState({ setup: "Loading...", punchline: "" });
    const [loading, setLoading] = useState(true);

    const fetchJoke = async () => {
        setLoading(true);
        try {
            // Using a static fallback initially to ensure reliability, 
            // but simulating an API fetch or allowing for one later.
            const jokes = [
                { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs." },
                { setup: "How many programmers does it take to change a light bulb?", punchline: "None, that's a hardware problem." },
                { setup: "Why do Java developers wear glasses?", punchline: "Because they don't C#." },
                { setup: "What is a programmer's favorite hangout place?", punchline: "Foo Bar." },
                { setup: "Why did the developer go broke?", punchline: "Because he used up all his cache." }
            ];
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

            // Simulating network delay for realism
            await new Promise(resolve => setTimeout(resolve, 500));

            setJoke(randomJoke);
        } catch (error) {
            setJoke({ setup: "404 Joke Not Found", punchline: "Check your internet connection." });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <motion.div
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15, delay: 0.2, ease: "circOut" }}
            style={{
                '--panel-accent': 'var(--accent-secondary)',
                background: 'var(--surface-color)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start', /* Left align */
                textAlign: 'left',      /* Left align */
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                ...style
            }}
            whileHover={{
                borderColor: 'var(--accent-secondary)',
                boxShadow: 'none'
            }}
            onClick={fetchJoke}
        >
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--accent-secondary)',
                marginBottom: '0.5rem',
                opacity: 0.8
            }}>
                // DEV_JOKES_API
            </div>

            <div style={{ minHeight: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <motion.p
                    key={joke.setup}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        marginBottom: '0.25rem',
                        color: 'var(--text-primary)'
                    }}
                >
                    {joke.setup}
                </motion.p>
                <motion.p
                    key={joke.punchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic'
                    }}
                >
                    {loading ? "..." : `> ${joke.punchline}`}
                </motion.p>
            </div>

            <div style={{
                marginTop: '0.75rem',
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                alignSelf: 'flex-start'
            }}>
                [CLICK_TO_REFRESH]
            </div>
        </motion.div>
    );
};

export default DevJokesWidget;
