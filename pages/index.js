import { Head } from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description="Blog de Musica, Venta de guitarras y MAS"
      >
        <h1>Hola Mundo</h1>
        <Link href={"/nosotros"}>Nosotros</Link>
      </Layout>
    </>
  );
}
//113
