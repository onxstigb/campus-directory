"use client";

import { useState, useEffect } from "react";

export function useTime() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString());
        };

const intervalId = setInterval(updateTime, 1000);
const fastStartId= setTimeout(updateTime, 0);

return () => {
    clearInterval(intervalId);
    clearTimeout(fastStartId);
};
    }, []);

    return { time };
}
