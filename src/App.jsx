import { useState } from 'react'
import cartoon from './assets/yoyo.png'
import './App.css'

function App() {
    return (
        <>
        <div className='container-app-name'>
            <h1 className='name-app'>Habits Tracker</h1>
            <div className='streak'>
                <h2>streak🔥</h2>
            </div>
        </div>

        <section className='head'>
            <img src={cartoon} className='image' alt="kartoon" />
        </section>

        <section>
            <div className='streak-container'>
                <h2>Streak Habit</h2>
                <ul>
                    <li>yyyy🔥</li>
                    <li>yyyy🔥</li>
                    <li>yyyy🔥</li>
                    <li>yyyy🔥</li>
                </ul>
            </div>
        </section>

        <section className='container-habit'>
            <h2>Daftar Habits</h2>
            <div className='add-container'>
                <div className='add'>
                    <button>Tambah Habit</button>
                </div>
                <div className='clear'>
                    <button>Hapus Semua</button>
                </div>
            </div>
            <div className='list-container'>
                <ul>
                    <li>
                    <p>list</p>
                    <div>
                        <button className='action'>selesai</button>
                        <button className='action'>edit</button>
                        <button className='action'>hapus</button>
                    </div>
                    </li>
                </ul>
            </div>  
        </section>

        <section>
            <div className='heatmap-container'>
                <div className='heatmap'></div>
            </div>
        </section>

        <section>
            <div className='statistik-container'></div>
        </section>
        </>
    )
}

export default App;