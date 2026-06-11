import whyUsPhoto from "../../assets/images/whyus-photo.png";

const reasons = [
  {
    num: '01',
    title: 'We think beyond code.',
    body: 'We focus on business outcomes, not just technical possibilities. We combine product thinking with practical implementation to ensure the system actually improves performance.',
    divider: true,
  },
  {
    num: '02',
    title: 'We use automation where it matters.',
    body: "We don't chase trends. We apply automation and AI only where they demonstrably reduce friction, speed up delivery, and improve results.",
    divider: true,
  },
  {
    num: '03',
    title: 'We understand operational realities.',
    body: 'We design systems people can actually adopt and use, respecting the practical realities and constraints of your daily workflows.',
    divider: true,
  },
  {
    num: '04',
    title: 'African context, global execution.',
    body: 'We understand the nuances of building tech in emerging markets, but we execute to the highest international benchmarks of quality and scalability.',
    divider: false,
  },
];

export default function WhyUs() {
  return (
    <div id="why-us" className="whyus-section" style={{width: '100%', background: '#FAFAFA', display: 'flex', justifyContent: 'center', boxSizing: 'border-box', paddingBottom: 120}}>

      {/* 1200px inner container — matches Figma absolute coords (left:120 → offset 0 in 1200px container) */}
      <div className="whyus-inner" style={{width: 1200, height: 1234, position: 'relative'}}>

        {/* Left text block — Figma: top:97 */}
        <div className="whyus-left" style={{width: 468, top: 97, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>

          {/* Badge */}
          <div className="whyus-badge" style={{height: 32, paddingLeft: 9, paddingRight: 9, paddingTop: 3, paddingBottom: 3, background: 'rgba(0, 65, 130, 0.05)', borderRadius: 32, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
            <div className="whyus-badge-text" style={{color: '#004182', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15.10px', letterSpacing: 0.26, wordWrap: 'break-word'}}>Why Us</div>
          </div>

          {/* Headline + subtext */}
          <div className="whyus-header-text" style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16}}>
            <div className="whyus-headline-wrap" style={{alignSelf: 'stretch'}}>
              <span className="whyus-headline" style={{color: '#1A1A1A', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>We understand how<br className="whyus-headline-br" /><br className="whyus-headline-br-desktop" /></span>
              <span className="whyus-headline" style={{color: '#004182', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>process design<br className="whyus-headline-br-desktop" /><br className="whyus-headline-br" />affects performance.</span>
            </div>
            <div className="whyus-subtext" style={{width: 454.02, color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>We know how real work happens, and we know how to improve it with the right technology.</div>
          </div>
        </div>

        {/* Photo card — Figma: top:405 */}
        <div className="whyus-photo-card" style={{width: 454.02, height: 340.51, left: 0, top: 405, position: 'absolute', background: 'rgba(255,255,255,0)', boxShadow: '0px 15.13px 30.27px -11.35px rgba(0,0,0,0.10)', overflow: 'hidden', borderRadius: 12.11, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <img src={whyUsPhoto} alt="African professionals in business meeting" style={{width: '100%', height: 340.51, objectFit: 'cover', display: 'block'}} />

            {/* Velocity chip */}
            <div className="whyus-velocity-chip" style={{width: 112.18, maxWidth: 151.34, padding: 12.11, left: 323.68, top: 258.79, position: 'absolute', background: 'rgba(255,255,255,0.95)', boxShadow: '0px 3.03px 4.54px -3.03px rgba(0,0,0,0.10), 0px 7.57px 11.35px -2.27px rgba(0,0,0,0.10)', borderRadius: 10.59, outline: '0.76px rgba(255,255,255,0.40) solid', outlineOffset: '-0.76px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 9.08, display: 'inline-flex'}}>
                <div style={{width: 24.21, height: 24.21, background: 'rgba(0,65,130,0.10)', borderRadius: 25390614, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                  <div style={{width: 9.08, height: 9.08, opacity: 0.50, background: '#004182', borderRadius: 25390614}} />
                </div>
                <div style={{width: 53.16, display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                  <div style={{color: '#1A1A1A', fontSize: 9.08, fontFamily: 'DM Sans', fontWeight: '600', lineHeight: '12.11px', wordWrap: 'break-word'}}>Velocity</div>
                  <div style={{color: 'rgba(26,26,26,0.60)', fontSize: 7.57, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '11.35px', wordWrap: 'break-word'}}>Shipping faster</div>
                </div>
              </div>
              <div style={{alignSelf: 'stretch', paddingTop: 9.08, display: 'flex', flexDirection: 'column'}}>
                <div style={{width: 86.45, height: 4.54, background: '#F3F4F6', borderRadius: 25390614}}>
                  <div style={{width: 73.48, height: 4.54, background: '#00A1FF', borderRadius: 25390614}} />
                </div>
              </div>
            </div>
        </div>

        {/* Right column — desktop */}
        <div className="whyus-right" style={{width: 508.50, left: 615.82, top: 96.86, position: 'absolute', paddingTop: 96.86, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          {reasons.map((item) => (
            <div key={item.num} style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: item.num === '01' ? 0 : 48.43}}>
              <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <div style={{paddingBottom: 18.16, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                  <div style={{width: 36.32, height: 36.32, background: 'rgba(0,65,130,0.05)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#004182', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '21.19px', wordWrap: 'break-word'}}>{item.num}</div>
                  </div>
                </div>
                <div style={{paddingBottom: 12.11, display: 'flex', flexDirection: 'column'}}>
                  <div style={{color: '#1A1A1A', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>{item.title}</div>
                </div>
                <div className="whyus-reason-body" style={{width: 387.43, color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>{item.body}</div>
                {item.divider && (
                  <div style={{paddingTop: 48.43, display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                    <div style={{width: 508.50, height: 0.76, background: '#DDDDDD'}} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile reason cards */}
        <div className="whyus-mobile-cards">
          {reasons.map((item) => (
            <div key={item.num} style={{alignSelf: 'stretch', padding: 24, background: '#FAFAFA', borderRadius: 16, outline: '1px rgba(0,65,130,0.30) solid', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8}}>
              <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24}}>
                {/* Number badge */}
                <div style={{width: 48, height: 48, background: 'rgba(0,65,130,0.05)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#004182', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '28px'}}>{item.num}</div>
                </div>
                {/* Title + body */}
                <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
                  <div style={{textAlign: 'center', color: '#1A1A1A', fontSize: 24, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word'}}>{item.title}</div>
                  <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#676767', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '26.10px', wordWrap: 'break-word'}}>{item.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
