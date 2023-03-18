import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "@/helpers/helper";
import styles from "../styles/blog.module.css";

const Post = ({ post }) => {
    const { titulo, imagen, publishedAt: publicado, url } = post;
    return (
        <Link href={`/post/${url}`} className={styles.post}>
            <article>
                <Image
                    src={imagen?.data?.attributes?.formats?.small?.url}
                    alt={titulo}
                    width={250}
                    height={200}
                />

                <div className={styles.contenido}>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publicado)}</p>
                </div>
            </article>
        </Link>
    );
};

export default Post;
