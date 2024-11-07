import React from 'react';
import Header from './HeaderNav/Header.jsx';
import HelloMessage from './HelloMessage/HelloMessage.jsx';

function App() {
    // Replace this with the actual signed-in user's name from your authentication provider
    const userName = "Monica"; // You can update this dynamically

    return (
        <div>
            <Header />
            <HelloMessage name={userName} />
        </div>
    );
}

export default App;
