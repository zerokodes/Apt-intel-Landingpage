import wwdBadgeIcon from "../../assets/icons/wwd-badge-icon.svg";
import card1Icon from "../../assets/icons/wwd-card1.svg";
import card2Icon from "../../assets/icons/wwd-card2.svg";
import card3Icon from "../../assets/icons/wwd-card3.svg";
import card4Icon from "../../assets/icons/wwd-card4.svg";

export default function WhatWeDo() {
  return (
    <div className="wwd-section" style={{width: '100%', paddingTop: 100, paddingBottom: 100, background: '#FAFAFA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', boxSizing: 'border-box'}}>
      <div className="wwd-inner" style={{width: 1200, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 80, display: 'flex'}}>

      {/* Header block */}
      <div className="wwd-header" style={{width: 581.15, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>

        {/* Badge */}
        <div className="wwd-badge" style={{height: 32, paddingLeft: 9, paddingRight: 9, paddingTop: 3, paddingBottom: 3, background: 'rgba(0, 65, 130, 0.05)', borderRadius: 32, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
          <img src={wwdBadgeIcon} alt="" style={{width: 12.11, height: 12.11, display: 'block'}} />
          <div className="wwd-badge-text" style={{color: '#004182', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15.13px', letterSpacing: 0.26, wordWrap: 'break-word'}}>What we do</div>
        </div>

        {/* Headline */}
        <div className="wwd-headline-wrap" style={{width: 482}}>
          <span className="wwd-headline-dark" style={{color: '#1A1A1A', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>Systems designed for</span><br className="wwd-headline-br" />
          <span className="wwd-headline-blue" style={{color: '#004182', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}> better performance.</span>
        </div>

        {/* Body */}
        <div className="wwd-body" style={{alignSelf: 'stretch', color: '#3C3C3C', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '24.59px', wordWrap: 'break-word'}}>We help organisations improve internal<br className="wwd-body-br" /> workflows, service delivery, reporting,<br className="wwd-body-br" /> coordination, and operational performance<br className="wwd-body-br" /> by building the right digital systems.</div>
      </div>

      {/* Cards row */}
      <div className="wwd-cards-row" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>

        {/* Card 1 — Process Discovery — #1A1A1A */}
        <div className="wwd-card wwd-card-1" style={{width: 276, height: 338, paddingLeft: 16, paddingRight: 16, paddingTop: 24, paddingBottom: 24, background: '#1A1A1A', overflow: 'hidden', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', boxSizing: 'border-box'}}>
          <div className="wwd-card-inner" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
            {/* Icon */}
            <div className="wwd-card-icon" style={{width: 40, height: 40, background: 'white', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <img src={card1Icon} alt="" style={{width: 19.71, height: 19.71, display: 'block'}} />
            </div>
            {/* Text */}
            <div className="wwd-card-text" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
              <div className="wwd-card-title" style={{color: '#FAFAFA', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '23px', wordWrap: 'break-word'}}>Process Discovery</div>
              <div className="wwd-card-desc" style={{width: 242, color: '#FAFAFA', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>We identify where smarter systems can improve efficiency, reduce friction, and produce measurable gains.</div>
            </div>
            {/* Mini illustration — bar chart */}
            <div style={{alignSelf: 'stretch', height: 74, padding: 9.86, background: 'white', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', borderRadius: 8.21, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 6.57, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{width: 4.93, height: 39.43, opacity: 0.20, background: '#3C3C3C', borderRadius: 27562522}} />
              </div>
              <div style={{width: 4.93, height: 26.29, opacity: 0.50, background: '#3C3C3C', borderRadius: 27562522}} />
              <div style={{width: 4.93, height: 52.57, background: '#1A1A1A', borderRadius: 27562522}} />
              <div style={{alignSelf: 'stretch', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{flex: '1 1 0', height: 52.57, paddingTop: 3.29, paddingBottom: 3.29, paddingLeft: 6.57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                  <div style={{width: 159.36, height: 6.57, background: '#F3F4F6', borderRadius: 27562522}} />
                  <div style={{paddingTop: 6.57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: 106.23, height: 6.57, background: '#F3F4F6', borderRadius: 27562522}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Workflow Design — #3C3C3C */}
        <div className="wwd-card wwd-card-2" style={{width: 276, height: 338, paddingLeft: 16, paddingRight: 16, paddingTop: 24, paddingBottom: 24, background: '#3C3C3C', overflow: 'hidden', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', boxSizing: 'border-box'}}>
          <div className="wwd-card-inner" style={{width: 242, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            {/* Icon */}
            <div className="wwd-card-icon" style={{width: 39.43, height: 39.43, background: 'white', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <img src={card2Icon} alt="" style={{width: 19.71, height: 19.71, display: 'block'}} />
            </div>
            {/* Text */}
            <div className="wwd-card-text" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
              <div className="wwd-card-title" style={{alignSelf: 'stretch', color: 'white', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Workflow Design</div>
              <div className="wwd-card-desc" style={{alignSelf: 'stretch', color: '#FAFAFA', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>We map out clear, intelligent paths that remove manual repetition and speed up execution.</div>
            </div>
            {/* Mini illustration — browser window */}
            <div style={{alignSelf: 'stretch', height: 74, padding: 9.86, background: 'white', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', borderRadius: 8.21, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', paddingBottom: 6.57, borderBottom: '0.82px #F9FAFB solid', justifyContent: 'flex-start', alignItems: 'center', gap: 6.57, display: 'inline-flex'}}>
                <div style={{width: 9.86, height: 9.86, background: '#F63A3A', borderRadius: 27562544}} />
                <div style={{width: 9.86, height: 9.86, background: '#DB9C37', borderRadius: 27562544}} />
                <div style={{width: 9.86, height: 9.86, background: '#098935', borderRadius: 27562544}} />
              </div>
              <div style={{alignSelf: 'stretch', height: 42.71, paddingTop: 9.86, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6.57, display: 'inline-flex'}}>
                <div style={{width: 64, height: 28, background: '#E8E9EA', borderRadius: 3.29}} />
                <div style={{width: 129, height: 28, background: 'rgba(64, 64, 64, 0.32)', borderRadius: 3.29}} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — Automation & AI — #B8B8B8 */}
        <div className="wwd-card wwd-card-3" style={{width: 276, height: 338, paddingLeft: 16, paddingRight: 16, paddingTop: 24, paddingBottom: 24, background: '#B8B8B8', overflow: 'hidden', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', boxSizing: 'border-box'}}>
          <div className="wwd-card-inner" style={{width: 242, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            {/* Icon */}
            <div className="wwd-card-icon" style={{width: 39.43, height: 39.43, background: 'white', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <img src={card3Icon} alt="" style={{width: 19.71, height: 19.71, display: 'block'}} />
            </div>
            {/* Text */}
            <div className="wwd-card-text" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
              <div className="wwd-card-title" style={{alignSelf: 'stretch', color: '#1A1A1A', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Automation & AI</div>
              <div className="wwd-card-desc" style={{alignSelf: 'stretch', color: '#272727', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>We build robust automation layers and AI-enabled workflows tailored perfectly to your operational needs.</div>
            </div>
            {/* Mini illustration — code block */}
            <div style={{alignSelf: 'stretch', height: 74, padding: 9.86, background: '#1A1A1A', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', overflow: 'hidden', borderRadius: 8.21, outline: '0.82px rgba(255, 255, 255, 0.10) solid', outlineOffset: '-0.82px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', opacity: 0.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#00A1FF', fontSize: 9.86, fontFamily: 'Consolas', fontWeight: '400', lineHeight: '13.14px', wordWrap: 'break-word'}}>{'const optimize = () => {'}</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingLeft: 13.14, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: 'white', fontSize: 9.86, fontFamily: 'Consolas', fontWeight: '400', lineHeight: '13.14px', wordWrap: 'break-word'}}>{'automation: \'active\','}</div>
              </div>
              <div style={{alignSelf: 'stretch', paddingLeft: 13.14, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: 'white', fontSize: 9.86, fontFamily: 'Consolas', fontWeight: '400', lineHeight: '13.14px', wordWrap: 'break-word'}}>{"performance: '+34%',"}</div>
              </div>
              <div style={{alignSelf: 'stretch', opacity: 0.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{color: '#00A1FF', fontSize: 9.86, fontFamily: 'Consolas', fontWeight: '400', lineHeight: '13.14px', wordWrap: 'break-word'}}>{'}'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 — Iteration & Support — #EDEDED */}
        <div className="wwd-card wwd-card-4" style={{width: 276, height: 338, paddingLeft: 16, paddingRight: 16, paddingTop: 24, paddingBottom: 24, background: '#EDEDED', overflow: 'hidden', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', boxSizing: 'border-box'}}>
          <div className="wwd-card-inner" style={{width: 243, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
            {/* Icon */}
            <div className="wwd-card-icon" style={{width: 39.43, height: 39.43, background: 'white', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <img src={card4Icon} alt="" style={{width: 19.71, height: 19.71, display: 'block'}} />
            </div>
            {/* Text */}
            <div className="wwd-card-text" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
              <div className="wwd-card-title" style={{color: '#1A1A1A', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Iteration & Support</div>
              <div className="wwd-card-desc" style={{width: 221.79, color: '#272727', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>We stay on to refine, support, and evolve the systems as your business performance grows.</div>
            </div>
            {/* Mini illustration — refresh widget */}
            <div style={{alignSelf: 'stretch', height: 74, padding: 13.14, background: 'white', boxShadow: '0px 0.82px 1.64px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.46px rgba(0,0,0,0.10)', borderRadius: 8.21, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{width: 126.91, height: 6.57, background: '#B6B6B7', borderRadius: 27562544}} />
                <div style={{paddingTop: 6.57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{width: 84.61, height: 6.57, background: '#DEDFE0', borderRadius: 27562544}} />
                </div>
              </div>
              <div style={{width: 26.29, height: 26.29, background: '#F9FAFB', borderRadius: 27562544, justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
                <img src={card4Icon} alt="" style={{width: 11.50, height: 11.50, display: 'block'}} />
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
