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

    function editHabit(id) {
        console.assert("yyyyy")
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

    return {
        addHabit,
        deleteHabit,
        editHabit,
        isDoneHabit,
        searchHabits,
        filteredHabits,
        filter,
        setFilter,
        setSearch
    }
}

export default useHabits;