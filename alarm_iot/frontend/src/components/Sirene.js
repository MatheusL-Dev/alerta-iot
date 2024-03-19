import React, { useState, useEffect } from 'react';


const FireAlarm = (props) => {
    const { isOn, value } = props;
    const [isFire, setIsFire] = useState(false);

    useEffect(() => {
        if (isOn && value > 80) {
            setIsFire(true);
        } else {
            setIsFire(false);
        }
    }, [isOn, value]);

    return (
        <div>
            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: isFire ? 'red' : 'grey', margin: '5px', animation: isFire ? 'blink 1s linear infinite' : 'none' }}></div>
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