import React, { useState, useEffect } from 'react';

const FireAlarm = () => {
    const [isFire, setIsFire] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsFire(true);
        };

        const interval = setInterval(() => {
            fetchData();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: isFire ? 'red' : 'grey', margin: '20px', animation: isFire ? 'blink 1s linear infinite' : 'none' }}></div>
            <style>
                {`
                    @keyframes blink {
                        0% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default FireAlarm;