import useStorage from '../habits/hooks/useLocalStorage';
import { useState, useMemo } from 'react';

function Statistik() {
    const [values] = useStorage('DateTime', []);

    const completedCount = useMemo(() => {
        return (values || []).reduce((acc, curr) => acc + (curr.count || 0), 0);
    }, [values]);

    return {
        totalHabits: values.length,
        completedCount
    };
}

export default Statistik;