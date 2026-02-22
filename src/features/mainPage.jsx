import { useState } from 'react'
import useHabits from './habits/hooks/useHabits'
import cartoon from '../assets/yoyo.png'
import '../App.css'
import MyCalendarHeatmap from './heatmap/heatmap'
import Statistik from './statistik/statistik'
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';

function App() {
    const {
        addHabit,
        deleteHabit,
        isDoneHabit,
        searchHabits,
        filteredHabits,
        filter,
        setFilter,
        setSearch,
        setHabits,
        habits,
        clearAll
    } = useHabits();

    const {
        completedCount,
        totalHabits
    } = Statistik()

    const [habit, setHabit] = useState("");
    const [done, setDone] = useState(false);
    const [edit,setEdit] = useState(null)

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

    const sampleData = [3,3,5,5,3,2,2,2,2,2,2,2,25,7,2,4,2,8,5,9,1,0,25,2,7,3,6,4,2,4,4,3,3,4,45,4,6,7,6,3,5,7,5,4,3,3,]
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
                <h2>Streak Habit🔥</h2>
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
                        <button>Tambah Habit</button>
                        </form>
                    </div>
                </div>
                <div className='clear'>
                    <button onClick={() => clearAll()}>Hapus Semua</button>
                </div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
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
                        <button onClick={() => editHabit(h.id)}>edit</button>
                        <button onClick={() => deleteHabit(h.id)}>❌</button>
                        <button onClick={() => isDoneHabit(h.id)}>✅</button>
                    </div>
                    </li>
                    ))}
                </ul>
            </div>  
        </section>

        <section className='container-heatmap'>
            <h2>{completedCount} Habit Selesai di satu tahun terkhir {totalHabits}</h2>
            <div>
                <span>less</span>
                <div className="day level-0"></div>
                <div className="day level-1"></div>
                <div className="day level-2"></div>
                <div className="day level-3"></div>
                <div className="day level-4"></div>
                <span>more</span>
            </div>
            <div className='heatmap-container'>
                <MyCalendarHeatmap />
            </div>
        </section>

        <section className='container-analis'>
            <h2>analisis</h2>
            <div className='statistik-container'>
                
                
                    <Sparklines data={sampleData}>
                        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                        <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                    </Sparklines>
                
            </div>
        </section>
        </>
    )
}

export default App;