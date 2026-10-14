import { useId } from "react";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
  levels?: number;
};

// Pyramide filaire inspirée du logo : une pyramide 3D avec des pyramides imbriquées.
const APEX: [number, number] = [100, 6];
const BASE: [number, number][] = [
  [12, 138],
  [64, 170],
  [190, 152],
  [150, 108],
];
const ANCHOR: [number, number] = [112, 128];

function scalePoint([x, y]: [number, number], s: number): [number, number] {
  return [ANCHOR[0] + (x - ANCHOR[0]) * s, ANCHOR[1] + (y - ANCHOR[1]) * s];
}

export default function PyramidMotif({ className, style, strokeWidth = 1.2, levels = 3 }: Props) {
  const id = useId().replace(/:/g, "");
  const scales = [1, 0.62, 0.36, 0.2].slice(0, levels);

  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a6424" />
          <stop offset="35%" stopColor="#e9cf8a" />
          <stop offset="60%" stopColor="#b8893a" />
          <stop offset="100%" stopColor="#f1dc9e" />
        </linearGradient>
      </defs>
      <g stroke={`url(#g${id})`} strokeWidth={strokeWidth} strokeLinejoin="round">
        {scales.map((s, i) => {
          const a = scalePoint(APEX, s);
          const b = BASE.map((p) => scalePoint(p, s));
          const lines: [number, number][][] = [
            [a, b[0]],
            [a, b[1]],
            [a, b[2]],
            [b[0], b[1]],
            [b[1], b[2]],
          ];
          const hidden: [number, number][][] = [
            [a, b[3]],
            [b[2], b[3]],
            [b[3], b[0]],
          ];
          return (
            <g key={i} opacity={1 - i * 0.15}>
              {lines.map(([p, q], j) => (
                <line key={j} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} />
              ))}
              {hidden.map(([p, q], j) => (
                <line key={`h${j}`} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} opacity={0.5} />
              ))}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
