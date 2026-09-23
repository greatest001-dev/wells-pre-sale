export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`section-head ${align === 'center' ? 'centered' : ''}`}>
      {eyebrow && <p className="section-tag">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
  );
}
