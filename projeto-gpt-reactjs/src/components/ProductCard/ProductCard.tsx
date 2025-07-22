import React from "react";
import { useCart } from "../../hooks/useCart";
import styles from "./ProductCard.module.scss";
import type { Product } from "./types";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addItem, removeItem, isInCart } = useCart();

    const inCart = isInCart(product.id);

    const handleToggleCart = () => {
        if (inCart) removeItem(product.id);
        else addItem(product.id);
    };

    return (
        <div className={styles["product-card"]}>
            <img
                src={product.image}
                alt={product.title}
                className={styles["product-card__image"]}
            />

            <div className={styles["product-card__content"]}>
                <h2 className={styles["product-card__title"]}>{product.title}</h2>
                <p className={styles["product-card__description"]}>{product.description}</p>

                <button
                    className={styles["product-card__button"]}
                    onClick={handleToggleCart}
                >
                    {inCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
