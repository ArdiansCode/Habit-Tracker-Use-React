import { useState } from 'react'
import cartoon from './assets/yoyo.png'
import './App.css'
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <>
        <div className='container-app-name'>
            <h1 className='name-app'>Habits Tracker</h1>
            <div className='streak'>
                <h2>streak🔥</h2>
            </div>
    
        </div>

        <Link to="/Habit-Tracker">Pergi ke Habit Tracker</Link>
        </>
    )
}

export default Welcome;