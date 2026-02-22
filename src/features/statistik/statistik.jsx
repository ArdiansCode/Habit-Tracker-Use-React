import useStorage from '../habits/hooks/useLocalStorage';
import { useState, useMemo } from 'react';

function Statistik() {
    const [values] = useStorage('Habit', []);

    const completedCount = useMemo(() => {
        return values.filter(h => h.isDone === true).length;
    }, [values]);

    return {
        totalHabits: values.length,
        completedCount
    };
}

export default Statistik;