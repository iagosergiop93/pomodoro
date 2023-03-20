import React, { useState } from 'react';
import './SideBar.css';

export type PomodoroListItem = {
	id: number,
	description: string
}

type SideBarProps = {
	pomodoroList?: PomodoroListItem[]
}

export function SideBar(props: SideBarProps) {

	

	const elementList = props.pomodoroList?.map(item => {
		return <li key={item.id}>{item.description}</li>
	})

	return (
		<div className='side-bar'>
			<h1 className='side-bar-title'>Pomodoros</h1>
			<ul>
				{
					elementList
				}
			</ul>
		</div>
	);
}