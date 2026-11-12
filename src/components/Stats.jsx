export default function Stats({ items }) {
  return (
    <dl className="stats">
      {items.map(({ value, label }) => (
        <div className="stats__item" key={label}>
          <dd className="stats__value">{value}</dd>
          <dt className="stats__label">{label}</dt>
        </div>
      ))}
    </dl>
  );
}
