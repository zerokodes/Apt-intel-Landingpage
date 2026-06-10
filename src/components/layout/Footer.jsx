import footerLogo from "../../assets/icons/footer-logo.svg";
import footerWordmark from "../../assets/icons/footer-wordmark.svg";

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Use Cases', href: '#use-cases' },
];

const linkStyle = {
  color: 'rgba(250, 250, 250, 0.70)',
  fontSize: 14,
  fontFamily: 'DM Sans',
  fontWeight: '500',
  lineHeight: '19.60px',
  textDecoration: 'none',
  wordWrap: 'break-word',
};

export default function Footer() {
  return (
    <footer className="footer-section" style={{width: '100%', position: 'relative', background: '#0A0A0A', overflow: 'hidden', boxSizing: 'border-box', paddingBottom: 0}}>

      {/* Top gradient line */}
      <div style={{width: 678, height: 0.76, left: '50%', transform: 'translateX(-50%)', top: 0, position: 'absolute', background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0, 65, 130, 0.50) 50%, rgba(0,0,0,0) 100%)'}} />
      <div style={{width: 288.30, height: 0.76, left: '50%', transform: 'translateX(-50%)', top: 0, position: 'absolute', background: 'rgba(0, 161, 255, 0.30)', filter: 'blur(1.51px)'}} />

      {/* 1200px inner container */}
      <div className="footer-inner" style={{width: 1200, margin: '0 auto', paddingTop: 72.35, paddingBottom: 0, position: 'relative'}}>

        {/* Main row */}
        <div className="footer-main-row" style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>

          {/* Logo + tagline */}
          <div className="footer-logo-col" style={{width: 242.14, display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24}}>
            <div className="footer-logo-row" style={{width: 149.61, height: 48, display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <img src={footerLogo} alt="Apt Intel" style={{width: 48, height: 48, display: 'block'}} />
              <img src={footerWordmark} alt="Apt Intel" style={{width: 93.71, height: 46.56, display: 'block'}} />
            </div>
            <div className="footer-tagline" style={{alignSelf: 'stretch', color: 'rgba(250, 250, 250, 0.70)', fontSize: 14, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '19.60px', wordWrap: 'break-word'}}>A premium software engineering partner<br className="footer-tagline-br" />building tailored solutions for serious<br className="footer-tagline-br" />operational challenges.</div>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col" style={{width: 102, display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <div style={{alignSelf: 'stretch', paddingBottom: 24.21}}>
              <div className="footer-nav-heading" style={{color: 'rgba(250, 250, 250, 0.70)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '22.40px', letterSpacing: 0.53, wordWrap: 'break-word'}}>Navigation</div>
            </div>
            <div className="footer-nav-links" style={{display: 'flex', flexDirection: 'column'}}>
              {navLinks.map((link, i) => (
                <div key={link.href} style={{paddingTop: i === 0 ? 0 : 12.11}}>
                  <a href={link.href} className="footer-link" style={linkStyle}>{link.label}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Get in touch + HQ */}
          <div className="footer-contact-col" style={{width: 160, display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 21}}>
            <div className="footer-contact-inner" style={{width: 144, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 24}}>
              <div className="footer-contact-label" style={{alignSelf: 'stretch', textAlign: 'center', color: 'rgba(250, 250, 250, 0.70)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '22.40px', letterSpacing: 0.53, wordWrap: 'break-word'}}>Get in touch</div>
              <a href="mailto:hello@aptintel.com" className="footer-email footer-contact-email" style={{alignSelf: 'stretch', color: 'rgba(250, 250, 250, 0.70)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '22.40px', wordWrap: 'break-word'}}>hello@aptintel.com</a>
            </div>
            <div className="footer-hq" style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 8}}>
              <div className="footer-hq-label" style={{alignSelf: 'stretch', textAlign: 'right', color: 'rgba(250, 250, 250, 0.70)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '22.40px', wordWrap: 'break-word'}}>Global HQ</div>
              <div className="footer-hq-value" style={{color: 'rgba(250, 250, 250, 0.70)', fontSize: 14, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '19.60px', wordWrap: 'break-word'}}>Operating worldwide</div>
            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="footer-bottom-bar" style={{paddingTop: 24.21, marginTop: 209.14, borderTop: '0.76px rgba(255, 255, 255, 0.10) solid', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 40}}>
          <div style={{color: 'rgba(250, 250, 250, 0.70)', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word'}}>© 2026 Aptitude Intelligence.<br className="footer-copyright-br" />All rights reserved.</div>
          <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 18.16}}>
            <a href="/privacy-policy" className="footer-link" style={{color: 'rgba(250, 250, 250, 0.70)', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word', textDecoration: 'none'}}>Privacy Policy</a>
            <a href="/terms-of-service" className="footer-link" style={{color: 'rgba(250, 250, 250, 0.70)', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word', textDecoration: 'none'}}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
