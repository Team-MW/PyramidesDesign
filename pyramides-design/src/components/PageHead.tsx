import PyramidMotif from "./PyramidMotif";

export default function PageHead({ title, text }: { title: string; text?: string }) {
  return (
    <section className="page-head">
      <PyramidMotif className="page-head-motif" strokeWidth={0.9} />
      <div className="container">
        <h1>{title}</h1>
        <div className="divider">
          <span />
        </div>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
