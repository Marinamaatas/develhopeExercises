import React, { useState, useEffect } from 'react';

export default function TestMyClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);
    return (
        <div>
            <h2>Current time: {time.toLocaleTimeString()}</h2>
        </div>
    );
}
