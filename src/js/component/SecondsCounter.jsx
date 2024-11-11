import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter =  (props) => {
    const paddedSeconds = String(props.seconds).padStart(6, '0');

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark p-3">
            <div className="bg-black text-white d-flex align-items-center justify-content-center m-1 p-3 rounded" style={{  height: '100px', width: '70px', fontSize: '2rem' }}>
                <FontAwesomeIcon icon={faClock} />
            </div>
            {paddedSeconds.split('').map((digit, index) => (
                <div
                    key={index}
                    className="bg-black text-white d-flex align-items-center justify-content-center m-1 p-3 rounded"
                    style={{ height: '100px', width: '70px', fontSize: '2rem' }}
                >
                    {digit}
                </div>
            ))}
        </div>
    );
}

export default SecondsCounter;