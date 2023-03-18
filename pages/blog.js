import Layout from "@/components/layout";
import ListadoPosts from "@/components/listado-posts";

const Blog = ({ blogs }) => {
    return (
        <Layout
            title="Blog"
            description="El blog oficial de las mejores guitarras en GuitarLa"
        >
            <div className="contenedor">
                <h1 className="heading">Blog</h1>
                <ListadoPosts blogs={blogs} />
            </div>
        </Layout>
    );
};

export const getServerSideProps = async () => {
    const respuesta = await fetch(
        `${process.env.API_URL}/posts?populate=imagen`
    );
    const { data: blogs } = await respuesta.json();

    return {
        props: {
            blogs,
        },
    };
};

export default Blog;
