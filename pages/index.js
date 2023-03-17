import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
    return (
        <>
            <Layout
                title="Inicio"
                description="Ventas de guitarras de la mejor calidad"
            >
                <h1>Hola mundo desde Next.js</h1>
                <Link href="/nosotros">Nosotros</Link>
            </Layout>
        </>
    );
}
