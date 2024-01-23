import { useState, useEffect, useRef } from "react";

function Stopwatch()
{
    const [IsRunning, SetIsRunning] = useState(false);
    const [elapsedTime, SetElpasedTime] = useState(0);
    const [lapData, SetLapData] = useState([]);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    useEffect(() => {
        if(IsRunning) {
            intervalIdRef.current = setInterval(() => {
                SetElpasedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return() => {
            clearInterval(intervalIdRef.current);
        } 
    }, [IsRunning]);

    const start = () => {
        SetIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        SetElpasedTime(elapsedTime);
        SetIsRunning(false);
    }

    function lap() {
        let elpasedtime = timeinterval();
        SetLapData(lapData => [...lapData, elpasedtime]);
    }

    function reset() {
        SetElpasedTime(0);
        SetIsRunning(false);
        SetLapData([]);
    }

    function timeinterval() {
        let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let second = Math.floor(elapsedTime / (1000) % 60);
        let millisecond = Math.floor((elapsedTime % 1000) / 10);

        hour = String(hour).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        second = String(second).padStart(2, "0");
        millisecond = String(millisecond).padStart(2, "0");
        return `${minutes}:${second}:${millisecond}`;
    }

    function removeLap(index) {
        return () => {
            const updatedLapData = [...lapData];
            updatedLapData.splice(index, 1);
            SetLapData(updatedLapData);
        };
    }
    return(
        <div className="stopwatch-app">
            <h1>Stopwatch App</h1>
            <div className="stopwatch">
                <div className="display">
                    <h1>{timeinterval()}</h1>
                </div>
                <div className="controls">
                    <button className="start-button" onClick={start} disabled={IsRunning}>{IsRunning || elapsedTime === 0 ? 'Start' : 'Resume'}</button>
                    <button className="stop-button" onClick={stop} disabled={!IsRunning}>Stop</button>
                    <button className="lap-button" onClick={lap} disabled={!IsRunning || elapsedTime === 0}>Lap</button>
                    <button className="reset-button" onClick={reset} disabled={IsRunning || elapsedTime === 0}>Reset</button>
                </div>
            </div>
            {lapData.length > 0 ?
                <div className="lap-data">
                    {lapData.map((element, index) => {
                        return (
                            <ul className="lapList">
                                <h2>Lap {index + 1}</h2>
                                <p>Timeing {element}</p>
                                <span onClick={removeLap(index)}>X</span>
                            </ul>
                        );
                    })};
                </div>
                : ''
            }
        </div>
    );
}

export default Stopwatch