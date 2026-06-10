import icon1 from "../../assets/icons/process-icon1.svg";
import icon2 from "../../assets/icons/process-icon2.svg";
import icon3 from "../../assets/icons/process-icon3.svg";
import icon4 from "../../assets/icons/process-icon4.svg";
import icon5 from "../../assets/icons/process-icon5.svg";

const steps = [
  { num: '01', icon: icon1, title: 'Assess',   body: 'We assess how work currently happens across your teams.' },
  { num: '02', icon: icon2, title: 'Identify',  body: 'We identify opportunities for improvement and automation.' },
  { num: '03', icon: icon3, title: 'Design',    body: 'We design a smarter flow or system tailored to your goals.' },
  { num: '04', icon: icon4, title: 'Build',     body: 'We build the software and automation layer to execute it.' },
  { num: '05', icon: icon5, title: 'Support',   body: 'We support adoption, iteration, and continuous growth.' },
];

export default function Process() {
  return (
    <div id="process" className="process-section" style={{width: '100%', position: 'relative', background: '#0B1120', overflow: 'hidden', paddingTop: 96, paddingBottom: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box'}}>

      {/* Glow blob left */}
      <div style={{width: 431.99, height: 206.30, left: -144, top: 137.53, position: 'absolute', background: 'rgba(0, 65, 130, 0.10)', borderRadius: 25390614, filter: 'blur(75.67px)'}} />

      {/* Glow blob right */}
      <div style={{width: 431.99, height: 206.30, right: -144, top: 343.83, position: 'absolute', background: 'rgba(0, 161, 255, 0.10)', borderRadius: 25390614, filter: 'blur(75.67px)'}} />

      {/* 1200px inner container */}
      <div className="process-inner" style={{width: 1200, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 80}}>

        {/* Header block */}
        <div className="process-header" style={{maxWidth: 508.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', gap: 0}}>

          {/* Badge */}
          <div className="process-badge" style={{height: 32, paddingLeft: 9, paddingRight: 9, paddingTop: 3, paddingBottom: 3, background: 'rgba(0, 161, 255, 0.10)', borderRadius: 32, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'inline-flex', marginBottom: 18}}>
            <div className="process-badge-text" style={{textAlign: 'center', color: '#0091E5', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15.13px', letterSpacing: 0.26, wordWrap: 'break-word'}}>From process to product</div>
          </div>

          {/* Headline */}
          <div className="process-headline" style={{width: 508.50, textAlign: 'center', color: '#FAFAFA', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>How we turn process<br className="process-headline-br" /><span className="process-headline-indent">into performance</span></div>

          {/* Subtext */}
          <div className="process-subtext" style={{width: 508.50, paddingTop: 18.16, textAlign: 'center', color: '#C5C5C5', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>We move from understanding how work<br className="process-subtext-br" /><span className="process-subtext-l2"> happens today to building smarter</span><br className="process-subtext-br" /><span className="process-subtext-l3"> systems for tomorrow.</span></div>
        </div>

        {/* ── Desktop: horizontal steps ── */}
        <div className="process-steps-wrap" style={{width: '100%', position: 'relative'}}>
          <div className="process-connector" style={{width: 788, height: 1, position: 'absolute', left: 206, top: 22, background: 'linear-gradient(to right, rgba(14, 165, 233, 0.40), rgba(12, 74, 110, 0.40), rgba(14, 165, 233, 0.40))', zIndex: 0}} />
          <div className="process-steps-row" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 32}}>
            {steps.map((step) => (
              <div key={step.num} className="process-step" style={{width: 176, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', position: 'relative', zIndex: 1}}>
                <div style={{paddingBottom: 24.21, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{width: 42.38, height: 42.38, background: '#181E2D', boxShadow: '0px 0.76px 1.51px -0.76px rgba(0,0,0,0.10), 0px 0.76px 2.27px rgba(0,0,0,0.10)', borderRadius: 10.59, outline: '1px rgba(0, 65, 130, 0.70) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={step.icon} alt="" style={{width: 18.16, height: 18.16, display: 'block'}} />
                  </div>
                </div>
                <div className="process-card" style={{width: 176, padding: 16, background: '#181E2D', boxShadow: '0px 7.57px 22.70px -11.35px rgba(0,0,0,0.05)', overflow: 'hidden', borderRadius: 12.11, outline: '1px rgba(255, 255, 255, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                  <div style={{width: 128, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'rgba(0, 161, 255, 0.90)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '16px', letterSpacing: 0.26}}>{step.num}</div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                      <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#FAFAFA', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px'}}>{step.title}</div>
                      <div style={{width: 144, textAlign: 'center', color: '#D6D3D1', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '24px'}}>{step.body}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline (Figma absolute layout) ── */}
        <div className="process-mobile-timeline">
          {/* Vertical center line */}
          <div style={{width: 2, height: 1300, left: '50%', transform: 'translateX(-50%)', top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0,161,255,0.20) 0%, rgba(0,65,130,0.40) 50%, rgba(0,161,255,0.20) 100%)'}} />

          {[
            { top: 0,    step: steps[0] },
            { top: 295,  step: steps[1] },
            { top: 589,  step: steps[2] },
            { top: 884,  step: steps[3] },
            { top: 1178, step: steps[4] },
          ].map(({ top, step }) => (
            <div key={step.num} style={{width: '100%', left: 0, top, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {/* Icon */}
              <div style={{paddingBottom: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1}}>
                <div style={{width: 48, height: 48, background: '#181E2D', boxShadow: '0px 1px 2px -1px rgba(0,0,0,0.10), 0px 1px 3px rgba(0,0,0,0.10)', borderRadius: 14, outline: step.num === '05' ? '1px rgba(255,255,255,0.10) solid' : '1px rgba(0,65,130,0.70) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                  <img src={step.icon} alt="" style={{width: 20, height: 20, display: 'block'}} />
                </div>
              </div>
              {/* Card */}
              <div style={{width: '100%', padding: 24, background: '#181E2D', boxShadow: '0px 1px 2px -1px rgba(0,0,0,0.10), 0px 1px 3px rgba(0,0,0,0.10)', overflow: 'hidden', borderRadius: 16, outline: '1px rgba(255,255,255,0.10) solid', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
                <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'rgba(0,161,255,0.90)', fontSize: step.num === '01' ? 18 : 16, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '20px', letterSpacing: 0.35}}>{step.num}</div>
                <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                  <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#FAFAFA', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '28px'}}>{step.title}</div>
                  <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#C5C5C5', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '26px'}}>{step.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
