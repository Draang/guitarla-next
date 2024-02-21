import React from "react";
import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "@/styles/guitarras.module.css";
/** Server side**/
export async function getStaticProps() {
  //generacion estatica osease eb el build
  const req = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const res = await req.json();
  return { props: { guitarras: res.data } };
}

export default function Guitarras({ guitarras }) {
  return (
    <Layout title="Guitarras" description="Tienda de Guitarras de GuitarLA">
      <main className="contenedor">
        <h2 className="heading">Nuestra Coleccion</h2>
        <div className={styles.guitarras_grid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
/* // generacion dinamica
export async function getServerSideProps() {
  //generacion estatica osease eb el build
  const req = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const res = await req.json();
  return { props: { guitarras: res.data } };
} */
