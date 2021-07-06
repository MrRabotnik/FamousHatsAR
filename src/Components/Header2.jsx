import React, { useState } from 'react';
import '../styles/header2.css';

function Header2({ hats, index, setIndex }) {
    const hatsLength = hats.length
    function nextSlide() {
        if (index >= hatsLength - 1) {
            index = -1
        }
        setIndex(index + 1);
    }

    function previousSlide() {
        if (index <= 0) {
            index = hatsLength;
        }
        setIndex(index - 1);
    }

    return (
        <header className="second_header">
            <div className="title_container">
                <div>
                    <i onClick={previousSlide} className="fas fa-chevron-left"></i>
                </div>
                <h2>{hats[index].title}</h2>
                <div>
                    <i onClick={nextSlide} className="fas fa-chevron-right"></i>
                </div>
            </div>
        </header>
    );
}

export default Header2;
