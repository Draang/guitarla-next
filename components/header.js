import Navegacion from "./navegacion";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.css";
export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`${styles.barra} contenedor`}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/img/logo.svg"}
            alt="GuitarsLA"
            width={300}
            height={40}
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={router.pathname === "/nosotros" ? styles.active : ""}
          >
            Nosotros
          </Link>
          <Link
            href="/guitarras"
            className={router.pathname === "/guitarras" ? styles.active : ""}
          >
            Tienda
          </Link>
          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href="/carrito"
            className={router.pathname === "/carrito" ? styles.active : ""}
          >
            <Image
              src={"/img/carrito.png"}
              alt="carrito"
              width={300}
              height={300}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
/* className="logo" */
