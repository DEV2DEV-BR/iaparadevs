import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "./types";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [inCart, setInCart] = useState(false);

    const handleToggleCart = () => {
        setInCart((prev) => !prev);
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
