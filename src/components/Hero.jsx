import Button from './Button.jsx';
import Stats from './Stats.jsx';
import HeroVisual from './HeroVisual.jsx';
import { hero } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero">
      <HeroVisual />
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            {hero.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <Stats items={hero.stats} />
          <Button href="#download" withArrow>
            {hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
