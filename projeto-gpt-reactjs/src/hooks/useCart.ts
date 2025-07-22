import constate from "constate";
import useLocalStorageState from "./useLocalStorageState"; // o hook que criamos acima

function useCartState() {
    const [items, setItems] = useLocalStorageState<string[]>("cart_items", []);

    const addItem = (id: string) => {
        setItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
    };

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item !== id));
    };

    const isInCart = (id: string) => items.includes(id);

    const count = items.length;

    return { items, addItem, removeItem, isInCart, count };
}

export const [CartProvider, useCart] = constate(useCartState);
