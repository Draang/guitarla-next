import Layout from "@/components/layout";
import Link from "next/link";

export default function Pagina404() {
  return (
    <Layout
      title="Pagina no encontrada"
      description="Error - Pagina no existe "
    >
      <p className="error">Error Pagina no encontrada</p>
      <Link href="/" className="error-enlace">
        Vuelve a pagina principal
      </Link>
    </Layout>
  );
}
