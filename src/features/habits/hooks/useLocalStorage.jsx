import {useState, useEffect} from "react";

function useStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const storad = localStorage.getItem(key);
            return storad !== null ? JSON.parse(storad) : initialValue;
        } catch (error) {
            console.error("gagal memuat localstorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("gagal menyimpan data di lokalstorage", error);
        }
    }, [value, key]);

    return [value, setValue];
}

export default useStorage;