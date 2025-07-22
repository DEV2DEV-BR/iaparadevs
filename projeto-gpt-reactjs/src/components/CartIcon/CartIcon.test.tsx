import React from "react";
import { render, screen } from "@testing-library/react";
import CartIcon from "./CartIcon";

describe("CartIcon", () => {
    it("renderiza o ícone SVG sempre", () => {
        render(<CartIcon count={0} />);
        const svg = screen.getByRole("img", { hidden: true });
        expect(svg).toBeInTheDocument();
    });

    it("não exibe o badge quando count é zero", () => {
        render(<CartIcon count={0} />);
        const badge = screen.queryByLabelText(/itens no carrinho/i);
        expect(badge).toBeNull();
    });

    it("exibe o badge com a quantidade correta quando count > 0", () => {
        render(<CartIcon count={5} />);
        const badge = screen.getByLabelText("5 itens no carrinho");
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveTextContent("5");
    });
});
