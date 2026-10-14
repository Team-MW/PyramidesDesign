import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import PyramidMotif from "@/components/PyramidMotif";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Pyramides Design pour votre projet de construction ou de rénovation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHead title="Contact" text="Décrivez votre projet en quelques lignes, nous vous rappelons." />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.info}>
            <PyramidMotif className={styles.infoMotif} strokeWidth={0.9} />
            <h2>Coordonnées</h2>
            <div className="divider">
              <span />
            </div>
            <dl>
              <div>
                <dt>Téléphone</dt>
                <dd><a href="tel:+33100000000">01 00 00 00 00</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:contact@pyramides-design.fr">contact@pyramides-design.fr</a></dd>
              </div>
              <div>
                <dt>Horaires</dt>
                <dd>Du lundi au vendredi, 9h – 18h</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
