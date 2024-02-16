import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/nosotros.module.css";
export default function Nosotros() {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros GuitarLA: Tienda y blog de musica"
    >
      <main className={styles.nosotros}>
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src={"/img/nosotros.jpg"}
            alt="Nosotros"
            width={400}
            height={100}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: "100%",
              height: "auto",
            }}
            objectFit="cover"
            priority
          />
          <div>
            <p>
              Proin convallis lectus non hendrerit accumsan. Cras tristique sit
              amet odio vestibulum euismod. Sed dignissim suscipit arcu eu
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget velit ligula. Fusce posuere, ligula in sodales
              hendrerit, metus sem tincidunt est, eget lacinia ante mi a augue.
              Etiam vitae nunc sem. Nunc a magna et quam sollicitudin vestibulum
              ac ut enim. Nullam non facilisis quam,
            </p>
            <p>
              Pellentesque id semper nunc. Aliquam sed odio elit. Vestibulum
              lectus justo, tincidunt non est mollis, facilisis congue felis.
              Nulla facilisi. Integer varius felis id sapien dignissim, sit amet
              posuere nisl dictum. Proin in metus molestie, vestibulum massa a,
              feugiat eros. Mauris at pulvinar tortor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
