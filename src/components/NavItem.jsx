import { ChevronDown } from './Icons.jsx';

const slug = (text) => `#${text.toLowerCase().replace(/\s+/g, '-')}`;

export default function NavItem({ item, isOpen, onToggle, onOpen, onClose }) {
  if (!item.links) {
    return (
      <li className="nav__item">
        <a className="nav__link" href={item.href}>
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li className="nav__item" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className="nav__link"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown className={`nav__chevron${isOpen ? ' nav__chevron--open' : ''}`} />
      </button>
      {isOpen && (
        <ul className="nav__dropdown">
          {item.links.map((link) => (
            <li key={link}>
              <a href={slug(link)}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
