import React from "react";
import styles from "./CartIcon.module.scss";

interface CartIconProps {
    count: number;
}

const CartIcon: React.FC<CartIconProps> = ({ count }) => {
    return (
        <div className={styles["cart-icon"]}>
            <svg
                className={styles["cart-icon__svg"]}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12"
                />
            </svg>

            {count > 0 && (
                <span className={styles["cart-icon__badge"]} aria-label={`${count} itens no carrinho`}>
                    {count}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
