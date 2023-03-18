import styles from "../styles/curso.module.css";

const Curso = ({ curso }) => {
    const { titulo, contenido, imagen } = curso;
    const { url } = imagen?.data?.attributes?.formats?.large;
    console.log(url);

    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>{`
                .curso {
                    background-image: linear-gradient(
                            to right,
                            rgb(0 0 0 / 0.65),
                            rgb(0 0 0 / 0.7)
                        ),
                        url(${url});
                }
            `}</style>
            <div className={`contenedor ${styles.curso_grid}`}>
                <div className={styles.contenido}>
                    <h2 className="heading">{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </div>
        </section>
    );
};

export default Curso;
