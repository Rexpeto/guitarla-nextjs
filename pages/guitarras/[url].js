import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../../styles/guitarra.module.css";

const Guitarra = ({ guitarra }) => {
    const { nombre, descripcion, precio, imagen } = guitarra;
    const { url } = imagen?.data?.attributes?.formats?.small;
    return (
        <Layout title={nombre} description="La mejor guitarra en venta">
            <main className={`contenedor ${styles.guitarra}`}>
                <div className={styles.imagen}>
                    <Image src={url} alt={nombre} width={200} height={100} />
                </div>
                <div className={styles.contenido}>
                    <h3 className={styles.nombre}>{nombre}</h3>
                    <p className={styles.texto}>{descripcion}</p>
                    <p className={styles.precio}>{precio}</p>

                    <form className={styles.formulario}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select id="cantidad">
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <input type="submit" value="Agregar"></input>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export const getServerSideProps = async ({ query: { url } }) => {
    const respuesta = await fetch(
        `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
    );

    const { data: guitarra } = await respuesta.json();
    return {
        props: {
            guitarra: guitarra[0]?.attributes,
        },
    };
};

export default Guitarra;