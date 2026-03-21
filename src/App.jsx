import "./styles.css";

const illustrationItems = [
  {
    title: "Still Life Study",
    description: "Oil and natural light composition.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    alt: "Still life artwork with fruit and glass",
  },
  {
    title: "Quiet Orange",
    description: "Minimal form and shadow exploration.",
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=900&q=80",
    alt: "Minimal studio composition with orange",
  },
  {
    title: "Soft Surface",
    description: "Abstract textures with muted neutrals.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    alt: "Textured abstract painting",
  },
];

const traditionalArtItems = [
  {
    title: "Sketch",
    description: "Body text for whatever you'd like to expand on the main point.",
  },
  {
    title: "Watercolor",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.",
  },
  {
    title: "Oil painting",
    description:
      "Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.",
  },
];

const conceptArtItems = [
  {
    title: "Character Design",
    description: "Body text for whatever you'd like to add more to the subheading.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm still life with bread, melon, peaches, and a glass of wine",
  },
  {
    title: "Storyboard",
    description: "Body text for whatever you'd like to expand on the main point.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
    alt: "Sunlit breakfast scene with croissants, grapes, and an open book",
  },
];

function SocialIcon({ label, children }) {
  return (
    <a href="#" aria-label={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <nav className="nav">
            <a href="#home" className="brand">
              VERA XIAO
            </a>

            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a className="contact-btn" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1>Creating Art That Speaks to the Soul</h1>
                <p>
                  Contemporary artist exploring the boundaries of color, texture,
                  and emotion through various mediums.
                </p>
                <a href="#portfolio" className="hero-btn">
                  View Portfolio
                </a>
              </div>
              <div />
            </div>

            <img
              className="feature-image"
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1600&q=80"
              alt="Large featured artwork"
            />
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2 className="section-title">Illustration</h2>

            <div className="gallery">
              {illustrationItems.map((item) => (
                <article className="gallery-card" key={item.title}>
                  <img src={item.image} alt={item.alt} />
                  <div className="gallery-meta">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="traditional-arts" id="about">
          <div className="container">
            <div className="traditional-arts-grid">
              <div className="traditional-arts-copy">
                <h2>Traditional Arts</h2>

                <div className="traditional-arts-list">
                  {traditionalArtItems.map((item) => (
                    <article className="traditional-item" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>

                <div className="traditional-actions">
                  <a
                    href="#contact"
                    className="traditional-btn traditional-btn-primary"
                  >
                    Button
                  </a>
                  <a
                    href="#portfolio"
                    className="traditional-btn traditional-btn-secondary"
                  >
                    Secondary button
                  </a>
                </div>
              </div>

              <div className="traditional-arts-media">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=80"
                  alt="Still life scene with fruit, basket, and camera on an open magazine"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="concept-art">
          <div className="container">
            <h2 className="concept-art-title">Concept Art</h2>

            <div className="concept-art-grid">
              {conceptArtItems.map((item) => (
                <article className="concept-card" key={item.title}>
                  <img src={item.image} alt={item.alt} />
                  <div className="concept-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <section className="footer-cta">
          <div className="container footer-cta-row">
            <h2>Section heading</h2>
            <div className="footer-cta-actions">
              <a
                href="#portfolio"
                className="traditional-btn traditional-btn-primary"
              >
                Button
              </a>
              <a href="#about" className="traditional-btn traditional-btn-secondary">
                Secondary button
              </a>
            </div>
          </div>
        </section>

        <section className="footer-main">
          <div className="container footer-main-grid">
            <div className="footer-brand-block">
              <a href="#home" className="footer-brand">
                VERA XIAO
              </a>

              <div className="footer-socials" aria-label="Social links">
                <SocialIcon label="Facebook">
                  <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.3v2.4H8.4v3.2h2.7V22h2.4Z" />
                </SocialIcon>
                <SocialIcon label="LinkedIn">
                  <path d="M6.3 8.8A1.9 1.9 0 1 1 6.3 5a1.9 1.9 0 0 1 0 3.8ZM4.9 9.9h2.8V19H4.9V9.9Zm4.6 0H12v1.2h.1c.3-.6 1.2-1.5 2.6-1.5 2.8 0 3.3 1.8 3.3 4.2V19h-2.8v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19H9.5V9.9Z" />
                </SocialIcon>
                <SocialIcon label="YouTube">
                  <path d="M21.3 7.2a2.9 2.9 0 0 0-2-2C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.3.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2.2 12a30 30 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .5-4.8 30 30 0 0 0-.5-4.8ZM10.2 15.1V8.9l5.2 3.1-5.2 3.1Z" />
                </SocialIcon>
                <SocialIcon label="Instagram">
                  <path d="M12 7.1A4.9 4.9 0 1 0 12 17a4.9 4.9 0 0 0 0-9.9Zm0 8.1A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Zm6.2-8.3a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0Zm3 1.1c-.1-1-.3-1.8-.8-2.6a5.3 5.3 0 0 0-1.9-1.9c-.7-.4-1.6-.7-2.6-.8C15 2.6 14.7 2.6 12 2.6s-3 0-3.9.1c-1 .1-1.8.3-2.6.8a5.3 5.3 0 0 0-1.9 1.9c-.4.7-.7 1.6-.8 2.6C2.6 9 2.6 9.3 2.6 12s0 3 .1 3.9c.1 1 .3 1.8.8 2.6a5.3 5.3 0 0 0 1.9 1.9c.7.4 1.6.7 2.6.8.9.1 1.2.1 3.9.1s3 0 3.9-.1c1-.1 1.8-.3 2.6-.8a5.3 5.3 0 0 0 1.9-1.9c.4-.7.7-1.6.8-2.6.1-.9.1-1.2.1-3.9s0-3-.1-3.9Zm-1.8 7.7c-.1.8-.2 1.2-.4 1.6-.2.5-.5.8-.9 1.2-.4.4-.7.7-1.2.9-.4.2-.8.3-1.6.4-.8 0-1 .1-3.3.1s-2.5 0-3.3-.1c-.8-.1-1.2-.2-1.6-.4-.5-.2-.8-.5-1.2-.9-.4-.4-.7-.7-.9-1.2-.2-.4-.3-.8-.4-1.6 0-.8-.1-1-.1-3.3s0-2.5.1-3.3c.1-.8.2-1.2.4-1.6.2-.5.5-.8.9-1.2.4-.4.7-.7 1.2-.9.4-.2.8-.3 1.6-.4.8 0 1-.1 3.3-.1s2.5 0 3.3.1c.8.1 1.2.2 1.6.4.5.2.8.5 1.2.9.4.4.7.7.9 1.2.2.4.3.8.4 1.6 0 .8.1 1 .1 3.3s0 2.5-.1 3.3Z" />
                </SocialIcon>
              </div>
            </div>

            <div className="footer-links-block">
              <h3>Quick Links</h3>
              <nav className="footer-links" aria-label="Footer">
                <a href="#home">Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#about">About</a>
              </nav>
            </div>

            <div className="footer-contact-block">
              <h3>Contact:</h3>
              <div className="footer-contact-list">
                <p>Email: veraxiao030@gmail.com</p>
                <p>Instagram: @VERA.0301212</p>
                <p>Page</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
