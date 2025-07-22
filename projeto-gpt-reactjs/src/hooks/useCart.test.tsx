import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CartProvider, useCart } from "./useCart";

function CartTestComponent() {
    const { items, count, addItem, removeItem, isInCart } = useCart();

    return (
        <div>
            <p data-testid="count">{count}</p>
            <button onClick={() => addItem("item1")}>Adicionar item1</button>
            <button onClick={() => removeItem("item1")}>Remover item1</button>
            <p data-testid="in-cart">{isInCart("item1") ? "sim" : "não"}</p>
            <ul data-testid="items">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

describe("useCart via CartProvider", () => {
    it("começa com carrinho vazio", () => {
        render(
            <CartProvider>
                <CartTestComponent />
            </CartProvider>
        );
        expect(screen.getByTestId("count").textContent).toBe("0");
        expect(screen.getByTestId("items").children.length).toBe(0);
        expect(screen.getByTestId("in-cart").textContent).toBe("não");
    });

    it("adiciona um item ao carrinho", () => {
        render(
            <CartProvider>
                <CartTestComponent />
            </CartProvider>
        );

        fireEvent.click(screen.getByText("Adicionar item1"));

        expect(screen.getByTestId("count").textContent).toBe("1");
        expect(screen.getByTestId("items").textContent).toContain("item1");
        expect(screen.getByTestId("in-cart").textContent).toBe("sim");
    });

    it("remove um item do carrinho", () => {
        render(
            <CartProvider>
                <CartTestComponent />
            </CartProvider>
        );

        fireEvent.click(screen.getByText("Adicionar item1"));
        fireEvent.click(screen.getByText("Remover item1"));

        expect(screen.getByTestId("count").textContent).toBe("0");
        expect(screen.getByTestId("items").textContent).not.toContain("item1");
        expect(screen.getByTestId("in-cart").textContent).toBe("não");
    });
});
