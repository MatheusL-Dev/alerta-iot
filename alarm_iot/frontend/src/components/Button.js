import React from 'react';

const Panel = (props) => {
    const { handleClick, isOn } = props

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <button
                onClick={handleClick}
                style={{
                    width: '100px',
                    height: '30px',
                    borderRadius: '0',
                    background: isOn ? 'green' : 'red',
                    color: 'white',
                    border: 'none',
                    fontSize: '14px',
                    cursor: 'pointer',
                }}
            >
                {isOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default Panel;