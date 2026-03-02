import { useState } from 'react'
import useHabits from './habits/hooks/useHabits'
import cartoon from '../assets/yoyo.png'
import '../App.css'
import MyCalendarHeatmap from './heatmap/heatmap'
import Statistik from './statistik/statistik'
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';
import useStreak from './streak/streak'

function App() {
    const {
        addHabit,
        deleteHabit,
        isDoneHabit,
        filteredHabits,
        setFilter,
        habits,
        clearAll
    } = useHabits();

    const {
        completedCount,
        totalHabits
    } = Statistik()

    const [habit, setHabit] = useState("");
    const [done, setDone] = useState(false);
    const [edit,setEdit] = useState(null); 
    const { tempStreak, totalStreak, dateTime } = useStreak();

    function handleSubmit(e) {
        e.preventDefault();
        addHabit(habit, done);
        setHabit("")
        setDone(false)
    }

    function editHabit(id) {
        const habitEdit = habits.find(h => h.id === id);

        if (habitEdit) {
            setHabit(habitEdit.habit);
            setDone(habitEdit.isDone);
            setEdit(id);
            
            deleteHabit(id)
        }
    }

    const sampleData = dateTime.map(time => (
        [time.count]
    ))
    return (
        <>
        <div className='container-app-name'>
            <h1 className='name-app'>Habits Tracker</h1>
            <div className='streak'>
                <h2 className="streak">
                <span className="fire-wrapper">
                    <span className="streak-number">{tempStreak}</span>
                    <span className="fire-icon">🔥</span>
                </span>
                </h2>
            </div>
        </div>

        <section className='head'>
            <img src={cartoon} className='image' alt="kartoon" />
        </section>

        {/* <section>
            <div className='streak-container'>
                <h2 className="streak">
                Streak Habit 
                <span className="fire-wrapper">
                    <span className="streak-number">{totalStreak}</span>
                    <span className="fire-icon">🔥</span>
                </span>
                </h2>
                <ul>
                    {filteredHabits.toSorted((a, b) => a.habit.localeCompare(b.habit)).map(h => (
                    <li
                        key={h.id}
                        style={{ color: h.isDone == true ? "green" : "gray" }}
                    >
                        <p>{h.habit} </p> <div>🔥</div>
                    </li>
                    ))}
                </ul>
            </div>
        </section> */}

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
                        <button className='button-add'>Tambah Habit</button>
                        </form>
                    </div>
                </div>
                <div className='search-and-clear'>
                    <div>
                        <button onClick={() => setFilter('all')}>Semua</button>
                        <button onClick={() => setFilter('active')}>Aktif</button>
                        <button onClick={() => setFilter('completed')}>Selesai</button>
                    </div>
                    <div className='clear'>
                        <button onClick={() => clearAll()}>Hapus Semua</button>
                    </div>
                </div>
            </div>
            <div className='list-container'>
                <ul>
                    {filteredHabits.toSorted((a, b) => a.habit.localeCompare(b.habit)).map(h => (
                    <li
                        key={h.id}
                        style={{ color: h.isDone == true ? "green" : "gray" }}
                    ><p>
                        {h.habit}
                    </p>
                    <div>
                        <button onClick={() => isDoneHabit(h.id)}><i class="fa-solid fa-check"></i></button>
                        <button onClick={() => editHabit(h.id)}><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={() => deleteHabit(h.id)}><i class="fa-solid fa-trash"></i></button>
                    </div>
                    </li>
                    ))}
                </ul>
            </div>  
        </section>

        <section className='container-heatmap'>
            <h2>{completedCount} Habit Selesai di satu tahun</h2>
            <div className='heatmap-container'>
                <MyCalendarHeatmap />
            </div>
        </section>

        <section className='container'>
            <h2>Analisis</h2>
            <div className='container-analis'>
                <div className='statistik-container'>
                    <Sparklines data={sampleData}>
                        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                        <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                    </Sparklines>
                </div>
            </div>
        </section>
        </>
    )
}

export default App;