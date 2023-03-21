import React, { useEffect, useState } from 'react';
import { Timer } from '../timer/Timer';
import './Pomodoro.css';

type PomodoroProps = {
	duration: number
	finishSignal?: Function
}

export function Pomodoro(props: PomodoroProps) {

	const [isClockRunning, setIsClockRunning] = useState(false);

	const runTimer = () => {
		setIsClockRunning(true);
	}

	const pauseTimer = () => {
		setIsClockRunning(false);
	}

	const finishPomodoro = () => {
		setIsClockRunning(false);
		if(props.finishSignal) props.finishSignal();
	}

	return (
		<div className='pomodoro'>
			<Timer finishSignal={finishPomodoro} isClockRunning={isClockRunning} time={props.duration}/>
			<div className='btn-container'>
				<button onClick={runTimer}>Run</button>
				<button onClick={pauseTimer}>Pause</button>
			</div>
			{/* <div className='btn-container'>
				<button onClick={finishPomodoro} className='restart'>Finish</button>
			</div> */}
		</div>
	);
}