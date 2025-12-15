import React, { useRef, useState } from "react";
import style from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [startTime, setStartTime] = useState(0);
  const [laps, setLaps] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);

  const timePassed = isTimerRunning ? laps + (time - startTime) : laps;

  const handleStart = () => {
    setTimerRunning(true);
    setStartTime(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };
  const handleStop = () => {
    setTimerRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const totalTimePassed = Date.now() - startTime + laps;
    setLaps(totalTimePassed);
  };
  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimerRunning(false);
    setTime(0);
    setLaps(0);
    setStartTime(0);
  };

  function formetTime(timeInMillisecond: number) {
    const totalSecond = Math.floor(timeInMillisecond / 1000);
    const ms = Math.floor((timeInMillisecond % 1000) / 10);
    const ss = Math.floor(totalSecond % 60);
    const mm = Math.floor(totalSecond / 60);

    const formetedMS = ms.toString().padStart(2, "0");
    const formetedSS = ss.toString().padStart(2, "0");
    const formetedMM = mm.toString().padStart(2, "0");

    return `${formetedMM}:${formetedSS}:${formetedMS}`;
  }

  return (
    <div className={style.container}>
      <h2>Stopwatch</h2>
      <p>Click the buttons to start, pause, and reset the stopwatch.</p>
      <h3>{formetTime(timePassed)}</h3>
      <div className={style.buttonContainer}>
        <button onClick={handleStart} disabled={isTimerRunning}>Start</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
