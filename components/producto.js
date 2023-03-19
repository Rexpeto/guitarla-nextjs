import Image from "next/image";
import styles from "../styles/carrito.module.css";

const Producto = ({ articulo, actualizarCantidad, eliminarProducto }) => {
    const { nombre, precio, cantidad, imagen } = articulo;
    return (
        <div className={styles.box_guitarra}>
            <div className={styles.imagen}>
                <Image src={imagen} alt={nombre} width={120} height={40} />
            </div>

            <div>
                <p className={styles.nombre}>{nombre}</p>
                <p>Cantidad:</p>
                <select
                    name="cantidad"
                    className={styles.cantidad}
                    value={cantidad}
                    onChange={(e) =>
                        actualizarCantidad({
                            id: articulo.id,
                            cantidad: parseInt(e.target.value),
                        })
                    }
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <p className={styles.precio}>${precio}</p>
                <p className={styles.subtotal}>
                    Subtotal: <span>${cantidad * precio}</span>
                </p>
            </div>
            <button
                type="button"
                className={styles.btn_eliminar}
                onClick={() => eliminarProducto(articulo.id)}
            >
                x
            </button>
        </div>
    );
};

export default Producto;
