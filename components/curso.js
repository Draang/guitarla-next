import styles from "@/styles/curso.module.css";
export default function Curso({ curso }) {
  const { titulo, contenido, imagen } = curso;
  console.log(imagen.data[0].attributes.url);
  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0, 0, 0, 0.65),
                rgb(0, 0, 0, 0.7)
              ),
              url(${imagen.data[0].attributes.url});
          }
        `}
      </style>
      <div className={`contenedor ${styles.curso_grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{contenido[0].children[0].text}</p>
        </div>
      </div>
    </section>
  );
}
