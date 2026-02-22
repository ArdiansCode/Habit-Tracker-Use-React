
function HabitList() {
    return (
        <>
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
                >
                    {h.habit}
                    <button onClick={() => editHabit(h.id)}>edit</button>
                    <button onClick={() => deleteHabit(h.id)}>❌</button>
                    <button onClick={() => isDoneHabit(h.id)}>✅</button>
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default HabitList;