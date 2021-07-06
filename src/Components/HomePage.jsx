import React, { useState, useEffect } from 'react';
import Header from './Header';
import MultipleItems from './Slider';
import '../styles/buttons.css';
import HatDetails from './HatDetails';

function HomePage() {
    const [showHomePage, setshowHomePage] = useState(true);

    const start = () => {
        setshowHomePage(false);
    }

    if (showHomePage) {
        return (
            <>
                <Header />
                <MultipleItems />
                <div className="start">
                    <button onClick={start}> Start </button>
                </div>
            </>
        )
    } else {
        return (
            <HatDetails />
        );
    }
}

export default HomePage;
