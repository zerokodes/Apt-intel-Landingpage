import icon0 from "../../assets/icons/solution-icon0.svg";
import icon1 from "../../assets/icons/solution-icon1.svg";
import icon2 from "../../assets/icons/solution-icon2.svg";
import icon3 from "../../assets/icons/solution-icon3.svg";
import icon4 from "../../assets/icons/solution-icon4.svg";
import icon5 from "../../assets/icons/solution-icon5.svg";

export default function Solutions() {
  return (
    <div id="services" className="solutions-section" style={{width: '100%', background: '#F3F7FB', display: 'flex', justifyContent: 'center', boxSizing: 'border-box', paddingBottom: 120}}>
      <div className="solutions-inner" style={{width: 1200, position: 'relative'}}>

        {/* Header block */}
        <div className="solutions-header" style={{width: 508.50, marginTop: 96.63, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
          <div style={{height: 32, paddingLeft: 9, paddingRight: 9, paddingTop: 3, paddingBottom: 3, background: 'rgba(0, 65, 130, 0.05)', borderRadius: 32, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
            <div style={{color: '#004182', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15.13px', letterSpacing: 0.26, wordWrap: 'break-word'}}>What we build</div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 16}}>
            <div className="solutions-headline" style={{alignSelf: 'stretch', color: '#1A1A1A', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>Solutions we deliver</div>
            <div className="solutions-subtext" style={{alignSelf: 'stretch', color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>We build systems that help organisations<br className="solutions-subtext-br" />work smarter, respond faster, and operate<br className="solutions-subtext-br" />with absolute clarity.</div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="solutions-grid" style={{width: 1200.32, marginTop: 32, display: 'flex', flexDirection: 'column', gap: 32}}>

          {/* Row 1 */}
          <div className="solutions-row" style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32}}>

            {/* Card 1 — Workflow Automation (dark blue) */}
            <div className="solution-card-dark" style={{flex: '1 1 0', height: 325.37, padding: 26.16, background: 'linear-gradient(135deg, #004182 0%, #003F7D 10%, #003C79 20%, #003A74 30%, #00386F 40%, #00356B 50%, #003366 60%, #003161 70%, #002E5D 80%, #002C58 90%, #002A54 100%)', borderRadius: 12, outline: '0.82px rgba(229, 231, 235, 0.50) solid', outlineOffset: '-0.82px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box'}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <div style={{paddingBottom: 19.62, display: 'flex', flexDirection: 'column'}}>
                  <div style={{width: 39.24, height: 39.24, background: 'rgba(255,255,255,0.10)', borderRadius: 11.45, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={icon0} alt="" style={{width: 19.62, height: 19.62}} />
                  </div>
                </div>
                <div style={{paddingBottom: 9.81}}>
                  <div style={{color: 'white', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Workflow Automation</div>
                </div>
                <div style={{color: 'rgba(255,255,255,0.80)', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>Systems that eliminate manual data entry and repetitive tasks.</div>
              </div>
              <div style={{width: '100%', paddingTop: 32.70}}>
                <div style={{width: '100%', height: 104.64, padding: 13.08, position: 'relative', background: 'rgba(255,255,255,0.05)', overflow: 'hidden', borderRadius: 11.45, outline: '0.82px rgba(255,255,255,0.10) solid', outlineOffset: '-0.82px', display: 'flex', flexDirection: 'column', gap: 9.81, boxSizing: 'border-box'}}>
                  <div style={{width: 99.19, height: 6.54, background: 'rgba(255,255,255,0.20)', borderRadius: 27430994}} />
                  <div style={{width: 148.79, height: 6.54, background: 'rgba(255,255,255,0.20)', borderRadius: 27430994}} />
                  <div style={{width: 78.48, height: 78.48, left: 'calc(100% - 60px)', top: 45.93, position: 'absolute', background: 'rgba(0,161,255,0.30)', borderRadius: 27430994, filter: 'blur(32.70px)'}} />
                </div>
              </div>
            </div>

            {/* Card 2 — Client Portals (white) */}
            <div className="solution-card-light" style={{flex: '1 1 0', height: 324.23, padding: 26.07, background: 'white', borderRadius: 12, outline: '0.81px rgba(0, 65, 130, 0.20) solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{paddingBottom: 19.55, display: 'flex', flexDirection: 'column'}}>
                  <div style={{width: 39.10, height: 39.10, background: '#F0F4F8', borderRadius: 11.41, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={icon1} alt="" style={{width: 19.55, height: 19.55}} />
                  </div>
                </div>
                <div style={{paddingBottom: 9.78}}>
                  <div style={{color: '#1A1A1A', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Client Portals</div>
                </div>
                <div style={{color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>Secure, modern interfaces for your customers to self-serve.</div>
              </div>
              <div style={{width: '100%', paddingTop: 32.59}}>
                <div style={{width: '100%', height: 104.28, padding: 13.03, position: 'relative', background: '#F0F8FF', overflow: 'hidden', borderRadius: 11.41, outline: '0.81px #F3F4F6 solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', gap: 9.78, boxSizing: 'border-box'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6.52, display: 'inline-flex'}}>
                    <div style={{width: 26.07, height: 26.07, background: 'rgba(0,65,130,0.40)', borderRadius: 27335268, flexShrink: 0}} />
                    <div style={{flex: '1 1 0', height: 26.07, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4.89}}>
                      <div style={{width: 87.98, height: 4.89, background: '#226DA3', borderRadius: 27335268}} />
                      <div style={{width: 65.99, height: 4.89, background: '#CED6E5', borderRadius: 27335268}} />
                    </div>
                  </div>
                  <div style={{flex: '1 1 0', paddingTop: 6.52}}>
                    <div style={{padding: 6.52, background: 'white', boxShadow: '0px 0.81px 1.63px -0.81px rgba(0,0,0,0.10), 0px 0.81px 2.44px rgba(0,0,0,0.10)', borderRadius: 8.15, outline: '0.81px #F3F4F6 solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', gap: 6.52}}>
                      <div style={{height: 6.52, background: '#F9FAFB', borderRadius: 27335268}} />
                      <div style={{width: '70%', height: 6.52, background: '#F9FAFB', borderRadius: 27335268}} />
                    </div>
                  </div>
                  <div style={{width: 78.21, height: 78.21, right: -20, top: 45.77, position: 'absolute', background: 'rgba(0,65,130,0.05)', borderRadius: 27335268, filter: 'blur(32.59px)'}} />
                </div>
              </div>
            </div>

            {/* Card 3 — AI-Assisted Tools (off-white) */}
            <div className="solution-card-light" style={{flex: '1 1 0', height: 325.09, padding: 26.14, background: '#FAFAFA', borderRadius: 12, outline: '0.82px rgba(0, 65, 130, 0.20) solid', outlineOffset: '-0.82px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{paddingBottom: 19.60, display: 'flex', flexDirection: 'column'}}>
                  <div style={{width: 39.21, height: 39.21, background: 'white', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', borderRadius: 11.44, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={icon2} alt="" style={{width: 19.60, height: 19.60}} />
                  </div>
                </div>
                <div style={{paddingBottom: 9.80}}>
                  <div style={{color: '#1A1A1A', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>AI-Assisted Tools</div>
                </div>
                <div style={{color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>Intelligent systems that augment reporting and operational decisions.</div>
              </div>
              <div style={{width: '100%', paddingTop: 32.67}}>
                <div style={{width: '100%', height: 104.55, padding: 13.07, position: 'relative', background: 'white', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', overflow: 'hidden', borderRadius: 11.44, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'}}>
                  <div style={{width: 39.21, height: 39.21, background: '#F9FAFB', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', borderRadius: 8.17, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
                    <div style={{width: 13.07, height: 13.07, background: 'rgba(0,161,255,0.50)', borderRadius: 4.90}} />
                  </div>
                  <div style={{flex: '1 1 0', height: 1.63, margin: '0 13px', position: 'relative', background: 'linear-gradient(90deg, #F3F4F6 0%, rgba(0,161,255,0.30) 50%, #F3F4F6 100%)'}}>
                    <div style={{width: 6.53, height: 6.53, position: 'absolute', left: '50%', top: -2.45, transform: 'translateX(-50%)', background: '#00A1FF', boxShadow: '0px 0px 8.17px rgba(0,161,255,0.50)', borderRadius: 27407584}} />
                  </div>
                  <div style={{width: 39.21, height: 39.21, background: '#F9FAFB', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', borderRadius: 8.17, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexShrink: 0}}>
                    <div style={{width: 13.07, height: 13.07, background: 'rgba(0,65,130,0.60)', borderRadius: 4.90}} />
                  </div>
                  <div style={{width: 78.41, height: 78.41, position: 'absolute', left: '45%', top: -19.76, background: 'rgba(0,161,255,0.05)', borderRadius: 27407584, filter: 'blur(32.67px)'}} />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="solutions-row" style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 32}}>

            {/* Card 4 — Process Intelligence (white) */}
            <div className="solution-card-light" style={{flex: '1 1 0', height: 325.09, padding: 26.14, background: 'white', borderRadius: 12, outline: '0.82px rgba(0, 65, 130, 0.20) solid', outlineOffset: '-0.82px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{paddingBottom: 19.60, display: 'flex', flexDirection: 'column'}}>
                  <div style={{width: 39.21, height: 39.21, background: '#F3F9FF', borderRadius: 11.44, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={icon3} alt="" style={{width: 19.60, height: 19.60}} />
                  </div>
                </div>
                <div style={{paddingBottom: 9.80}}>
                  <div style={{color: '#1A1A1A', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Process Intelligence</div>
                </div>
                <div style={{color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>Dashboards and systems for operational visibility and management.</div>
              </div>
              <div style={{width: '100%', paddingTop: 32.67}}>
                <div style={{width: '100%', height: 104.55, padding: 13.07, position: 'relative', background: '#F4F4F4', overflow: 'hidden', borderRadius: 11.44, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', display: 'flex', gap: 9.80, boxSizing: 'border-box'}}>
                  <div style={{width: 74.33, height: 76.78, padding: 6.53, background: 'white', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', borderRadius: 8.17, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', display: 'flex', flexDirection: 'column', gap: 6.53, flexShrink: 0, boxSizing: 'border-box'}}>
                    <div style={{paddingBottom: 3.27}}>
                      <div style={{width: 59.63, height: 6.53, background: 'rgba(0,65,130,0.20)', borderRadius: 27407584}} />
                    </div>
                    <div style={{width: 39.74, height: 4.90, background: '#F3F4F6', borderRadius: 27407584}} />
                    <div style={{width: 59.63, height: 4.90, background: '#F3F4F6', borderRadius: 27407584}} />
                  </div>
                  <div style={{flex: '1 1 0', height: 76.78, display: 'flex', flexDirection: 'column', gap: 9.80}}>
                    <div style={{display: 'flex', gap: 6.53}}>
                      <div style={{flex: '1 1 0', padding: 6.53, background: 'white', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', borderRadius: 8.17, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                        <div style={{width: 44.31, height: 4.90, background: '#F3F4F6', borderRadius: 27407584}} />
                        <div style={{paddingTop: 6.53}}>
                          <div style={{width: '100%', height: 9.80, background: 'rgba(0,65,130,0.80)', borderRadius: 27407584}} />
                        </div>
                      </div>
                      <div style={{flex: '1 1 0', padding: 6.53, background: 'white', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', borderRadius: 8.17, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                        <div style={{width: 44.31, height: 4.90, background: '#F3F4F6', borderRadius: 27407584}} />
                        <div style={{paddingTop: 6.53}}>
                          <div style={{width: '100%', height: 9.80, background: 'rgba(0,161,255,0.80)', borderRadius: 27407584}} />
                        </div>
                      </div>
                    </div>
                    <div style={{flex: '1 1 0', padding: 6.53, background: 'white', boxShadow: '0px 0.82px 1.63px -0.82px rgba(0,0,0,0.10), 0px 0.82px 2.45px rgba(0,0,0,0.10)', borderRadius: 8.17, outline: '0.82px #F3F4F6 solid', outlineOffset: '-0.82px', display: 'flex', alignItems: 'flex-end', gap: 3.27, boxSizing: 'border-box'}}>
                      <div style={{flex: '1 1 0', height: 5.55, background: '#F3F4F6', borderTopLeftRadius: 4.90, borderTopRightRadius: 4.90}} />
                      <div style={{flex: '1 1 0', height: 9.71, background: '#F3F4F6', borderTopLeftRadius: 4.90, borderTopRightRadius: 4.90}} />
                      <div style={{flex: '1 1 0', height: 12.49, background: 'rgba(0,65,130,0.60)', borderTopLeftRadius: 4.90, borderTopRightRadius: 4.90}} />
                      <div style={{flex: '1 1 0', height: 8.32, background: '#F3F4F6', borderTopLeftRadius: 4.90, borderTopRightRadius: 4.90}} />
                      <div style={{flex: '1 1 0', height: 6.94, background: '#F3F4F6', borderTopLeftRadius: 4.90, borderTopRightRadius: 4.90}} />
                    </div>
                  </div>
                  <div style={{width: 78.41, height: 78.41, position: 'absolute', left: 33.16, top: 45.90, background: 'rgba(0,65,130,0.05)', borderRadius: 27407584, filter: 'blur(32.67px)'}} />
                </div>
              </div>
            </div>

            {/* Card 5 — Internal Operations (white) */}
            <div className="solution-card-light" style={{flex: '1 1 0', height: 324.23, padding: 26.07, background: 'white', borderRadius: 12, outline: '0.81px rgba(0, 65, 130, 0.20) solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{paddingBottom: 19.55, display: 'flex', flexDirection: 'column'}}>
                  <div style={{width: 39.10, height: 39.10, background: '#F0F4F8', borderRadius: 11.41, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={icon4} alt="" style={{width: 19.55, height: 19.55}} />
                  </div>
                </div>
                <div style={{paddingBottom: 9.78}}>
                  <div style={{color: '#1A1A1A', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Internal Operations</div>
                </div>
                <div style={{color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>Custom platforms to unify internal tools and streamline delivery.</div>
              </div>
              <div style={{width: '100%', paddingTop: 32.59}}>
                <div style={{width: '100%', height: 104.28, padding: 13.03, background: '#F4F4F4', overflow: 'hidden', borderRadius: 11.41, outline: '0.81px #F3F4F6 solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', gap: 6.52, boxSizing: 'border-box'}}>
                  <div style={{padding: 8.15, background: 'white', boxShadow: '0px 0.81px 1.63px -0.81px rgba(0,0,0,0.10), 0px 0.81px 2.44px rgba(0,0,0,0.10)', borderRadius: 8.15, outline: '0.81px #F3F4F6 solid', outlineOffset: '-0.81px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 6.52}}>
                      <div style={{width: 13.03, height: 13.03, background: '#F3F4F6', borderRadius: 27335268, flexShrink: 0}} />
                      <div style={{width: 52.14, height: 4.89, background: '#E5E7EB', borderRadius: 27335268}} />
                    </div>
                    <div style={{width: 39.10, height: 13.03, background: '#64D48B', borderRadius: 27335268, flexShrink: 0}} />
                  </div>
                  <div style={{padding: 8.15, opacity: 0.60, background: 'white', boxShadow: '0px 0.81px 1.63px -0.81px rgba(0,0,0,0.10), 0px 0.81px 2.44px rgba(0,0,0,0.10)', borderRadius: 8.15, outline: '0.81px #F3F4F6 solid', outlineOffset: '-0.81px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 6.52}}>
                      <div style={{width: 13.03, height: 13.03, background: '#F3F4F6', borderRadius: 27335268, flexShrink: 0}} />
                      <div style={{width: 39.10, height: 4.89, background: '#E5E7EB', borderRadius: 27335268}} />
                    </div>
                    <div style={{width: 39.10, height: 13.03, background: '#E3E3E3', borderRadius: 27335268, flexShrink: 0}} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 — Sector-Specific SaaS (off-white) */}
            <div className="solution-card-light" style={{flex: '1 1 0', height: 324.23, padding: 26.07, background: '#FAFAFA', borderRadius: 12, outline: '0.81px rgba(0, 65, 130, 0.20) solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{paddingBottom: 19.55, display: 'flex', flexDirection: 'column'}}>
                  <div style={{width: 39.10, height: 39.10, background: 'white', boxShadow: '0px 0.81px 1.63px -0.81px rgba(0,0,0,0.10), 0px 0.81px 2.44px rgba(0,0,0,0.10)', borderRadius: 11.41, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={icon5} alt="" style={{width: 19.55, height: 19.55}} />
                  </div>
                </div>
                <div style={{paddingBottom: 9.78}}>
                  <div style={{color: '#1A1A1A', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word'}}>Sector-Specific SaaS</div>
                </div>
                <div style={{color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>Niche software products built for unique industry requirements.</div>
              </div>
              <div style={{width: '100%', paddingTop: 32.59}}>
                <div style={{width: '100%', height: 104.28, padding: 13.03, background: 'white', boxShadow: '0px 0.81px 1.63px -0.81px rgba(0,0,0,0.10), 0px 0.81px 2.44px rgba(0,0,0,0.10)', overflow: 'hidden', borderRadius: 11.41, outline: '0.81px #F3F4F6 solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', gap: 9.78, boxSizing: 'border-box'}}>
                  <div style={{display: 'flex', gap: 6.52}}>
                    <div style={{width: 40.66, height: 16.29, position: 'relative', background: 'rgba(0,65,130,0.05)', borderRadius: 3.26, flexShrink: 0}}>
                      <div style={{position: 'absolute', left: 6.52, top: 3.26, color: '#004182', fontSize: 6.52, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '9.78px', wordWrap: 'break-word'}}>FINTECH</div>
                    </div>
                    <div style={{width: 37.84, height: 16.29, position: 'relative', background: '#F9FAFB', borderRadius: 3.26, flexShrink: 0}}>
                      <div style={{position: 'absolute', left: 6.52, top: 3.26, color: '#99A1AF', fontSize: 6.52, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '9.78px', wordWrap: 'break-word'}}>HEALTH</div>
                    </div>
                    <div style={{width: 46.73, height: 16.29, position: 'relative', background: '#F9FAFB', borderRadius: 3.26, flexShrink: 0}}>
                      <div style={{position: 'absolute', left: 6.52, top: 3.26, color: '#99A1AF', fontSize: 6.52, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '9.78px', wordWrap: 'break-word'}}>LOGISTICS</div>
                    </div>
                  </div>
                  <div style={{flex: '1 1 0', padding: 6.52, position: 'relative', background: '#F9FAFB', overflow: 'hidden', borderRadius: 8.15, outline: '0.81px #F3F4F6 solid', outlineOffset: '-0.81px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                    <div style={{width: '90%', height: 6.52, background: '#DDDDDD', borderRadius: 27335266}} />
                    <div style={{paddingTop: 6.52, paddingBottom: 6.52}}>
                      <div style={{width: '60%', height: 6.52, background: '#CED6E5', borderRadius: 27335266}} />
                    </div>
                    <div style={{width: 19.55, height: 19.55, position: 'absolute', right: 6, bottom: 6, background: '#004182', boxShadow: '0px 0.81px 1.63px -0.81px rgba(0,0,0,0.10), 0px 0.81px 2.44px rgba(0,0,0,0.10)', borderRadius: 27335266, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                      <div style={{width: 6.52, height: 6.52, background: 'white', borderRadius: 4.89}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
