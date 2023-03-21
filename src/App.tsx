import React, { useEffect, useState } from 'react';
import './App.css';
import { ChangeDuration } from './components/change-duration/ChangeDuration';
import { Pomodoro } from './components/pomodoro/Pomodoro';
import { Relax } from './components/relax/Relax';
import { PomodoroListItem, SideBar } from './components/side-bar/SideBar';

const POMODORO_DEFAULT_TIME = 25 * 60;
const RELAX_DEFAULT_TIME = 5 * 60;

function App() {

	const [pomodoroList, setPomodoroList] = useState<PomodoroListItem[]>([])
	const [relaxMode, setRelaxMode] = useState(false);
	const [pomodoroDuration, setPomodoroDuration] = useState(POMODORO_DEFAULT_TIME);
	const [relaxDuration, setRelaxDuration] = useState(RELAX_DEFAULT_TIME);

	const finishedPomodoro = () => {
		setPomodoroList((pomodoroList) => {
			const id = Date.now();
			const str = `Pomodoro ${pomodoroList.length + 1} - ${new Date().toLocaleTimeString()}`;
			return [...pomodoroList, {id, description: str}]
		})

		setRelaxMode(true);
	}

	const finishRelaxMode = () => {
		setRelaxMode(false);
	}

	const updateDuration = (newPom: number, newRest: number) => {
		setPomodoroDuration(newPom)
		setRelaxDuration(newRest);
	}

	return (
		<div className="App">
			<SideBar pomodoroList={pomodoroList}/>
			<div className='main'>
				{
					!relaxMode ? <ChangeDuration 
						pomodoroDuration={pomodoroDuration}
						restDuration={relaxDuration}
						updateDuration={updateDuration} /> : <div></div>
				}
				{
					relaxMode ? <Relax duration={relaxDuration} finishRelaxMode={finishRelaxMode} startClock={relaxMode}></Relax> : <div></div>
				}
				{/* {
					!relaxMode ? <img src={require('./assets/sm_tomato.jpg')} className='tomato'/> : <div></div>
				} */}
				{
					!relaxMode ? <Pomodoro duration={pomodoroDuration} finishSignal={finishedPomodoro} /> : <div></div>
				}
			</div>
		</div>
  );
}

export default App;
