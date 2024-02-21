import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/guitarra.module.css";
import { useState } from "react";
export default function Guitarra({ guitarra, agregarCarrito }) {
  const { desc, imagen, nombre, precio } = guitarra.attributes;
  const [cantidad, setCantidad] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Seleccione una cantidad para poder agregar a carrito");
      return;
    }
    //agregar a carrito
    const guitarraObj = {
      id: guitarra.id,
      nombre,
      imagen: imagen.data.attributes.url,
      cantidad,
      precio,
    };
    //Pasar al context
    agregarCarrito(guitarraObj);
  };
  //params = router.query.nombre
  return (
    <Layout
      title={guitarra.nombre}
      description={`Informacion de la guitarra ${guitarra.nombre}`}
    >
      <main className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={nombre}
          width={700}
          height={500}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p>{desc}</p>
          <p className={styles.precio}>${precio}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>

            <select
              name="cantidad"
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">--Seleccione-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </main>
    </Layout>
  );
}
/** Estatico **/
export async function getStaticPaths(props) {
  const req = await fetch(`${process.env.API_URL}/guitarras?`);
  const res = await req.json();
  const paths = res.data.map((guitarra) => ({
    params: { url: guitarra.attributes.url },
  }));
  return { fallback: false, paths: paths };
}

export async function getStaticProps(props) {
  const req = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${props.params.url}&populate=imagen`
  );
  const res = await req.json();
  return { props: { guitarra: res.data[0] } };
}

/** Dinamico **/
/* export async function getServerSideProps(props) {
  const req = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${props.params.url}&populate=imagen`
  );
  const res = await req.json();
  return { props: { guitarra: res.data[0].attributes } };
}
 */
