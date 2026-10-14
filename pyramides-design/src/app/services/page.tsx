import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import PyramidMotif from "@/components/PyramidMotif";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Construction, rénovation et valorisation de biens immobiliers.",
};

const services = [
  {
    title: "Construire",
    image: "/images/villa-prestige.jpg",
    text: "Nous concevons et réalisons des maisons neuves et des extensions. Nous gérons les plans, le permis de construire et la coordination du chantier.",
    items: ["Plans et permis de construire", "Maisons neuves et extensions", "Suivi de chantier complet"],
  },
  {
    title: "Rénover",
    image: "/images/bathroom-suite.jpg",
    text: "Rénovation complète ou partielle d'appartements et de maisons. Nous redistribuons les espaces et refaisons les finitions.",
    items: ["Rénovation complète", "Cuisines et salles de bain", "Électricité, plomberie, peinture, sols"],
  },
  {
    title: "Valoriser",
    image: "/images/kitchen-penthouse.jpg",
    text: "Des aménagements pensés pour améliorer le confort et augmenter la valeur de votre bien, avant une vente ou une mise en location.",
    items: ["Aménagement sur mesure", "Amélioration énergétique", "Rafraîchissement avant vente"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHead title="Services" text="Trois métiers, une même exigence de qualité." />

      <section className="container">
        {services.map((s, i) => (
          <div key={s.title} className={`${styles.block} ${i % 2 ? styles.reverse : ""}`}>
            <div className={styles.imgWrap}>
              <Image src={s.image} alt={s.title} fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
            <div>
              <div className={styles.num}>0{i + 1}</div>
              <h2>{s.title}</h2>
              <div className="divider">
                <span />
              </div>
              <p>{s.text}</p>
              <ul className={styles.list}>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="section section-dark" style={{ textAlign: "center" }}>
        <PyramidMotif
          strokeWidth={0.8}
          style={{ position: "absolute", right: -60, top: -40, width: 320, opacity: 0.2 }}
        />
        <div className="container">
          <h2>
            Un projet <span className="gold">en tête ?</span>
          </h2>
          <div className="divider divider-center">
            <span />
          </div>
          <p style={{ marginBottom: 28 }}>Contactez-nous pour en discuter.</p>
          <Link href="/contact" className="btn btn-gold">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
