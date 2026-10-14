import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import PyramidMotif from "@/components/PyramidMotif";

export const metadata: Metadata = {
  title: "À propos",
  description: "Qui sommes-nous et comment nous travaillons.",
};

const steps = [
  { title: "Premier rendez-vous", text: "Nous visitons le lieu et écoutons vos besoins." },
  { title: "Proposition", text: "Plans, choix des matériaux et devis détaillé." },
  { title: "Travaux", text: "Nous coordonnons les artisans et suivons le chantier." },
  { title: "Livraison", text: "Réception des travaux et remise des clés." },
];

export default function AProposPage() {
  return (
    <>
      <PageHead title="À propos" text="Une entreprise à taille humaine, attachée au travail bien fait." />

      <section className="section">
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}
        >
          <div>
            <h2>
              Pyramides <span className="gold">Design</span>
            </h2>
            <div className="divider">
              <span />
            </div>
            <p>
              Pyramides Design est une entreprise de construction et de rénovation. Nous travaillons
              avec un réseau d&apos;artisans de confiance pour livrer des projets propres, dans les
              délais et le budget convenus.
            </p>
            <p style={{ marginTop: 14 }}>
              La pyramide résume notre façon de faire : des bases solides, des lignes simples et un
              résultat qui dure.
            </p>
          </div>
          <Image
            src="/images/logo.png"
            alt="Logo Pyramides Design"
            width={360}
            height={360}
            style={{ margin: "0 auto" }}
          />
        </div>
      </section>

      <section className="section section-dark">
        <PyramidMotif
          strokeWidth={0.8}
          style={{ position: "absolute", left: -80, bottom: -60, width: 380, opacity: 0.14 }}
        />
        <div className="container">
          <h2>
            Comment nous <span className="gold">travaillons</span>
          </h2>
          <div className="divider" style={{ marginBottom: 48 }}>
            <span />
          </div>
          <ol
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {steps.map((s, i) => (
              <li key={s.title} style={{ borderTop: "1px solid rgba(226,196,126,0.5)", paddingTop: 22 }}>
                <div className="gold" style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", lineHeight: 1 }}>
                  0{i + 1}
                </div>
                <h3 style={{ margin: "10px 0 8px" }}>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2>Parlons de votre projet</h2>
          <div className="divider divider-center">
            <span />
          </div>
          <Link href="/contact" className="btn btn-gold">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
