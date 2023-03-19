import { useState, useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    const carritoLs =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("carrito")) ?? []
            : [];

    const [carrito, setCarrito] = useState(carritoLs);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarCarrito = (guitarra) => {
        if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map((guitarraState) => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad;
                }

                return guitarraState;
            });

            setCarrito(carritoActualizado);
        } else {
            //* Registro nuevo
            setCarrito([...carrito, guitarra]);
        }
    };

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(
            (producto) => producto.id != id
        );
        setCarrito(carritoActualizado);
        window.localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    const actualizarCantidad = (guitarra) => {
        const carritoActualizado = carrito.map((guitarraState) => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = parseInt(guitarra.cantidad);
            }
            return guitarraState;
        });
        setCarrito(carritoActualizado);
        window.localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    return (
        <Component
            {...pageProps}
            carrito={carrito}
            agregarCarrito={agregarCarrito}
            actualizarCantidad={actualizarCantidad}
            eliminarProducto={eliminarProducto}
        />
    );
}
