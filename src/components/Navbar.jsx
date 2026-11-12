import { useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';
import NavItem from './NavItem.jsx';
import { MenuIcon } from './Icons.jsx';
import { navItems } from '../data/content.js';

export default function Navbar() {
  const [openLabel, setOpenLabel] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);

  // Close menus on Escape or a click outside the header.
  useEffect(() => {
    const closeAll = () => {
      setOpenLabel(null);
      setMobileOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && closeAll();
    const onClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__inner">
        <Logo />

        <button
          type="button"
          className="header__toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <MenuIcon open={mobileOpen} />
        </button>

        <nav className={`nav${mobileOpen ? ' nav--open' : ''}`} aria-label="Main">
          <ul className="nav__list">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isOpen={openLabel === item.label}
                // On desktop, hover has already opened the menu, so a click must
                // not toggle it shut again; only the mobile accordion toggles.
                onToggle={() =>
                  setOpenLabel((cur) =>
                    mobileOpen && cur === item.label ? null : item.label
                  )
                }
                onOpen={() => !mobileOpen && setOpenLabel(item.label)}
                onClose={() => !mobileOpen && setOpenLabel(null)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
