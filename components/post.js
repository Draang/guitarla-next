import Link from "next/link";
import styles from "@/styles/blog.module.css";
import { formatDate } from "@/utils/helpers";
import Image from "next/image";
export default function Post({ post }) {
  const { titulo, contenido, url, imagen, publishedAt } = post;
  const urlImg = imagen.data.attributes.formats.small.url;
  return (
    <article className={styles.post}>
      <Image src={urlImg} alt={`imagen ${url}`} width={500} height={500} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatDate(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className="enlace" href={`/blog/${url}`}>
          Leer Mas
        </Link>
      </div>
    </article>
  );
}
