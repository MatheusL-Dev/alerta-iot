import React, { useState } from 'react';

const Panel = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
                onClick={handleClick}
                style={{
                    width: '100px',
                    height: '50px',
                    borderRadius: '0',
                    background: isOn ? 'green' : 'red',
                    color: 'white',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                {isOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default Panel;