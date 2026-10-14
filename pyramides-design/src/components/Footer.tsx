import Link from "next/link";
import PyramidMotif from "./PyramidMotif";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <PyramidMotif className={styles.motif} strokeWidth={0.8} />
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <PyramidMotif style={{ width: 56 }} strokeWidth={2.2} />
              <div className={styles.name}>
                Pyramides <span className="gold">Design</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Construire <span className="gold">·</span> Rénover <span className="gold">·</span> Valoriser
            </p>
          </div>

          <div>
            <div className={`${styles.title} gold`}>Pages</div>
            <ul className={styles.list}>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/realisations">Réalisations</Link></li>
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className={`${styles.title} gold`}>Contact</div>
            <ul className={styles.list}>
              <li><a href="tel:+33100000000">01 00 00 00 00</a></li>
              <li><a href="mailto:contact@pyramides-design.fr">contact@pyramides-design.fr</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>© 2026 Pyramides Design</div>
      </div>
    </footer>
  );
}
