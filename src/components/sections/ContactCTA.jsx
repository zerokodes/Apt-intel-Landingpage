import contactIcon from "../../assets/icons/contact-icon.svg";

export default function ContactCTA() {
  return (
    <div id="contact-cta" className="contactcta-section" style={{width: '100%', paddingLeft: 36.32, paddingRight: 36.32, paddingTop: 96.86, paddingBottom: 96.86, background: '#F3F7FB', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box'}}>

      {/* Card */}
      <div className="contactcta-card" style={{width: 908.04, height: 526.66, position: 'relative', background: 'linear-gradient(135deg, #001730 0%, #001A37 7.14%, #001E3D 14.29%, #002144 21.43%, #00254B 28.57%, #002952 35.71%, #002C59 42.86%, #003060 50%, #002C59 57.14%, #002952 64.29%, #00254B 71.43%, #002144 78.57%, #001E3D 85.71%, #001A37 92.86%, #001730 100%)', boxShadow: '0px 30px 60px -15px rgba(0, 65, 130, 0.50)', overflow: 'hidden', borderRadius: 16, border: '1.108px solid rgba(255, 255, 255, 0.10)', boxSizing: 'border-box'}}>


        {/* Content */}
        <div className="contactcta-content" style={{width: 906.53, height: 525.15, padding: 72.64, left: 0.76, top: 0.76, position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', boxSizing: 'border-box'}}>

          {/* Email icon */}
          <div style={{paddingBottom: 24.21, display: 'flex', flexDirection: 'column'}}>
            <div style={{width: 48.43, height: 48.43, background: 'rgba(255, 255, 255, 0.10)', boxShadow: '0px 3.03px 4.54px -3.03px rgba(0,0,0,0.10), 0px 7.57px 11.35px -2.27px rgba(0,0,0,0.10)', borderRadius: 12.11, outline: '0.76px rgba(255, 255, 255, 0.20) solid', outlineOffset: '-0.76px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src={contactIcon} alt="" style={{width: 21.19, height: 21.19}} />
            </div>
          </div>

          {/* Headline */}
          <div style={{paddingBottom: 18.16, display: 'flex', flexDirection: 'column'}}>
            <div className="contactcta-headline" style={{width: 581.15, textAlign: 'center', color: '#FAFAFA', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>Ready to improve how your business runs?</div>
          </div>

          {/* Subtext */}
          <div style={{paddingBottom: 36.32, display: 'flex', flexDirection: 'column'}}>
            <div className="contactcta-subtext" style={{width: 508.50, textAlign: 'center', color: '#FAFAFA', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '300', lineHeight: '22.40px', wordWrap: 'break-word'}}>If your business is ready to improve performance, streamline work, and unlock more through smarter systems, Apt Intel can help.</div>
          </div>

          {/* CTA */}
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32}}>

            {/* Email button */}
            <a href="mailto:aptintel.contact@gmail.com" className="btn-cta-email" style={{paddingLeft: 24.21, paddingRight: 24.21, paddingTop: 12.11, paddingBottom: 12.11, background: '#FAFAFA', boxShadow: '0px 6.05px 22.70px rgba(255, 255, 255, 0.20)', borderRadius: 10.59, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 6.05, textDecoration: 'none'}}>
              <div style={{color: '#004182', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '22.40px', wordWrap: 'break-word'}}>aptintel.contact@gmail.com</div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#004182" strokeWidth="1.26" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Response note */}
            <div style={{display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', gap: 6}}>
              <div style={{width: 8, height: 8, background: '#004182', borderRadius: 8, flexShrink: 0}} />
              <div style={{textAlign: 'center', color: 'rgba(250, 250, 250, 0.70)', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word'}}>Typically responds within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
