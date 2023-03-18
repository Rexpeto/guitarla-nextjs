import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/navegacion.module.css";

const Navegacion = () => {
    const { route } = useRouter();

    return (
        <nav className={styles.navegacion}>
            <Link href="/" className={route === "/" ? styles.active : ""}>
                Inicio
            </Link>
            <Link
                href="/blog"
                className={route === "/blog" ? styles.active : ""}
            >
                Blog
            </Link>
            <Link
                href="/nosotros"
                className={route === "/nosotros" ? styles.active : ""}
            >
                Nosotros
            </Link>
            <Link
                href="/tienda"
                className={route === "/tienda" ? styles.active : ""}
            >
                Tienda
            </Link>
        </nav>
    );
};

export default Navegacion;
