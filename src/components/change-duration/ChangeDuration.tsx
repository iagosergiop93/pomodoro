import { useState } from 'react';
import './ChangeDuration.css';

type ChangeDurationProps = {
    pomodoroDuration: number
    restDuration: number
    updateDuration: Function
}

const secondsToMinutes = (num: number) => {
    return Math.floor(num/60);
}

const minutesToSeconds = (num: number) => {
    return num*60;
}

export function ChangeDuration(props: ChangeDurationProps) {

    const [pomodoroDuration, setPomodoroDuration] = useState(secondsToMinutes(props.pomodoroDuration));
    const [restDuration, setRestDuration] = useState(secondsToMinutes(props.restDuration));

    const updateDurations = () => {
        console.log('Updating durations', pomodoroDuration, restDuration);
        props.updateDuration(minutesToSeconds(pomodoroDuration), minutesToSeconds(restDuration));
    }

    const editPomodoro = (event: any) => {
        setPomodoroDuration(event.target.value);
    }

    const editRest = (event: any) => {
        setRestDuration(event.target.value);
    }

    return (
        <div className='change-duration'>
            <div className='change-duration-row'>
                <label>Pomodoro Duration (min):</label>
                <input type={'text'} value={pomodoroDuration} onChange={editPomodoro}/>
            </div>
            <div className='change-duration-row'>
                <label>Rest Duration (min):</label>
                <input type={'text'} value={restDuration} onChange={editRest}/>
            </div>
            <div className='change-duration-row btn-container'>
                <button onClick={updateDurations}>Update</button>
            </div>
        </div>
    )
}