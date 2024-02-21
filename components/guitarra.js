import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/guitarra.module.css";
export default function Guitarra({ guitarra }) {
  const { desc, imagen, nombre, precio, url } = guitarra;
  /* las imagenes de externas se les tiene que hacer iuna configuracion en el next.config.js */
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen ${nombre}`}
        width={600}
        height={400}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{desc}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} className={'enlace'}>
          Ver Productos
        </Link>
      </div>
    </div>
  );
}
