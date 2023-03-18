import Layout from "@/components/layout";
import Image from "next/image";
import { formatearFecha } from "@/helpers/helper";
import styles from "../../styles/post.module.css";

const PostUrl = ({ post }) => {
    const { titulo, descripcion, publishedAt: publicado, imagen } = post;
    return (
        <Layout title={titulo} description="Las mejores guitarras del mercado">
            <article className={`contenedor ${styles.Post}`}>
                <Image
                    className={styles.imagen}
                    src={imagen?.data?.attributes?.formats?.small?.url}
                    alt={titulo}
                    width={500}
                    height={250}
                />

                <div className={styles.contenido}>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publicado)}</p>
                    <p className={styles.descripcion}>{descripcion}</p>
                </div>
            </article>
        </Layout>
    );
};

export const getServerSideProps = async ({ query: { url } }) => {
    const respuesta = await fetch(
        `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
    );

    const { data: post } = await respuesta.json();
    return {
        props: {
            post: post[0]?.attributes,
        },
    };
};

export default PostUrl;
