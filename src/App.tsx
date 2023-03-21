import React, { useEffect, useState } from 'react';
import './App.css';
import { Pomodoro } from './components/pomodoro/Pomodoro';
import { Relax } from './components/relax/Relax';
import { PomodoroListItem, SideBar } from './components/side-bar/SideBar';

const pomodoroTime = 25 * 60;

function App() {

	const [pomodoroList, setPomodoroList] = useState<PomodoroListItem[]>([])
	const [relaxMode, setRelaxMode] = useState(false);

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

	return (
		<div className="App">
			<SideBar pomodoroList={pomodoroList}/>
			<div className='main'>
				{
					relaxMode ? <Relax finishRelaxMode={finishRelaxMode} startClock={relaxMode}></Relax> : <div></div>
				}
				{/* {
					!relaxMode ? <img src={require('./assets/sm_tomato.jpg')} className='tomato'/> : <div></div>
				} */}
				{
					!relaxMode ? <Pomodoro pomodoroTime={pomodoroTime} finishSignal={finishedPomodoro}/> : <div></div>
				}
				
			</div>
		</div>
  );
}

export default App;
