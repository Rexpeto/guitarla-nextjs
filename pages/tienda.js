import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";

const Tienda = ({ guitarras }) => {
    return (
        <Layout
            title="Tienda"
            description="Las mejores guitarras en nuestra tienda oficial"
        >
            <main className="contenedor">
                <h2 className="heading">Nuestra colección</h2>
                <ListadoGuitarras guitarras={guitarras} />
            </main>
        </Layout>
    );
};

export const getServerSideProps = async () => {
    const respuesta = await fetch(
        `${process.env.API_URL}/guitarras?populate=imagen`
    );
    const { data: guitarras } = await respuesta.json();

    return {
        props: {
            guitarras,
        },
    };
};
export default Tienda;
