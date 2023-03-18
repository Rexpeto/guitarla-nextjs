import styles from "../styles/guitarras.module.css";
import Articulo from "./articulo";

const ListadoGuitarras = ({ guitarras }) => {
    return (
        <div className={styles.guitarras_grid}>
            {guitarras.map((guitarra) => (
                <Articulo key={guitarra?.id} articulo={guitarra?.attributes} />
            ))}
        </div>
    );
};

export default ListadoGuitarras;
