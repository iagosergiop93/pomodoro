import React, { useEffect, useState } from 'react';
import './Relax.css';

type RelaxProps = {
    startClock: boolean
    finishRelaxMode: Function
}

declare const YT: any; 

export function Relax(props: RelaxProps) {

    useEffect(() => {
        if(props.startClock) {
            console.log('Starting clock')
            var player = new YT.Player('relax',{
                height: '315',
                width: '560',
                videoId: '25BkVBgFD9Y',
                playerVars: {
                'playsinline': 1
                },
                events: {
                    'onReady': (event: any) => {
                        event.target.playVideo();
                    }
                }
            })
            setTimeout(() => {
                props.finishRelaxMode();
            }, 5*60*1000)
        }
    })

    const leaveRelaxMode = () => {
        props.finishRelaxMode()
    }

    return (
        <div className='relax'>
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


