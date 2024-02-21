import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import { formatDate } from "@/utils/helpers";
export default function Post({ post }) {
  const { titulo, contenido, publishedAt, imagen } = post;
  return (
    <Layout>
      <article className={styles.post}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          alt={`Imagen ${titulo}`}
          width={1000}
          height={500}
          className={styles.mt_3}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
}
/** Estatico **/
export async function getStaticPaths(props) {
  const req = await fetch(`${process.env.API_URL}/blog`);
  const res = await req.json();
  const paths = res.data.map((guitarra) => ({
    params: { url: guitarra.attributes.url },
  }));
  return { fallback: false, paths: paths };
}

export async function getStaticProps(props) {
  const req = await fetch(
    `${process.env.API_URL}/blog?filters[url]=${props.params.url}&populate=imagen`
  );
  const res = await req.json();
  return { props: { post: res.data[0].attributes } };
}
