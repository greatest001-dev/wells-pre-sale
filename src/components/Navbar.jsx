import { useEffect, useState } from 'react';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <a href="#top" className="brand" aria-label="Wells home">
          <span className="brand-mark">W</span>
          <span className="brand-text">{siteData.brand}</span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {siteData.navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={siteData.socialLinks.telegram}
            className="button telegram-button"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a href="#presale" className="button buy-button">
            Buy {siteData.brand}
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
