import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import PyramidMotif from "@/components/PyramidMotif";
import styles from "./home.module.css";

const services = [
  { title: "Construire", text: "Maisons neuves et extensions, de la conception aux finitions.", levels: 1 },
  { title: "Rénover", text: "Rénovation complète d'appartements et de maisons, cuisines, salles de bain.", levels: 2 },
  { title: "Valoriser", text: "Aménagements et améliorations qui donnent de la valeur à votre bien.", levels: 3 },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/living-room-prestige.png"
          alt="Salon rénové par Pyramides Design"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroShade} />
        <PyramidMotif className={styles.heroMotif} strokeWidth={1} />
        <div className={`container ${styles.heroText}`}>
          <h1>
            Construire, rénover, <span className="gold">valoriser.</span>
          </h1>
          <div className="divider">
            <span />
          </div>
          <p>Des intérieurs simples, lumineux et bien finis.</p>
          <div className={styles.heroBtns}>
            <Link href="/realisations" className="btn btn-gold">
              Voir nos réalisations
            </Link>
            <Link href="/contact" className="btn btn-outline-gold">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.intro}`}>
          <div>
            <h2>
              Un seul interlocuteur, <span className="gold">du projet à la livraison.</span>
            </h2>
            <div className="divider">
              <span />
            </div>
            <p>
              Pyramides Design accompagne les particuliers dans la construction et la rénovation de
              leur logement. Nous nous occupons des plans, de la coordination des artisans et du
              suivi de chantier.
            </p>
            <p>
              Notre approche est simple : des lignes nettes, des matériaux de qualité et un travail
              soigné jusque dans les détails.
            </p>
          </div>
          <div className={styles.introLogo}>
            <Image src="/images/logo.png" alt="Logo Pyramides Design" width={380} height={380} />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <PyramidMotif className={styles.servicesMotif} strokeWidth={0.8} />
        <div className="container">
          <h2>
            Ce que nous <span className="gold">faisons</span>
          </h2>
          <div className="divider">
            <span />
          </div>
          <div className={styles.services}>
            {services.map((s) => (
              <div key={s.title} className={styles.service}>
                <PyramidMotif className={styles.serviceIcon} levels={s.levels} strokeWidth={2.4} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/services" className="btn btn-outline-gold">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.rowHead}>
            <div>
              <h2>Quelques réalisations</h2>
              <div className="divider" style={{ marginBottom: 0 }}>
                <span />
              </div>
            </div>
            <Link href="/realisations" className="link">
              Tout voir
            </Link>
          </div>
          <div className={styles.projects}>
            {projects.slice(0, 2).map((p) => (
              <Link key={p.slug} href="/realisations" className={styles.project}>
                <div className={styles.projectImg}>
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 860px) 100vw, 50vw" />
                </div>
                <div className={styles.projectMeta}>
                  {p.type} · {p.location}
                </div>
                <h3>{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <PyramidMotif className={styles.ctaMotifLeft} strokeWidth={0.8} />
        <PyramidMotif className={styles.ctaMotifRight} strokeWidth={0.8} />
        <div className={`container ${styles.cta}`}>
          <h2>
            Vous avez un <span className="gold">projet ?</span>
          </h2>
          <div className="divider divider-center">
            <span />
          </div>
          <p>Parlez-nous de votre projet, nous vous répondons rapidement.</p>
          <Link href="/contact" className="btn btn-gold">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
