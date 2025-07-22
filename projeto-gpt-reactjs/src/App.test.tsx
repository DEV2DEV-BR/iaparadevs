import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { CartProvider } from "./hooks/useCart";

// Mock do localStorage limpo a cada teste
beforeEach(() => {
    localStorage.clear();
});

function renderWithProvider() {
    return render(
        <CartProvider>
            <App />
        </CartProvider>
    );
}

describe("App (integração)", () => {
    it("renderiza o header e o título da loja", () => {
        renderWithProvider();
        expect(screen.getByText("E-commecer AI")).toBeInTheDocument();
    });

    it("renderiza 10 cards de produtos", () => {
        renderWithProvider();
        const productTitles = screen.getAllByText("Descrição breve do produto.");
        expect(productTitles.length).toBe(10);
    });

    it("adiciona item ao carrinho e atualiza o contador", () => {
        renderWithProvider();

        // Encontrar primeiro botão de "Adicionar ao carrinho"
        const addButtons = screen.getAllByRole("button", {
            name: /adicionar ao carrinho/i,
        });

        fireEvent.click(addButtons[0]);

        // O contador do carrinho deve mostrar 1
        expect(screen.getByText("1")).toBeInTheDocument();

        // Clicar de novo remove do carrinho
        fireEvent.click(addButtons[0]);

        // O contador deve voltar para 0 (badge sumir ou mostrar 0)
        expect(screen.queryByText("1")).not.toBeInTheDocument();
    });
});
