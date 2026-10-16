import Image from "next/image";
import InteractiveAfricaMap from "@/app/components/InteractiveAfricaMap";

const services = [
  ["Brand & Reputation", "We define what brands stand for, how they are positioned, and how they are perceived."],
  ["PR & Strategic Communications", "We create narratives that earn attention, build credibility, and strengthen reputation."],
  ["Marketing & Amplification", "We help the right audiences see, engage with, and act on your ideas."],
  ["Experiences & Activations", "We bring brands, communities, and ideas to life through experiences."],
  ["Research & Insights", "We turn audience intelligence and market insight into clearer decisions."],
  ["Content & Creative", "We translate strategy into content people can see, hear, watch, and remember."],
];

const sectors = [
  { title: "Impact & Development", note: "Foundations, nonprofits, CSR initiatives, and advocacy" },
  { title: "Media & Entertainment", note: "Media platforms, entertainment brands, creators, and talent" },
  { title: "Corporate & Professional", note: "Companies, institutions, founders, and professional services" },
  { title: "Culture & Creative Industries", note: "Artists, cultural organisations, creative businesses, and communities" },
];

const steps = [
  { label: "01 / OUR APPROACH", title: "Find.", text: "We get clear on your brand, your challenge, your audience, and what needs to move." },
  { label: "02 / OUR THINKING", title: "Create.", text: "We shape the strategy, ideas and communications needed to move it." },
  { label: "03 / OUR DELIVERY", title: "Execute.", text: "We bring the work to life across the right channels, platforms and experiences." },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>{children}</p>;
}

