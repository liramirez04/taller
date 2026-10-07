"use client";

import { use, useEffect, useState } from "react";

export default function Timer() {
    const [segundos, setSegundos] = useState(0);
    const [corriendo, setCorriendo] = useState(false);
    
    useEffect(() => {
        if (!corriendo) return;
        const intervalo = setInterval(() => setSegundos((s) => s + 1), 1000);
        return () => clearInterval(intervalo);
    }, [corriendo]);

    const handleStart = () => {
        setCorriendo(true);
    };

    const handleStop = () => {
            setCorriendo(false);   
    };

    const handleReset = () => {
        setCorriendo(false);
        setSegundos(0);
    };

    return (
        <div>
            <h1 className="font-bold" style={{textAlign: "center"}}>Timer</h1>
            <p style={{textAlign: "center"}}>
                {Math.floor(segundos / 60)} mins {segundos % 60} secs:
            </p>
            <div style={{textAlign: "center"}}>
                <button onClick={handleStart} style={{backgroundColor:"#4ccf14", padding:"10px 20px"}}>
                    Start
                </button>
                <button onClick={handleStop} style={{backgroundColor:"#e80f0f", padding:"10px 20px"}}>
                    Stop
                </button>
                <button onClick={handleReset} style={{backgroundColor:"#ffe600", padding:"10px 20px"}}>
                    Reset
                </button>
            </div>
        </div>
  );
}