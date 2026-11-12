// Decorative hero artwork: soft bokeh lights, drifting confetti and a phone mock-up.
// Swap the <PhoneMockup /> for a photo (<img>) when you have real imagery.

const bokeh = [
  { left: '6%', top: '18%', size: 120, color: 'gold', delay: 0 },
  { left: '22%', top: '62%', size: 90, color: 'mint', delay: 1.2 },
  { left: '40%', top: '10%', size: 150, color: 'gold', delay: 0.6 },
  { left: '55%', top: '70%', size: 110, color: 'mint', delay: 2 },
  { left: '70%', top: '6%', size: 80, color: 'mint', delay: 1.6 },
  { left: '86%', top: '58%', size: 140, color: 'gold', delay: 0.3 },
  { left: '92%', top: '14%', size: 70, color: 'gold', delay: 2.4 },
];

const confetti = [
  { left: '12%', top: '22%', rotate: 24, color: 'gold', delay: 0 },
  { left: '4%', top: '64%', rotate: -18, color: 'mint', delay: 1 },
  { left: '34%', top: '48%', rotate: 40, color: 'white', delay: 2 },
  { left: '46%', top: '16%', rotate: -30, color: 'gold', delay: 0.5 },
  { left: '52%', top: '82%', rotate: 12, color: 'mint', delay: 1.5 },
];

function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone__notch" />
      <p className="phone__label">Total balance</p>
      <p className="phone__amount">₹ 2,48,500</p>
      <div className="phone__chart" aria-hidden="true">
        {[38, 56, 44, 72, 60, 88, 76].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <ul className="phone__rows">
        <li>
          <span>Credit score</span>
          <strong>782</strong>
        </li>
        <li>
          <span>Savings goal</span>
          <strong>64%</strong>
        </li>
      </ul>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      {bokeh.map((b, i) => (
        <span
          key={`b${i}`}
          className={`bokeh bokeh--${b.color}`}
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
      {confetti.map((c, i) => (
        <span
          key={`c${i}`}
          className={`confetti confetti--${c.color}`}
          style={{
            left: c.left,
            top: c.top,
            '--rotate': `${c.rotate}deg`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}
      <PhoneMockup />
    </div>
  );
}
