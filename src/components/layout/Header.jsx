import { useState, useEffect, useRef } from "react";
import logo from "../../assets/icons/logo.svg";
import wordmark from "../../assets/icons/wordmark.svg";

const navLinks = [
  { label: 'Services',  href: '#services'  },
  { label: 'Process',   href: '#process'   },
  { label: 'Why Us',    href: '#why-us'    },
  { label: 'Use Cases', href: '#use-cases' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(66);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        style={{
          width: "100%",
          background: "#F4F7FA",
          position: "sticky",
          top: 0,
          zIndex: 200,
          boxSizing: "border-box",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.2s",
        }}
      >
        {/* ── Desktop layout (≥768px) ── */}
        <div className="header-desktop" style={{
          paddingLeft: 120,
          paddingRight: 120,
          paddingTop: 16,
          paddingBottom: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}>
          <div style={{
            width: 1200,
            paddingTop: 7,
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}>
            <div style={{ width: 149.61, height: 48, justifyContent: "space-between", alignItems: "center", display: "flex" }}>
              <img src={logo} alt="Apt Intel" style={{ width: 48, height: 48 }} />
              <img src={wordmark} alt="Apt Intel" style={{ width: 93.71, height: 46.56, flexShrink: 0, display: "block" }} />
            </div>
            <div style={{ height: 56, justifyContent: "flex-start", alignItems: "center", gap: 48, display: "flex" }}>
              <div style={{ justifyContent: "flex-start", alignItems: "center", gap: 24, display: "flex" }}>
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="nav-link" style={{
                    color: "#1A1A1A", fontSize: 16, fontFamily: "DM Sans",
                    fontWeight: "500", lineHeight: "15.13px", textDecoration: "none",
                  }}>{link.label}</a>
                ))}
              </div>
              <a href="#contact-cta" className="btn-primary" style={{
                width: 128, height: 48, background: "#004182",
                boxShadow: "0px 3.03px 9.08px rgba(0,65,130,0.20)",
                borderRadius: 7.57, display: "flex", justifyContent: "center",
                alignItems: "center", textDecoration: "none", flexShrink: 0,
              }}>
                <span style={{ color: "white", fontSize: 16, fontFamily: "DM Sans", fontWeight: "500" }}>Contact</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Mobile top bar (<768px) ── */}
        <div className="header-mobile" style={{
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 14,
          paddingBottom: 14,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={logo} alt="Apt Intel" style={{ width: 38, height: 38, display: "block" }} />
            <img src={wordmark} alt="Apt Intel" style={{ width: 80, height: 39, display: "block" }} />
          </div>

          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              width: 40, height: 40,
              background: menuOpen ? "#004182" : "white",
              border: "none",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
              padding: "8px 9px",
              boxSizing: "border-box",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
          >
            <span style={{
              display: "block", width: "100%", height: 2,
              background: menuOpen ? "white" : "#0A0A0A",
              borderRadius: 2,
              transition: "transform 0.2s, opacity 0.2s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "100%", height: 2,
              background: menuOpen ? "white" : "#0A0A0A",
              borderRadius: 2,
              transition: "opacity 0.2s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "100%", height: 2,
              background: menuOpen ? "white" : "#0A0A0A",
              borderRadius: 2,
              transition: "transform 0.2s, opacity 0.2s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer — fixed, starts exactly below the sticky header ── */}
      {menuOpen && (
        <div
          className="header-mobile"
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: headerHeight,
            left: 0,
            width: "100%",
            height: `calc(100vh - ${headerHeight}px)`,
            zIndex: 199,
            background: "rgba(0,0,0,0.4)",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "white",
              borderTop: "1px solid #F0F0F0",
              flexDirection: "column",
              display: "flex",
            }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "18px 24px",
                  color: "#1A1A1A",
                  fontSize: 16,
                  fontFamily: "DM Sans",
                  fontWeight: "500",
                  lineHeight: "24px",
                  textDecoration: "none",
                  borderBottom: i < navLinks.length - 1 ? "1px solid #F0F0F0" : "none",
                }}
              >{link.label}</a>
            ))}
            <div style={{ padding: "16px 24px 24px" }}>
              <a
                href="#contact-cta"
                onClick={closeMenu}
                className="btn-primary"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "14px 0",
                  background: "#004182",
                  borderRadius: 8,
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontFamily: "DM Sans",
                  fontWeight: "500",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >Contact</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
