import React from "react";
import styles from "./Header.module.scss";
import CartIcon from "../CartIcon/CartIcon";
import { useCart } from "../../hooks/useCart";


const Header: React.FC = () => {
    const { count } = useCart();

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>E-commecer AI</h1>
            <CartIcon count={count} />
        </header>
    );
};

export default Header;
