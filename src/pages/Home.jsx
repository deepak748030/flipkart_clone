import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/Navbar';

function Home() {
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Convert timeLeft (seconds) to minutes and seconds format
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <>
            {/* Navbar */}
            <NavBar />

            <div>
                <img src={'cate.png'} className='w-100' alt="Category Banner" />
                <img src={'bigbillion.png'} className='w-100' alt="Big Billion Sale Banner" />
            </div>

            {/* Deal Section */}
            <div className="container mt-3">
                <div className="row">
                    {/* Left Side - Deals of the Day */}
                    <div className="col text-center" style={{ color: 'blue' }}>
                        <div className="fs-3">Deals of the Day</div>
                        <div>
                            <i className="bi bi-stopwatch"></i> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        </div>
                    </div>

                    {/* Right Side - Sale is Live */}
                    <div className="col text-center py-3" style={{ color: 'red' }}>
                        <div className="p-3">
                            <strong>SALE IS LIVE</strong>
                        </div>
                    </div>
                </div>
            </div>

            <Card />
        </>
    );
}

export default Home;
