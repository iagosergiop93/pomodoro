import React, { useEffect, useState } from 'react';
import './Timer.css';

type TimerProps = {
	pomodoroTime: number,
	finishSignal?: Function
}

const POMODORO_TIME = 0.5 * 60;

export function Timer(props: TimerProps) {

	const [timeSeconds, setTimeSeconds] = useState(0);
	const [isClockRunning, setIsClockRunning] = useState(false);

	let intervalID: any

	useEffect(() => {
		console.log('Effect')
		if(isClockRunning && timeSeconds == POMODORO_TIME) {
			finishPomodoro();
		}
		else if(isClockRunning) {
			intervalID = setInterval(() => {
				// console.log('adding')
				setTimeSeconds(timeSeconds+1)
			},1000)
	
			return () => {
				clearInterval(intervalID);
			}
		}
	})

	const runTimer = () => {
		setIsClockRunning(true);
	}

	const pauseTimer = () => {
		setIsClockRunning(false);
	}

	const finishPomodoro = () => {
		setTimeSeconds(0);
		setIsClockRunning(false);
		if(props.finishSignal) props.finishSignal();
	}

	const minutes = () => {
		const minutes = Math.floor(timeSeconds/60);
		return minutes > 9 ? `${minutes}` : `0${minutes}`
	}

	const remainingSeconds = () => {
		const sec = timeSeconds%60;
		return sec > 9 ? `${sec}` : `0${sec}`;
	}

	return (
		<div className='timer'>
			<span className='running-time'>
				{minutes()}:{remainingSeconds()}
			</span>
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