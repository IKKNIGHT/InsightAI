import React, { useState } from 'react';
import './App.css';
import backgroundImage from './header.jpg';
import { motion } from 'framer-motion';

function App() {
    const [showAIPage, setShowAIPage] = useState(false);

    const handleGetStarted = () => {
        setShowAIPage(true);
    };

    if (showAIPage) {
        return <p>AI PAGE</p>;
    }

    return (
        <div className="main-container">
            <div
                className="header-section"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '55.37vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
            >
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        color: 'white',
                        fontSize: '128px',
                        marginBottom: '10px',
                        fontWeight: 300,
                    }}
                >
                    Insight AI
                </motion.h1>
            </div>

            <motion.div
                className="content-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    textAlign: 'center',
                    marginTop: '40px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
            >
                <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', letterSpacing: '0.05em', fontWeight: 700 }}>
                    Create essays that inspire
                </h2>

                <div
                    className="widget-buttons"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: '20px',
                        marginBottom: '30px',
                    }}
                >
                    {['Paste your Essay', 'Let Insight AI look at your essay', 'Generate valuable feedback'].map(
                        (text, index) => (
                            <motion.div
                                key={index}
                                className="widget"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
                                }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '20px 30px',
                                    borderRadius: '15px',
                                    boxShadow: '0 12px 36px rgba(0,0,0,0.25)',
                                    fontWeight: 'bold',
                                    minWidth: '200px',
                                    textAlign: 'center',
                                    transition: 'box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                }}
                            >
                                {text}
                            </motion.div>
                        )
                    )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.button
                        onClick={handleGetStarted}
                        className="get-started-button"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: '#347cd8',
                        }}
                        transition={{ duration: 0.4 }}
                        style={{
                            padding: '16px 36px',
                            fontSize: '1.2rem',
                            borderRadius: '12px',
                            border: 'none',
                            backgroundColor: '#409eff',
                            color: 'white',
                            cursor: 'pointer',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                    >
                        Get Started
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}

export default App;
