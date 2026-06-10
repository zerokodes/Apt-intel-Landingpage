import ppLogo from "../assets/icons/pp-logo.svg";
import wordmark from "../assets/icons/wordmark.svg";
import Footer from "../components/layout/Footer";

const body = { color: '#272727', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '28.80px', wordWrap: 'break-word' };
const bold = { ...body, fontWeight: '700' };
const h2   = { color: '#1A1A1A', fontSize: 24, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word' };

export default function PrivacyPolicy() {
  return (
    <div style={{width: '100%', background: '#FAFAFA', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch'}}>

      {/* ── Mobile header ── */}
      <div className="legal-header-mobile" style={{display: 'none', background: '#F4F7FA', padding: '14px 24px', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <a href="/"><img src={ppLogo} alt="Apt Intel" style={{width: 38, height: 38, display: 'block'}} /></a>
          <a href="/"><img src={wordmark} alt="Apt Intel" style={{width: 80, height: 39, display: 'block'}} /></a>
        </div>
        <a href="/#contact-cta" className="btn-primary" style={{padding: '10px 18px', background: '#004182', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}}>
          <span style={{color: 'white', fontSize: 14, fontFamily: 'DM Sans', fontWeight: '500'}}>Contact</span>
        </a>
      </div>

      {/* ── Desktop header ── */}
      <div className="legal-header-desktop" style={{alignSelf: 'stretch', height: 104, paddingLeft: 120, paddingRight: 120, paddingTop: 16, paddingBottom: 16, background: '#F4F7FA', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, boxSizing: 'border-box'}}>
        <div style={{width: 1200, paddingTop: 7, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{width: 149.61, height: 48, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
            <a href="/"><img src={ppLogo} alt="Apt Intel" style={{width: 48, height: 48, display: 'block'}} /></a>
            <a href="/"><img src={wordmark} alt="Apt Intel" style={{width: 93.71, height: 46.56, display: 'block'}} /></a>
          </div>
          <div style={{height: 56, justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
              {['Services','Process','Why Us','Use Cases'].map((label, i) => {
                const hrefs = ['/#services','/#process','/#why-us','/#use-cases'];
                return <a key={i} href={hrefs[i]} className="nav-link" style={{color: '#1A1A1A', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '15.13px', textDecoration: 'none'}}>{label}</a>;
              })}
            </div>
            <a href="/#contact-cta" className="btn-primary" style={{width: 128, height: 48, background: '#004182', boxShadow: '0px 3.03px 9.08px rgba(0,65,130,0.20)', borderRadius: 7.57, display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'}}>
              <span style={{color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '15.13px'}}>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="legal-content-outer" style={{alignSelf: 'stretch', background: '#F4F7FA', display: 'flex', justifyContent: 'center'}}>
        <div className="legal-content-inner" style={{width: 1200, paddingTop: 96, paddingBottom: 96, boxSizing: 'border-box'}}>

          {/* Title block — left:223 in 1440px canvas = 103px from 1200px container */}
          <div className="legal-title-block" style={{marginLeft: 103, width: 898, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>

            {/* Breadcrumb */}
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 16, marginBottom: 16}}>
              <a href="/" style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 8, textDecoration: 'none'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{color: '#676767', fontSize: 14, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '20px'}}>Back to Home</div>
              </a>
              <div style={{height: 32, paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: 'rgba(0,65,130,0.05)', borderRadius: 32, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 8}}>
                <div style={{color: '#004182', fontSize: 14, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 0.35}}>Legal</div>
              </div>
            </div>

            {/* Title */}
            <div style={{color: '#1A1A1A', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '60px', wordWrap: 'break-word'}}>Privacy Policy</div>

            {/* Date */}
            <div style={{paddingTop: 24, color: '#004182', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word'}}>Last updated: June 8, 2026</div>
          </div>

          {/* Body */}
          <div className="legal-body-block" style={{marginLeft: 103, width: 994, paddingTop: 48, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>

            <div style={{...body}}>At Apt Intel, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>1. Information We Collect</div>
            <div style={{...body}}>We may collect information about you in a variety of ways. The information we may collect via the website includes:</div>
            <div style={{paddingTop: 24, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8, width: '100%', boxSizing: 'border-box'}}>
              <div style={{...body}}><span style={bold}>Personal Data:</span> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us.</div>
              <div style={{...body}}><span style={bold}>Derivative Data:</span> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.</div>
            </div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>2. Use of Your Information</div>
            <div style={{...body}}>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</div>
            <div style={{paddingTop: 24, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8, width: '100%', boxSizing: 'border-box'}}>
              <div style={{...body}}><span style={bold}>a. </span>Deliver targeted advertising, newsletters, and other information regarding promotions and the site to you.</div>
              <div style={{...body}}><span style={bold}>b.</span> Email you regarding your account or order.</div>
              <div style={{...body}}><span style={bold}>c.</span> Fulfil and manage purchases, orders, payments, and other transactions related to the site.</div>
              <div style={{...body}}><span style={bold}>d.</span> Improve the efficiency and operation of the site.</div>
              <div style={{...body}}><span style={bold}>e.</span> Monitor and analyze usage and trends to improve your experience with the site.</div>
            </div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>3. Disclosure of Your Information</div>
            <div style={{...body}}>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</div>
            <div style={{paddingTop: 24, ...body}}><span style={bold}>By Law or to Protect Rights:</span> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>4. Contact Us</div>
            <div style={{...body}}>If you have questions or comments about this Privacy Policy, please contact us at:</div>
            <div style={{paddingTop: 24, paddingBottom: 96, ...body}}>
              <span style={{color: '#1A1A1A', fontWeight: '500'}}>Apt Intel<br />Email: </span>
              <a href="mailto:hello@aptintel.com" style={{color: '#004182', fontWeight: '500', textDecoration: 'underline'}}>hello@aptintel.com</a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer (shared component) ── */}
      <Footer />

    </div>
  );
}
