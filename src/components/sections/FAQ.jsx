import { useState } from "react";

const faqData = [
  {
    q: 'How do we know when automation is actually needed?',
    a: "We conduct a thorough process discovery first. If a manual task is repetitive, prone to error, and taking up valuable human hours, it's a strong candidate for automation.",
  },
  { q: 'Is AI useful for our specific workflows?', a: 'It depends on the data and the task. We evaluate whether AI can genuinely improve routing, reporting, or decision-making, and only implement it where it drives measurable outcomes.' },
  { q: 'Can you work alongside our existing team or processes?', a: "Absolutely. We don't believe in ripping out systems that work. We design our solutions to integrate seamlessly with your current successful operations." },
  { q: 'Do you provide support after the system launches?', a: 'Yes. Process improvement doesn\'t end at launch. We offer dedicated support and continuous iteration to ensure the system scales with your business.' },
];

function ChevronIcon({ open }) {
  return (
    <div style={{width: 24.21, height: 24.21, background: open ? '#004182' : '#F3F4F6', borderRadius: 25390614, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: open ? 'rotate(180deg)' : 'none'}}>
        <path d="M3.41 5.11L6.81 8.51L10.21 5.11" stroke={open ? 'white' : '#1A1A1A'} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-section" style={{width: '100%', background: '#EFF7FF', display: 'flex', justifyContent: 'center', boxSizing: 'border-box', paddingBottom: 120}}>
      <div className="faq-inner" style={{width: 1200, position: 'relative', height: 700}}>

        {/* Left — text block */}
        <div className="faq-left" style={{width: 588, left: 0, top: 96.73, position: 'absolute', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8}}>

          {/* Badge */}
          <div style={{height: 32, paddingLeft: 9, paddingRight: 9, paddingTop: 3, paddingBottom: 3, background: 'rgba(0, 65, 130, 0.05)', borderRadius: 32, display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', gap: 6}}>
            <div style={{color: '#004182', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15.13px', letterSpacing: 0.26, wordWrap: 'break-word'}}>Engagement Model</div>
          </div>

          {/* Headline + subtext */}
          <div className="faq-headline-group" style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 16}}>
            <div className="faq-headline" style={{alignSelf: 'stretch', color: '#1A1A1A', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>Clear expectations,<br />predictable improvements.</div>
            <div className="faq-subtext" style={{width: 339, color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>We structure our engagements to reduce<br className="faq-subtext-br" /><span className="faq-subtext-l2">risk, ensure transparency, and focus</span><br className="faq-subtext-br" /><span className="faq-subtext-l2">entirely on improving your operations.</span></div>
          </div>
        </div>

        {/* Right — FAQ accordion */}
        <div className="faq-accordion" style={{width: 584, height: 483, padding: 24, left: 616, top: 96.73, position: 'absolute', background: 'white', boxShadow: '0px 0.76px 1.51px -0.76px rgba(0,0,0,0.10), 0px 0.76px 2.27px rgba(0,0,0,0.10)', borderRadius: 12, outline: '0.76px #F3F4F6 solid', outlineOffset: '-0.76px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', boxSizing: 'border-box'}}>

          {faqData.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={i} style={{alignSelf: 'stretch', paddingTop: i === 0 ? 0 : 12.11, display: 'flex', flexDirection: 'column'}}>
                <div onClick={() => toggle(i)} className={open ? '' : 'faq-row'} style={{alignSelf: 'stretch', background: open ? '#F8FAFC' : 'white', overflow: 'hidden', borderRadius: 6, outline: open ? '0.76px rgba(0, 65, 130, 0.20) solid' : '0.76px #F3F4F6 solid', outlineOffset: '-0.76px', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>

                  {/* Question row */}
                  <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 18.16, paddingBottom: 18.16, display: 'inline-flex', justifyContent: 'space-between', alignItems: open ? 'flex-start' : 'center'}}>
                    <div style={{color: open ? '#004182' : '#1A1A1A', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word', flex: 1, paddingRight: 16}}>{faq.q}</div>
                    <ChevronIcon open={open} />
                  </div>

                  {/* Answer */}
                  {open && faq.a && (
                    <div style={{paddingBottom: 18.16, paddingLeft: 18.16, paddingRight: 18.16, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                      <div className="faq-answer" style={{color: '#3C3C3C', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word'}}>{faq.a}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 100% in-house card */}
        <div className="faq-inhouse-card" style={{maxWidth: 339, paddingTop: 12.11, paddingBottom: 12.11, paddingLeft: 12.11, paddingRight: 18.16, left: 0, top: 362.73, position: 'absolute', background: 'white', boxShadow: '0px 0.76px 1.51px -0.76px rgba(0,0,0,0.10), 0px 0.76px 2.27px rgba(0,0,0,0.10)', borderRadius: 12, outline: '0.76px #F3F4F6 solid', outlineOffset: '-0.76px', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', gap: 18.16}}>
          <div style={{paddingLeft: 18.16, paddingRight: 18.16, paddingTop: 15.13, paddingBottom: 15.13, background: 'linear-gradient(135deg, #004182 0%, #00478A 7%, #004E93 14%, #00549C 21%, #005BA4 29%, #0062AD 36%, #0069B6 43%, #006FBF 50%, #0076C8 57%, #007DD1 64%, #0084DA 71%, #008BE3 79%, #0093EC 86%, #009AF6 93%, #00A1FF 100%)', borderRadius: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
            <div style={{color: 'white', fontSize: 18.16, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '24.21px', wordWrap: 'break-word'}}>100%</div>
          </div>
          <div style={{width: 204.39, display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <div style={{color: '#1A1A1A', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: '22.40px', wordWrap: 'break-word'}}>In-house engineering</div>
            <div style={{width: 205.07, paddingTop: 3.03, color: '#3C3C3C', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word'}}>We never outsource our core development work to third-party agencies.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
