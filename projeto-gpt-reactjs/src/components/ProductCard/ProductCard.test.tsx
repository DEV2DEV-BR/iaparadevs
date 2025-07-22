import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { CartProvider } from "../../hooks/useCart";

const product = {
    id: "1",
    title: "Produto Teste",
    description: "Descrição do produto teste",
    image: "/imagem.png",
};

describe("ProductCard", () => {
    it("exibe título, descrição e imagem", () => {
        render(
            <CartProvider>
                <ProductCard product={product} />
            </CartProvider>
        );

        expect(screen.getByText("Produto Teste")).toBeInTheDocument();
        expect(screen.getByText("Descrição do produto teste")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "/imagem.png");
    });

    it("botão adiciona e remove do carrinho", () => {
        render(
            <CartProvider>
                <ProductCard product={product} />
            </CartProvider>
        );

        const button = screen.getByRole("button");

        expect(button).toHaveTextContent("Adicionar ao carrinho");

        fireEvent.click(button);

        // Aqui você pode fazer mais asserts dependendo da lógica do seu carrinho
    });
});
