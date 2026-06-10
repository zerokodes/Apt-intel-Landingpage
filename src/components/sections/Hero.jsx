import dashboardImg from "../../assets/images/dashboard.png";
import pulseIcon from "../../assets/icons/pulse-icon.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";

export default function Hero() {
  return (
    <div className="hero-section" style={{width: '100%', height: 740, position: 'relative', background: '#F1F5F9', overflow: 'hidden'}}>

      {/* Glow blobs */}
      <div style={{width: 720, height: 357.16, left: -144, top: -71.43, position: 'absolute', background: 'rgba(0, 65, 130, 0.05)', borderRadius: 25390614, filter: 'blur(90.80px)'}} />
      <div style={{width: 575.99, height: 285.73, left: 1010.01, top: 500.03, position: 'absolute', background: 'rgba(0, 161, 255, 0.05)', borderRadius: 25390614, filter: 'blur(90.80px)'}} />

      {/* Content row */}
      <div className="hero-inner" style={{width: 1200, paddingLeft: 0, top: 126, left: '50%', transform: 'translateX(-50%)', position: 'absolute', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>

        {/* LEFT */}
        <div className="hero-left" style={{width: 584, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>

          <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>

            {/* Badge */}
            <div className="hero-badge-wrap">
              <div style={{height: 32, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: 'white', boxShadow: '0px 0.76px 1.51px -0.76px rgba(0,0,0,0.10), 0px 0.76px 2.27px rgba(0,0,0,0.10)', borderRadius: 32, outline: '0.76px #E5E7EB solid', outlineOffset: '-0.76px', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <div className="hero-badge-dot" style={{width: 8, height: 8, background: '#004182', borderRadius: 8}} />
                <div style={{color: '#272727', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '15.13px', wordWrap: 'break-word'}}>Apt Intel: Engineering the Future</div>
              </div>
            </div>

            {/* Headline */}
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
              <div className="hero-headline-line1" style={{width: 514.56, color: '#1A1A1A', fontSize: 64, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '60.38px', wordWrap: 'break-word'}}>Build smarter<br className="hero-headline-br" /> systems for <span className="hero-headline-better">better </span></div>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div className="hero-headline-line2" style={{alignSelf: 'stretch', color: '#004182', fontSize: 64, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '60.38px', wordWrap: 'break-word'}}><span className="hero-headline-better-desktop">better </span>performance.</div>
                <div className="hero-underline w-64 h-2 relative bg-sky-500/20 rounded-full" />
              </div>
            </div>

            {/* Body */}
            <div className="hero-body" style={{width: 454.02, color: '#272727', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '300', lineHeight: '29.51px', wordWrap: 'break-word'}}>We help businesses improve the way work<br className="hero-body-br" /> gets done. By designing intelligent<br className="hero-body-br" /> software, automation flows, and AI-<br className="hero-body-br" />enabled systems, we turn everyday<br className="hero-body-br" /> workflows into a competitive advantage.</div>
          </div>

          {/* CTA buttons */}
          <div className="hero-cta-row" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
            <a href="#contact-cta" className="hero-btn btn-primary" style={{width: 276, height: 64, paddingLeft: 24.21, paddingRight: 24.21, paddingTop: 12.11, paddingBottom: 12.11, background: '#004182', boxShadow: '0px 6.05px 22.70px rgba(0,65,130,0.25)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 6.05, display: 'flex', cursor: 'pointer', boxSizing: 'border-box', textDecoration: 'none'}}>
              <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '21.19px', wordWrap: 'break-word'}}>Start a conversation</div>
            </a>
            <a href="#process" className="hero-btn btn-secondary" style={{width: 276, height: 64, paddingLeft: 16, paddingRight: 16, paddingTop: 12.11, paddingBottom: 12.11, background: 'white', boxShadow: '0px 0.76px 1.51px -0.76px rgba(0,0,0,0.10), 0px 0.76px 2.27px rgba(0,0,0,0.10)', borderRadius: 12, outline: '0.76px #E5E7EB solid', outlineOffset: '-0.76px', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer', boxSizing: 'border-box', textDecoration: 'none'}}>
              <div style={{textAlign: 'center', color: '#1A1A1A', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '21.19px', wordWrap: 'break-word'}}>See how we work</div>
              <img src={chevronRight} alt="" style={{width: 24, height: 24, flexShrink: 0, display: 'block'}} />
            </a>
          </div>
        </div>

        {/* RIGHT MOCKUP — hidden on mobile via .hero-mockup-wrap class */}
        <div className="hero-mockup hero-mockup-wrap" style={{width: 513.60, height: 460.57, position: 'relative', marginTop: 25}}>
          <img src={dashboardImg} alt="Dashboard" className="hero-dashboard" style={{width: 513.60, height: 321, left: 0, top: 33, position: 'absolute', borderRadius: 10.70, display: 'block'}} />
          <div className="hero-card-top" style={{width: 200.47, padding: 11.99, left: 155.80, top: 3.08, position: 'absolute', transform: 'rotate(-1deg)', transformOrigin: 'top left', background: 'white', boxShadow: '0px 22.49px 44.97px -11.24px rgba(0,0,0,0.15)', borderRadius: 10.49, outline: '0.75px rgba(255,255,255,0.50) solid', outlineOffset: '-0.75px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', boxSizing: 'border-box'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8.99, display: 'inline-flex'}}>
              <div style={{width: 23.85, height: 24.49, flexShrink: 0, background: 'linear-gradient(135deg, rgba(0,65,130,0.10) 0%, rgba(0,161,255,0.10) 100%)', borderRadius: 7.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: 8.94, height: 9.18, opacity: 0.50, background: '#00A1FF', borderRadius: 25150510}} />
              </div>
              <div style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'inline-flex'}}>
                <div style={{color: '#1A1A1A', fontSize: 8.99, fontFamily: 'DM Sans', fontWeight: '600', lineHeight: '11.99px'}}>AI Routing Active</div>
                <div style={{color: 'rgba(26,26,26,0.60)', fontSize: 7.50, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '11.24px'}}>Optimising 24 workflows</div>
              </div>
            </div>
          </div>
          <div className="hero-card-bottom" style={{width: 243.80, padding: 14.99, left: 128.80, top: 320.75, position: 'absolute', transform: 'rotate(-1deg)', transformOrigin: 'top left', background: 'white', boxShadow: '0px 22.49px 44.97px -11.24px rgba(0,0,0,0.15)', borderRadius: 10.49, outline: '0.75px white solid', outlineOffset: '-0.75px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', boxSizing: 'border-box'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 11.99, display: 'inline-flex'}}>
              <div style={{width: 29.81, height: 30.61, flexShrink: 0, background: 'linear-gradient(135deg, #004182 0%, #00A1FF 100%)', borderRadius: 7.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <img src={pulseIcon} alt="" style={{width: 14.90, height: 15.31, display: 'block'}} />
              </div>
              <div style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'inline-flex'}}>
                <div style={{color: '#1A1A1A', fontSize: 10.49, fontFamily: 'DM Sans', fontWeight: '600', lineHeight: '14.99px'}}>System Performance</div>
                <div style={{color: '#00A1FF', fontSize: 8.99, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '11.99px'}}>+34% Efficiency Gain</div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingTop: 14.99, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8.99, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#6A7282', fontSize: 8.99, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '11.99px'}}>Processing Speed</div>
                <div style={{color: '#1A1A1A', fontSize: 8.99, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '11.99px'}}>98.5%</div>
              </div>
              <div style={{alignSelf: 'stretch', height: 9.33, background: '#F3F4F6', borderRadius: 25150510, overflow: 'hidden'}}>
                <div style={{width: '98.5%', height: '100%', background: '#004182', borderRadius: 25150510}} />
              </div>
              <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#6A7282', fontSize: 8.99, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '11.99px'}}>Task Automation</div>
                <div style={{color: '#1A1A1A', fontSize: 8.99, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '11.99px'}}>85.0%</div>
              </div>
              <div style={{alignSelf: 'stretch', height: 9.33, background: '#F3F4F6', borderRadius: 25150510, overflow: 'hidden'}}>
                <div style={{width: '85%', height: '100%', background: '#00A1FF', borderRadius: 25150510}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
