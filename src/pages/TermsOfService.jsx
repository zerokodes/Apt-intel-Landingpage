import ppLogo from "../assets/icons/pp-logo.svg";
import wordmark from "../assets/icons/wordmark.svg";
import Footer from "../components/layout/Footer";

const body = { color: '#272727', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '28.80px', wordWrap: 'break-word' };
const bold = { ...body, fontWeight: '700' };
const h2   = { color: '#1A1A1A', fontSize: 24, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word' };

export default function TermsOfService() {
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
          <div className="legal-title-block" style={{marginLeft: 103, width: 994, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>

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
            <div style={{color: '#1A1A1A', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '60px', wordWrap: 'break-word'}}>Terms of Service</div>

            {/* Date */}
            <div style={{paddingTop: 24, color: '#004182', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '28.80px', wordWrap: 'break-word'}}>Last updated: June 8, 2026</div>
          </div>

          {/* Body */}
          <div className="legal-body-block" style={{marginLeft: 103, width: 994, paddingTop: 48, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>

            <div style={{...body}}>These Terms of Service constitute a legally binding agreement made between you and Apt Intel, concerning your access to and use of our website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto.</div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>1. Agreement to Terms</div>
            <div style={{...body}}>By accessing the site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the site and you must discontinue use immediately.</div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>2. Intellectual Property Rights</div>
            <div style={{...body}}>Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.</div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>3. User Representations</div>
            <div style={{...body}}>By using the site, you represent and warrant that:</div>
            <div style={{paddingTop: 24, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8, width: '100%', boxSizing: 'border-box'}}>
              <div style={{...body}}><span style={bold}>a.</span> All registration information you submit will be true, accurate, current, and complete.</div>
              <div style={{...body}}><span style={bold}>b.</span> You will maintain the accuracy of such information and promptly update such registration information as necessary.</div>
              <div style={{...body}}><span style={bold}>c.</span> You have the legal capacity and you agree to comply with these Terms of Service.</div>
              <div style={{...body}}><span style={bold}>d.</span> You will not use the site for any illegal or unauthorized purpose.</div>
            </div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>4. Modifications and Interruptions</div>
            <div style={{...body}}>We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our site. We also reserve the right to modify or discontinue all or part of the site without notice at any time.</div>

            <div style={{...h2, paddingTop: 40, paddingBottom: 16}}>5. Contact Us</div>
            <div style={{...body}}>In order to resolve a complaint regarding the site or to receive further information regarding use of the site, please contact us at:</div>
            <div style={{paddingTop: 24, paddingBottom: 96, ...body}}>
              <span style={{color: '#1A1A1A', fontWeight: '500'}}>Apt Intel<br />Email: </span>
              <a href="mailto:aptintel.contact@gmail.com" style={{color: '#004182', fontWeight: '500', textDecoration: 'underline'}}>aptintel.contact@gmail.com</a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer (shared component) ── */}
      <Footer />

    </div>
  );
}
