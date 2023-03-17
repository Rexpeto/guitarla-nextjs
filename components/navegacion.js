import Link from "next/link";
import styles from "../styles/header.module.css";

const Navegacion = () => {
    return (
        <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/nosotros">Nosotros</Link>
        </nav>
    );
};

export default Navegacion;