function Button({ children, href = "#contact", secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <a className={`pill${secondary ? " pill-outline" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

function TestimonialPortrait({ src, alt }: { src: string | null; alt: string }) {
  if (!src) return null;
  return <Image className="testimonial-portrait" src={src} alt={alt} width={84} height={84} />;
}

const testimonialPortraits: Record<"left" | "center" | "right", string | null> = {
  left: "/images/testimonial-left.png",
  center: "/images/testimonial-center.png",
  right: "/images/testimonial-right.png",
};

const testimonialShapes = {
  left: "M72 2 C49 -2 31 8 25 30 C20 50 18 91 16 125 C14 167 9 208 14 229 C17 244 27 252 43 256 L218 278 C240 281 253 270 258 249 L278 119 C282 97 274 83 254 72 L93 7 C85 4 78 2 72 2 Z",
  center: "M77 6 C58 6 44 8 34 19 C26 29 23 50 20 77 L4 228 C0 267 4 302 11 328 C17 354 34 372 64 385 C80 392 94 397 111 398 L274 374 C318 367 350 362 369 352 C390 342 398 326 398 299 L397 44 C397 20 386 9 365 7 C278 3 174 3 77 6 Z",
  right: "M201 2 C224 -2 244 6 252 24 C260 42 263 72 266 109 L278 211 C281 235 272 249 252 256 L73 278 C52 281 36 271 31 252 L4 116 C-1 96 5 81 25 71 L187 8 C192 5 197 3 201 2 Z",
} as const;

function TestimonialShape({ shape, layer }: { shape: keyof typeof testimonialShapes; layer: "black" | "yellow" | "yellow-accent" }) {
  const viewBox = shape === "center" ? "0 0 400 400" : "0 0 280 280";
  return <svg className={`testimonial-shape testimonial-${layer}`} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true"><path d={testimonialShapes[shape]} /></svg>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <header className="site-nav">
          <a className="wordmark nav-logo" href="#home" aria-label="EBA home">eba<span>.</span></a>
          <nav aria-label="Main navigation">
            <a href="#home">Home</a><a href="#about">About</a><a href="#services">Service</a>
            <a href="#sectors">Event</a><a href="#sectors">Case Studies</a><a href="#stories">Stories</a>
          </nav>
          <Button href="#contact" secondary>Get In Touch</Button>
        </header>
        <div className="hero-copy">
          <Eyebrow light>ENI BRAND ARCHITECT</Eyebrow>
          <h1>Great Brands<br />Don’t Just Exist.<br /><em>They Make Impact!</em></h1>
          <p>We turn ambitious ideas into compelling stories, meaningful connections, and unforgettable brand experiences. Through strategic PR, communications, and marketing, we help brands stand out, build influence, and stay relevant.</p>
          <div className="hero-actions"><Button>Book a Consultation</Button><Button secondary href="#work">Explore Our Work</Button></div>
          <div className="hero-stats" aria-label="EBA reach">
            <div><b>50<span>+</span></b><small>Exact label unavailable</small></div>
            <div><b>10<span>+</span></b><small>Exact label unavailable</small></div>
            <div><b>10<span>+</span></b><small>Exact label unavailable</small></div>
            <div><b>5<span>+</span></b><small>Exact label unavailable</small></div>
          </div>
        </div>
        <div className="hero-shade" aria-hidden="true" />
      </section>

      <section className="intro section-wrap" id="about">
        <div className="intro-copy">
          <Eyebrow>ABOUT EBA</Eyebrow>
          <h2>Visibility. Influence.<br /><span>Ecosystem Building.</span></h2>
          <p className="intro-lead">Being visible is only the beginning.</p>
          <p>We build brands and organisations that are understood, remembered, and positioned to influence the audiences that matter. Our work connects strategy, communications, media, content, marketing, partnerships, and experiences.</p>
          <Button href="#services">Learn More About EBA</Button>
        </div>
        <div className="intro-visual" aria-label="Brand materials image unavailable in the project assets">
          <div className="paper paper-one"><span className="paper-label">eba.</span><span>Original<br />image unavailable</span></div>
          <div className="paper paper-two"><span className="paper-label">EBA / Lagos</span><strong>The Event<br />is just<br />the beginning.</strong></div>
          <div className="intro-visual-caption">Original campaign imagery unavailable</div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap services-layout">
          <div className="services-intro">
            <Eyebrow light>WHAT WE DO</Eyebrow>
            <h2>One partner.<br />Multiple capabilities.<br />One direction.<br /><em>For Real Impact</em></h2>
            <p>Most brands are held together by mismatched messages and good intentions. EBA designs the whole structure, from strategy and PR to content, media, and experiences, so every move points the same way.</p>
            <Button secondary href="#contact">Learn More About EBA</Button>
          </div>
          <div className="service-list">
            {services.map(([title, text], index) => (
              <a className="service-row" href="#contact" key={title}>
                <span className="service-index">0{index + 1}</span>
                <span><strong>{title}</strong><small>{text}</small></span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sectors section-wrap" id="sectors">
        <div className="section-heading">
          <h2>Different worlds.<br />Real relevance.</h2>
          <div><p>From institutions shaping progress to creatives shaping culture, we build communications around the world your brand lives in.</p><Button href="#contact">Learn More About EBA</Button></div>
        </div>
        <div className="sector-board">
          <div className="board-heading"><div><Eyebrow>SECTOR COLLECTION</Eyebrow><h3>Four sectors, one editorial approach.</h3></div><span className="tiny-tag">4 SECTORS</span></div>
          <div className="sector-grid">
            {sectors.map((sector, i) => (
              <article className="sector-card" key={sector.title}>
                <div className="sector-card-head"><div><h4>{sector.title}</h4><p>{sector.note}</p></div><span className="tiny-tag">EXPLORE ↗</span></div>
                <div className={`sector-image sector-image-${i + 1}`} role="img" aria-label={`${sector.title} photograph unavailable in the project assets`}><span>Original sector image unavailable</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="africa-section section-wrap" id="work">
        <div className="africa-copy">
          <Eyebrow>BUILT HERE. REACHING EVERYWHERE.</Eyebrow>
          <h2>African-born.<br />Built to travel.</h2>
          <p>Our communications work goes beyond owned platforms. EBA develops stories, press materials and media strategies that earn attention across local, African and international media. Headquartered in Lagos, we have supported campaigns across Nigeria, Ghana, Kenya, South Africa and Benin, while also reaching audiences beyond the continent.</p>
          <p className="market-line">Nigeria <i>•</i> Ghana <i>•</i> Kenya <i>•</i> South Africa <i>•</i> Benin</p>
          <p className="yellow-copy">Local intelligence. Borderless ambition.</p>
          <Button>Discover Our Services</Button>
        </div>
          <div className="africa-art">
          <p className="script-note">Lagos is home.</p>
            <div className="map-placeholder">
              <InteractiveAfricaMap />
            </div>
          <p className="map-caption">A connected point<br />across the continent.</p>
        </div>
      </section>

      <section className="approach section-wrap" id="approach">
        <div className="approach-heading"><div><Eyebrow>HOW WE DO IT</Eyebrow><h2>Clarity first. Then<br />momentum.</h2></div><Button href="#contact">Let’s find your direction</Button></div>
        <div className="steps-grid">
          {steps.map((step) => <article className="step-card" key={step.title}><div className="step-label">{step.label}<span>↗</span></div><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
      </section>

      <section className="founder-section section-wrap" id="stories">
        <div className="founder-photo-card">
          <div className="founder-photo"><Image src="/images/founder.png" alt="EBA founder stepping out of a vehicle" fill sizes="(max-width: 760px) 100vw, 34vw" priority /></div>
          <div className="founder-photo-caption"><span>OUR FOUNDER</span><Button href="#founder-story">Her Story</Button></div>
        </div>
        <div className="founder-stories">
          <article className="founder-quote" id="founder-story"><Eyebrow light>FROM THE FOUNDER</Eyebrow><h2>“I thought I needed to work harder. What I needed was structure.”</h2><p>EBA began with a problem I experienced personally: how to make different parts of a brand, business, or identity strengthen one another rather than compete for attention.</p><Button secondary href="#contact">Read Our Story</Button></article>
          <article className="founder-bio"><div className="bio-heading"><Eyebrow>ONE STORY</Eyebrow><span className="tiny-tag">FOUNDER NOTE</span></div><p>For a long time, I wore several hats and struggled to make them work together. What succeeded in one room did not always translate to another. I thought I needed to work harder, but what I needed was structure.</p><p>So I set out to understand the architecture behind building, positioning, and amplifying something that matters. And that became EBA.</p><Button href="#contact">Read Our Story</Button></article>
        </div>
      </section>

      <section id="client-testimonials" className="testimonials section-wrap" aria-label="Client testimonials">
        <div className="testimonial-title"><button className="testimonial-arrow testimonial-arrow-left" type="button" aria-label="Previous testimonials"><span /></button><h2>What Our Clients Say About Us</h2><button className="testimonial-arrow testimonial-arrow-right" type="button" aria-label="Next testimonials"><span /></button></div>
        <div className="testimonial-dots" aria-label="Page 1 of 5"><span className="active-dot" /><span /><span /><span /><span /></div>
        <div className="testimonial-cards">
          <article className="testimonial-card testimonial-side testimonial-left">
            <TestimonialShape shape="left" layer="yellow" />
            <TestimonialShape shape="left" layer="black" />
            <TestimonialPortrait src={testimonialPortraits.left} alt="Client portrait" />
            <strong>Hannah Schmitt</strong><small>Lead designer</small><span className="quote-mark" aria-hidden="true">“</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
          </article>
          <article className="testimonial-card testimonial-feature">
            <TestimonialShape shape="center" layer="yellow-accent" />
            <TestimonialShape shape="center" layer="yellow" />
            <TestimonialShape shape="center" layer="black" />
            <TestimonialPortrait src={testimonialPortraits.center} alt="Client portrait" />
            <strong>Hannah Schmitt</strong><small>Lead designer</small><span className="quote-mark" aria-hidden="true">“</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
          </article>
          <article className="testimonial-card testimonial-side testimonial-right">
            <TestimonialShape shape="right" layer="yellow" />
            <TestimonialShape shape="right" layer="black" />
            <TestimonialPortrait src={testimonialPortraits.right} alt="Client portrait" />
            <strong>Hannah Schmitt</strong><small>Lead designer</small><span className="quote-mark" aria-hidden="true">“</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim</p>
          </article>
        </div>
      </section>

      <section className="newsletter section-wrap">
        <div><h2>Stay Ahead of the Conversation.</h2><p>Fresh perspectives on brands, culture and communication. A thoughtful note from EBA, straight to your inbox.</p></div>
        <form action="#newsletter" id="newsletter"><label htmlFor="email">Your email address</label><div className="email-field"><input id="email" type="email" placeholder="you@example.com" /><button type="submit" aria-label="Subscribe">↗</button></div><small>By subscribing, you agree to receive occasional updates from EBA.</small></form>
      </section>

      <footer className="site-footer">
        <section className="contact-cta" id="contact">
          <div><Eyebrow light>YOUR NEXT CHAPTER</Eyebrow><h2>Your next chapter<br />deserves to be seen.</h2></div>
          <div><p>Supporting copy is not legible enough to transcribe from the reference.</p><Button>Book a Consultation</Button></div>
        </section>
        <div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#home">eba<span>.</span></a><p>ENI Brand Architect is an integrated brand, PR, and communications consultancy.</p></div><div><Eyebrow light>CONTACT</Eyebrow><a href="mailto:admin@enibrand.com">Admin@enibrand.com</a><a href="tel:+2349033801241">+234 903 380 1241</a></div><div><Eyebrow light>EXPLORE</Eyebrow><a href="#about">About Us</a><a href="#services">Service</a><a href="#sectors">Case Studies</a></div><div><Eyebrow light>FOLLOW</Eyebrow><a href="#stories">Instagram</a><a href="#stories">LinkedIn</a><a href="#stories">Stories</a></div></div>
        <div className="footer-bottom"><span>© 2026 Eni Brand Architect. All Rights Reserved.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
