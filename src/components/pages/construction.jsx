import React, { useState, useEffect } from 'react';

import osu_logo from '/osu_logo.png';
import arrow from '../assets/arrow.png';

const words = ['Beavers.', 'Students.', 'Professors.', 'Faculty.', 'Alumni.'];

const Construction = () => {
    const [email, setEmail] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState(words[currentWordIndex]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [caretVisible, setCaretVisible] = useState(true);

    const wip = `
        We are currently working on a new and exciting project that we can't wait to share with you. 
        Enter your email below to be the first to know when we launch it.
    `;

    useEffect(() => {
        const caretBlinkInterval = setInterval(() => {
            setCaretVisible(vis => !vis);
        }, 250);

        let textChangeTimeout;
        if (isDeleting) {
            textChangeTimeout = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                if (displayText.length === 1) {
                    setIsDeleting(false);
                    setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
                }
            }, 100);
        } else {
            textChangeTimeout = setTimeout(() => {
                setDisplayText(words[currentWordIndex].slice(0, displayText.length + 1));
                if (displayText.length === words[currentWordIndex].length) {
                    setIsDeleting(true);
                }
            }, 200);
        }

        return () => {
            clearInterval(caretBlinkInterval);
            clearTimeout(textChangeTimeout);
        };
    }, [displayText, isDeleting, currentWordIndex]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        setEmail('');
    };

    return (
        <div className="flex flex-col h-screen bg-neutral">
            {/* <nav className='container mx-auto flex justify-between items-center my-8'>
                <ul className="flex justify-center space-x-4">

                </ul>
            </nav> */}
            <div className="flex-grow flex flex-col items-center">
                <h2 className="tracking-widest text-center text-accent text-2xl md:text-[48px] font-black mb-6 md:mb-10 mt-[200px]; md:mt-[265px]">Website under Construction</h2>
                <div className="text-center w-3/5 md:w-[35%]">
                    <p className="construction-text">{wip}</p> 
                </div>
                <form onSubmit={handleSubmit} className="mt-[60px] flex">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-md text-accent w-[400px] p-2 rounded-l-md border-r-0 border-primary focus:outline-none focus:ring-1 focus:ring-primary transition duration-300 ease-in-out shadow"
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-primary text-white tracking-wide font-medium w-32 p-2 rounded-r-md border-l-0 hover:bg-accent transition duration-300 ease-in-out shadow"
                    >
                        Notify Me
                    </button>
                </form>
                <img src={arrow} 
                    alt="arrow" 
                    className="absolute w-8 md:w-12" 
                    style={{ transform: 'rotate(90deg)', top: '460px', right: '1185px' }}
                />
            </div>
            <div className="text-center pb-4 md:pb-8">
                <p className="construction-text md:text-[15px]">
                    Made by Beavers, for {displayText}
                    <span className={`inline-block ${caretVisible ? '' : 'opacity-0'}`}>|</span>
                </p> 
            </div>
        </div>
    );
};

export default Construction;
