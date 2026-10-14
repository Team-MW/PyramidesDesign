import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/lib/projects";
import PageHead from "@/components/PageHead";
import styles from "./realisations.module.css";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Quelques projets de construction et de rénovation réalisés par Pyramides Design.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageHead title="Réalisations" text="Une sélection de projets récents." />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {projects.map((p) => (
            <article key={p.slug} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 860px) 100vw, 50vw" />
              </div>
              <div className={styles.meta}>
                {p.type} · {p.location}
              </div>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
