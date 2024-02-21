"use client";

import Layout from "@/components/layout";
import styles from "@/styles/carrito.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarGuitarra,
}) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const tmpTotal = carrito.reduce(
      (total, guitarra) => total + guitarra.cantidad * guitarra.precio,
      0
    );
    setTotal(tmpTotal);
  }, [carrito]);
  return (
    <Layout title="Carrito de compras" description="Tu carrito de compras">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito?.length === 0
              ? "Carrito Vacio"
              : carrito?.map((guitarra) => (
                  <div key={guitarra.id} className={styles.producto}>
                    <div>
                      <Image
                        src={guitarra.imagen}
                        alt={`Imagen producto ${guitarra.nombre}`}
                        width={400}
                        height={600}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{guitarra.nombre}</p>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          value={guitarra.cantidad}
                          onChange={(e) => {
                            actualizarCantidad({
                              id: guitarra.id,
                              cantidad: e.target.value,
                            });
                          }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.precio}>
                        $<span>{guitarra.precio}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal $
                        <span>{guitarra.precio * guitarra.cantidad}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.btn_eliminar}
                      onClick={() => eliminarGuitarra(guitarra.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen de compra</h3>
            <p>
              Total a pagar: <span>${total}</span>
            </p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
