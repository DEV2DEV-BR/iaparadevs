import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Header from "./Header";

// Mock do hook useCart
vi.mock("../../hooks/useCart", () => ({
    useCart: () => ({
        count: 3, // valor mockado para o teste
    }),
}));

describe("Header", () => {
    it("renderiza o título corretamente", () => {
        render(<Header />);
        expect(screen.getByText("E-commecer AI")).toBeDefined();
    });

    it("exibe o contador correto no CartIcon", () => {
        render(<Header />);
        // Verifica se o número 3 aparece na tela (passado para CartIcon)
        expect(screen.getByText("3")).toBeDefined();
    });
});
