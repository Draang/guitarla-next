import { Head } from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import Post from "@/components/post";
import Curso from "@/components/curso";
import styleGuitarras from "@/styles/guitarras.module.css";
import stylesBlog from "@/styles/blog.module.css";
export default function Home({ guitarras, posts, curso }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description="Blog de Musica, Venta de guitarras y MAS"
      >
        <main className="contenedor">
          <h2 className="heading">Nuestra Coleccion</h2>
          <div className={styleGuitarras.guitarras_grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
        <Curso curso={curso.attributes} />
        <section className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={stylesBlog.blog}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
//113
export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPost = `${process.env.API_URL}/blog?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;
  const [reqGuitarras, reqPosts, reqCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso),
  ]);
  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([reqGuitarras.json(), reqPosts.json(), reqCurso.json()]);
  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
