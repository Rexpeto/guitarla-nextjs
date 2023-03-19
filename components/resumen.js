import { useState, useEffect } from "react";
import styles from "../styles/carrito.module.css";

const Resumen = ({ carrito }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + producto.cantidad * producto.precio,
            0
        );

        setTotal(calculoTotal);
    }, [carrito]);

    return (
        <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
        </aside>
    );
};

export default Resumen;
