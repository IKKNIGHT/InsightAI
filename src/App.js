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
        return (
            <div
                className="ai-page"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    backgroundColor: '#f5f5f5',
                    minHeight: '100vh'
                }}
            >
                <div style={{ display: 'flex', gap: '40px', width: '100%', maxWidth: '1300px' }}>
                    {/* Essay Input Window */}
                    <div
                        className="ai-widget"
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            padding: '20px',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '700px',
                            minWidth: '700px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '10px',
                                borderBottom: '1px solid #ccc',
                                paddingBottom: '8px',
                                position: 'relative',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{ position: 'absolute', left: '20px', display: 'flex', gap: '8px' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f57' }} />
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#febc2e' }} />
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28c840' }} />
                            </div>
                            <span style={{ fontWeight: '500', fontSize: '14px' }}>Paste your essay here.</span>
                        </div>
                        <textarea
                            placeholder="Paste your essay here..."
                            style={{
                                flex: 1,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                resize: 'none',
                                outline: 'none',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                fontFamily: 'Plus Jakarta Sans, sans-serif'
                            }}
                        />
                    </div>

                    {/* Feedback Widget */}
                    <div
                        className="ai-widget"
                        style={{
                            width: '700px',
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            padding: '20px',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '700px'
                        }}
                    >

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '10px',
                                borderBottom: '1px solid #ccc',
                                paddingBottom: '8px'
                            }}
                        >
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#ff5f57'
                            }}/>
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#febc2e'
                            }}/>
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#28c840'
                            }}/>
                            <span style={{fontWeight: '500', fontSize: '14px'}}>​​​</span>
                        </div>

                        <h2 style={{
                            fontWeight: 600,
                            fontSize: '24px',
                            marginBottom: '10px',
                            textAlign: 'center'
                        }}>Feedback</h2>
                        <center>
                        <hr style={{width: '60%', margin: '10px 0'}}/>
                        </center>
                        <h3 style={{
                            fontWeight: 400,
                            fontSize: '20px',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>Grade: --%</h3>
                        <center><hr style={{width: '80%', margin: '10px 0'}}/></center>
                        <div
                            style={{
                                textAlign: 'left',
                                width: '100%',
                                fontSize: '14px',
                                color: '#555'
                            }}
                        >
                            {/* AI-generated feedback will go here */}
                        </div>
                    </div>
                </div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#347cd8' }}
                    transition={{ duration: 0.3 }}
                    style={{
                        marginTop: '40px',
                        padding: '16px 32px',
                        fontSize: '1.2rem',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: '#409eff',
                        color: 'white',
                        cursor: 'pointer',
                        fontFamily: 'Plus Jakarta Sans, sans-serif'
                    }}
                >
                    Regenerate Feedback
                </motion.button>
            </div>
        );
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
                                className="landing-widget"
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
                                    minWidth: '300px',
                                    minHeight: '20px',
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
