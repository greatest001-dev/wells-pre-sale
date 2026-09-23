export default function ProgressBar({ value, max = 100, height = 12, color = 'gold' }) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="progress-bar" aria-label="Progress" style={{ height }}>
      <span
        className={`progress-fill ${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
