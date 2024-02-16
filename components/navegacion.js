import React from "react";
import Link from "next/link";

export default function Navegacion() {
  return (
    <nav className="navegacion">
      <Link href="/">Inicio</Link>
      <Link href="/nosotros">Nosotros</Link>
      <Link href="/guitarras">Tienda</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
