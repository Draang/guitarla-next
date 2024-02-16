import Link from "next/link";
import styles from "@/styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedor}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/guitarras">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <p className={styles.copyright}>
          Todos los derechos reservador {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
