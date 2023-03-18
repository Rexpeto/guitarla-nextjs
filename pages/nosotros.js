import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
    return (
        <Layout
            title="Nosotros"
            description="Venta de guitarras de la mejor calidad, sabiendo un poco de nosotros"
        >
            <main className={`contenedor ${styles.nosotros}`}>
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat odit facilis nostrum officia placeat
                            consequuntur nam error magnam maxime tempora quae,
                            id dolorem eos est corrupti totam assumenda eligendi
                            nesciunt deserunt modi libero. Laborum aut, deserunt
                            cum ad ipsum id tempore nam optio dolore iusto qui
                            nihil dolorum iste cumque.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Nosotros;
