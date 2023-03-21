import React, { useEffect, useState } from 'react';
import './Timer.css';

type TimerProps = {
	time: number,
	isClockRunning: boolean,
	finishSignal: Function,
	desc?: boolean
}

export function Timer(props: TimerProps) {

	const [timeSeconds, setTimeSeconds] = useState(props.desc ? props.time : 0);

	let intervalID: any

	useEffect(() => {
		if(isTimeOver()) {
			props.finishSignal();
		}
		else if(props.isClockRunning) {
			intervalID = setInterval(() => {
				incrementTime()
			},1000)
	
			return () => {
				clearInterval(intervalID);
			}
		}
	})

	const incrementTime = () => {
		console.log('inc')
		if(props.desc) {
			setTimeSeconds(timeSeconds-1)
		}
		else {
			setTimeSeconds(timeSeconds+1)
		}
	}

	const isTimeOver = () => {
		if(props.desc && props.isClockRunning && timeSeconds <= 0) {
			return true;
		}
		else if(!props.desc && props.isClockRunning && timeSeconds >= props.time) {
			return true;
		}
		else {
			return false;
		}
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
		</div>
	);
}