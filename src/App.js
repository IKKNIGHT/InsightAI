import React, { useState } from 'react';

function App() {
    const [showSecondPage, setShowSecondPage] = useState(false);

    // If showSecondPage is true, render ONLY the second page
    if (showSecondPage) {
        return <SecondPage />;
    }

    // Otherwise, render the home page with a button
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <button onClick={() => setShowSecondPage(true)}>
                Go to AI Page (No Return)
            </button>
        </div>
    );
}

// Second Page (No way to go back)
function SecondPage() {
    return (
        <div className="ai-page">
            <h1>AI Processing Page</h1>
            <p>This page interacts with the backend/AI.</p>
            {/* Your AI/backend logic here */}
        </div>
    );
}

export default App;