import React from 'react';
import Header from './HeaderNav/Header.jsx';
import HelloMessage from './HelloMessage/HelloMessage.jsx';
import PullUpDrawer from './PullUpDrawer/PullUpDrawer.jsx';
import Footer from './Footer.jsx';

function App() {
    // Replace this with the actual signed-in user's name from your authentication provider
    const userName = "Monica"; // You can update this dynamically

    return (
        <div>
            <Header />
            <HelloMessage name={userName} />
            <PullUpDrawer/>
            <Footer/>
        </div>
    );
}

export default App;
