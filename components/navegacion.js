import Link from "next/link";
import Image from "next/image";
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
            <Link
                href="/carrito"
                className={route === "/tienda" ? styles.active : ""}
            >
                <Image
                    src="/img/carrito.png"
                    alt="Carrito"
                    width={20}
                    height={10}
                />
            </Link>
        </nav>
    );
};

export default Navegacion;
