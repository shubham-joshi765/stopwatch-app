function stopwatch()
{
    return(
        <div className="stopwatch-app">
            <h1>Stopwatch App</h1>
            <div class="stopwatch">
                <div class="display">
                    <h1>00:00:00</h1>
                </div>
                <div class="controls">
                    <button class="start-button">Start</button>
                    <button class="stop-button">Stop</button>
                    <button class="lap-button">Lap</button>
                    <button class="reset-button">Reset</button>
                </div>
            </div>
            <div class="lap-data">
                <ul class="lapList">
                    <h2>Lap 1</h2>
                    <p>Timeing 134653164</p>
                    <span>X</span>
                </ul>
                <ul class="lapList">
                    <h2>Lap 2</h2>
                    <p>Timeing 134653164</p>
                    <span>X</span>
                </ul>
                <ul class="lapList">
                    <h2>Lap 3</h2>
                    <p>Timeing 134653164</p>
                    <span>X</span>
                </ul>
            </div>
        </div>
    );
}

export default stopwatch