import { useState } from 'react'
import cartoon from './assets/yoyo.png'
import './App.css'

function Welcome() {
    return (
        <>
        <div className='container-app-name'>
            <h1 className='name-app'>Habits Tracker</h1>
            <div className='streak'>
                <h2>streak🔥</h2>
            </div>
        </div>
        </>
    )
}

export default Welcome;