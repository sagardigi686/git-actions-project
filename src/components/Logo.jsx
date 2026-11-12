import { brand } from '../data/content.js';

export default function Logo() {
  return (
    <a className="logo" href="/" aria-label={`${brand.name} home`}>
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="currentColor" />
        <path
          d="M12 26c0-8 6-13 16-13 0 9-5 14-13 14l5-7"
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo__text">{brand.name}</span>
    </a>
  );
}
