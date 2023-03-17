import Link from "next/link";
import Layout from "@/components/layout";

const Nosotros = () => {
    return (
        <Layout
            title="Nosotros"
            description="Venta de guitarras de la mejor calidad, sabiendo un poco de nosotros"
        >
            <h1>Nosotros</h1>
            <Link href="/">Volver</Link>
        </Layout>
    );
};

export default Nosotros;
