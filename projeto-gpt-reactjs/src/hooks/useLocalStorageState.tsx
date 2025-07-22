import { useState, useEffect } from "react";

function useLocalStorageState<T>(key: string, initialValue: T | (() => T)) {
    const [state, setState] = useState<T>(() => {
        if (typeof window === "undefined") return typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;

        try {
            const stored = localStorage.getItem(key);
            if (stored !== null) {
                return JSON.parse(stored) as T;
            } else {
                return typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;
            }
        } catch (error) {
            console.warn(`Erro ao ler localStorage key "${key}":`, error);
            return typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.warn(`Erro ao salvar no localStorage key "${key}":`, error);
        }
    }, [key, state]);

    return [state, setState] as const;
}

export default useLocalStorageState;
