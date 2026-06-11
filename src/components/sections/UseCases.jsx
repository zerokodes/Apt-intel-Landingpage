import icon1 from "../../assets/icons/usecase-icon1.svg";
import icon2 from "../../assets/icons/usecase-icon2.svg";
import icon3 from "../../assets/icons/usecase-icon3.svg";
import icon4 from "../../assets/icons/usecase-icon4.svg";
import icon5 from "../../assets/icons/usecase-icon5.svg";
import icon6 from "../../assets/icons/usecase-icon6.svg";


function Chip({ icon, label, isCircle }) {
  return (
    <div className="usecase-chip" style={{paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'rgba(255,255,255,0.05)', borderRadius: 12, outline: '0.76px rgba(255,255,255,0.10) solid', outlineOffset: '-0.76px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 8}}>
      <div style={{width: 32, height: 32, background: 'rgba(255,255,255,0.05)', borderRadius: 25390614, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
        <img src={icon} alt="" style={{width: isCircle ? 32 : 14, height: isCircle ? 32 : 14, display: 'block'}} />
      </div>
      <div style={{color: 'rgba(255,255,255,0.90)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: '24px', whiteSpace: 'nowrap', wordWrap: 'break-word'}}>{label}</div>
    </div>
  );
}

export default function UseCases() {
  return (
    <div id="use-cases" className="usecases-section" style={{width: '100%', position: 'relative', background: '#0B1120', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 96, paddingBottom: 120, boxSizing: 'border-box'}}>

      {/* Glow blob */}
      <div style={{width: 720, height: 336.64, position: 'absolute', right: -144, top: -67.32, background: 'rgba(0,161,255,0.20)', borderRadius: 25390614, filter: 'blur(90.80px)', opacity: 0.20}} />

      {/* 1200px inner container */}
      <div className="usecases-inner" style={{width: 1200, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 64, position: 'relative'}}>

        {/* Header */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
          <div style={{height: 32, paddingLeft: 9, paddingRight: 9, paddingTop: 3, paddingBottom: 3, background: 'rgba(0,161,255,0.10)', borderRadius: 32, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{color: '#00A1FF', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 0.26}}>Where we fit best</div>
          </div>
          <div className="usecases-headline" style={{width: 508.50, textAlign: 'center', color: '#FAFAFA', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>Where smarter<br className="usecases-headline-br" /><br className="usecases-headline-br-desktop" />systems matter most</div>
          <div className="usecases-subtext" style={{width: 508.50, textAlign: 'center', color: '#D6D3D1', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Different industries can improve outcomes<br className="usecases-subtext-br" />through better systems, automation, and<br className="usecases-subtext-br" />AI. We partner with operational-heavy<br className="usecases-subtext-br" />sectors ready to improve how they run.</div>
        </div>

        {/* Chips */}
        <div className="usecases-chips" style={{width: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>

          {/* Row 1 */}
          <div className="usecases-chip-row" style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 16}}>
            <Chip icon={icon1} label="Financial Services" />
            <Chip icon={icon2} label="Healthcare &amp; Logistics" />
          </div>

          {/* Row 2 */}
          <div className="usecases-chip-row" style={{alignSelf: 'stretch', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', gap: 16}}>
            <Chip icon={icon3} label="Government &amp; Public Sector" isCircle />
            <Chip icon={icon4} label="Insurance &amp; Risk" />
            <Chip icon={icon5} label="Supply Chain" />
          </div>

          {/* Row 3 */}
          <div className="usecases-chip-row" style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
            <Chip icon={icon6} label="Energy &amp; Utility" />
          </div>

        </div>
      </div>
    </div>
  );
}
