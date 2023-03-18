import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

const Articulo = ({ articulo }) => {
    const { nombre, precio, imagen, url } = articulo;

    console.log(imagen?.data?.attributes?.formats?.small?.url);
    return (
        <div className={styles.card}>
            <Image
                src={imagen?.data?.attributes?.formats?.small?.url}
                alt={nombre}
                width={400}
                height={200}
            />
            <div className={styles.contenido}>
                <h3 className={styles.titulo}>{nombre}</h3>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`} className={styles.enlace}>
                    Ver Producto
                </Link>
            </div>
        </div>
    );
};

export default Articulo;
