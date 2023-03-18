import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";
import ListadoPosts from "@/components/listado-posts";
import Curso from "@/components/curso";

export default function Home({ guitarras, blogs, curso }) {
    return (
        <>
            <Layout
                title="Inicio"
                description="Ventas de guitarras de la mejor calidad"
            >
                <div className="contenedor">
                    <h3 className="heading">Nuestra colección</h3>
                    <ListadoGuitarras guitarras={guitarras} />

                    <Curso curso={curso?.attributes} />

                    <h3 className="heading">Blog</h3>
                    <ListadoPosts blogs={blogs} />
                </div>
            </Layout>
        </>
    );
}

export const getServerSideProps = async () => {
    const guitarraUrl = `${process.env.API_URL}/guitarras?populate=imagen`;
    const blogUrl = `${process.env.API_URL}/posts?populate=imagen`;
    const cursoUrl = `${process.env.API_URL}/curso?populate=imagen`;

    const [resGuitarra, resBlogs, resCurso] = await Promise.all([
        fetch(guitarraUrl),
        fetch(blogUrl),
        fetch(cursoUrl),
    ]);

    const [{ data: guitarras }, { data: blogs }, { data: curso }] =
        await Promise.all([
            resGuitarra.json(),
            resBlogs.json(),
            resCurso.json(),
        ]);

    return {
        props: {
            guitarras,
            blogs,
            curso,
        },
    };
};
