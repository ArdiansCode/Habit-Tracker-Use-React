import { useState } from 'react'
import useHabits from './habits/hooks/useHabits'
import cartoon from '../assets/yoyo.png'
import '../App.css'

function App() {
    const {
        addHabit,
        deleteHabit,
        editHabit,
        isDoneHabit,
        searchHabits,
        filteredHabits,
        filter,
        setFilter,
        setSearch
    } = useHabits();

    const [habit, setHabit] = useState("");
    const [done, setDone] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        addHabit(habit, done);
        setHabit("")
        setDone(false)
    }
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
            <div>
                <div className='add-container'>
                    <div className='add'>
                        <form onSubmit={handleSubmit}> 
                        <input 
                        type="text"
                        value={habit}
                        onChange={e => setHabit(e.target.value)} />
                        <input
                        className="checkbox"
                        type="checkbox"
                        value={done}
                        onChange={e => setDone(e.target.checked)}
                        />
                        <button>Tambah Habit</button>
                        </form>
                    </div>
                </div>
                <div className='clear'>
                    <button>Hapus Semua</button>
                </div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <div className='list-container'>
                <ul>
                    {filteredHabits.map(h => (
                    <li
                        key={h.id}
                        style={{ color: h.isDone == true ? "green" : "gray" }}
                    >
                        {h.habit}
                        <button onClick={() => deleteHabit(h.id)}>❌</button>
                        <button onClick={() => isDoneHabit(h.id)}>✅</button>
                    </li>
                    ))}
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