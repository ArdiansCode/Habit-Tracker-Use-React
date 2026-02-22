import { useState, useMemo, useEffect } from "react";
import useStorage from "./useLocalStorage";

function useHabits() {
    const [habits, setHabits] = useStorage("Habit", []);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState('all');


    function addHabit(habit, isDone) {
        if(!habit) return;

        setHabits(prev => [...prev, {id: Date.now(), habit, isDone}])
    }

    function deleteHabit(id) {
        localStorage.removeItem(setHabits(prev => prev.filter(h => h.id !== id )));
    }

    function isDoneHabit(id) {
        localStorage.setItem(setHabits(prev => prev.map(h => h.id === id ? {...h, isDone: !h.isDone} : h)))
    }

    const searchHabits = useMemo(() => {
        return habits.filter(h => (
            h.habit.toLowerCase().includes(search.toLowerCase())
        ))
    },[habits, search]);

    const filteredHabits = habits.filter(h => {
        if (filter === "active") return !h.isDone;
        if (filter === "completed") return h.isDone;
        return true;
    });

    function clearAll() {
        localStorage.removeItem("Habit");
        location.reload();
    }

    return {
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
    }
}

export default useHabits;