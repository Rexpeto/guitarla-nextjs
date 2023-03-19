import Layout from "@/components/layout";
import Producto from "@/components/producto";
import Resumen from "@/components/resumen";
import styles from "../styles/carrito.module.css";

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
    return (
        <Layout
            title="Carrito"
            description="La mejor tienda de guitarras de la mejor calidad"
        >
            <main className="contenedor">
                <h1 className="heading">Carrito de Compras</h1>
                <div className={styles.contenido_resumen}>
                    <div className={styles.carrito}>
                        <h2>Articulos</h2>
                        {carrito.map((articulo) => (
                            <Producto
                                key={articulo.id}
                                articulo={articulo}
                                actualizarCantidad={actualizarCantidad}
                                eliminarProducto={eliminarProducto}
                            />
                        ))}
                    </div>

                    <Resumen carrito={carrito}/>
                </div>
            </main>
        </Layout>
    );
};

export default Carrito;
