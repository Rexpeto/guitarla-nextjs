import Image from "next/image";
import Link from "next/link";
import Navegacion from "./navegacion";
import styles from "../styles/header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/img/logo.svg"
                        width={300}
                        height={40}
                        alt="Logo GuitarLa"
                    />
                </Link>

                <Navegacion />
            </div>
        </header>
    );
};

export default Header;
