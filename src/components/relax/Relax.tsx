import React, { useEffect, useState } from 'react';
import { Timer } from '../timer/Timer';
import './Relax.css';

type RelaxProps = {
    startClock: boolean
    finishRelaxMode: Function
}

declare const YT: any; 

const RELAX_TIME = 0.25 * 60;

export function Relax(props: RelaxProps) {

    useEffect(() => {
        if(props.startClock) {
            setTimeout(() => {
                props.finishRelaxMode();
            }, 5*60*1000)
        }
    })

    const leaveRelaxMode = () => {
        props.finishRelaxMode()
    }

    const isClockRunning = true;

    return (
        <div className='relax'>
            <Timer 
                finishSignal={leaveRelaxMode} 
                isClockRunning={isClockRunning} 
                time={RELAX_TIME} 
                desc={true}
            />
			<iframe 
                id='player'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/25BkVBgFD9Y?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <div className='btn-container'>
				<button onClick={leaveRelaxMode}>Leave</button>
			</div>
        </div>
    );

}


