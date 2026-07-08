import { useState } from 'react'
import './App.css'

const CornerFrame = () => (
  <>
    <span className="corner corner-tl" aria-hidden="true" />
    <span className="corner corner-tr" aria-hidden="true" />
    <span className="corner corner-bl" aria-hidden="true" />
    <span className="corner corner-br" aria-hidden="true" />
  </>
)

function App() {
  const [products] = useState([
    { id: 1, ref: 'REF. 001', name: 'Chronograph Excellence', detail: '18k rose gold, hand-wound movement', price: '$2,499' },
    { id: 2, ref: 'REF. 002', name: 'Diamond Encrusted Pendant', detail: '0.8ct brilliant-cut, platinum chain', price: '$4,250' },
    { id: 3, ref: 'REF. 003', name: 'Platinum Signet Ring', detail: 'Solid platinum, hand-engraved crest', price: '$1,800' }
  ])

  return (
    <div className="app-container">
      <div className="glow"></div>

      <nav className="navbar animate-fade-in">
        <div className="brand">Luxe<span className="brand-accent">.</span></div>
        <ul className="nav-links">
          <li><a href="#collections">Collections</a></li>
          <li><a href="#heritage">Heritage</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow animate-fade-in">Est. 1998 &mdash; House of Fine Objects</p>
              <h1 className="hero-title animate-fade-in delay-1">
                Elegance,<br />measured in <em>carats</em>.
              </h1>
              <p className="hero-subtitle animate-fade-in delay-2">
                A private collection of timepieces and jewelry, each piece
                appraised, numbered, and made to be kept for a lifetime.
              </p>
              <div className="hero-actions animate-fade-in delay-3">
                <button className="btn btn-primary">Explore Collection</button>
                <button className="btn btn-secondary">Our Heritage</button>
              </div>
            </div>

            <div className="hero-showcase animate-fade-in delay-2">
              <div className="vitrine">
                <CornerFrame />
                <svg className="gem" viewBox="0 0 200 200" aria-hidden="true">
                  <polygon className="gem-face gem-face-1" points="100,20 150,70 100,180 50,70" />
                  <polygon className="gem-face gem-face-2" points="100,20 150,70 180,60 130,15" />
                  <polygon className="gem-face gem-face-3" points="100,20 50,70 20,60 70,15" />
                  <line className="gem-line" x1="50" y1="70" x2="150" y2="70" />
                  <line className="gem-line" x1="100" y1="20" x2="100" y2="180" />
                </svg>
                <p className="vitrine-caption">No. 004 &mdash; On display</p>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="products">
          <p className="eyebrow eyebrow-center animate-fade-in">The Collection</p>
          <h2 className="section-title animate-fade-in">Curated For You</h2>
          <div className="product-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-card animate-fade-in delay-${(index % 3) + 1}`}
              >
                <CornerFrame />
                <div className="product-img-wrapper">
                  <span className="product-ref">{product.ref}</span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-detail">{product.detail}</p>
                  <div className="product-footer">
                    <p className="product-price">{product.price}</p>
                    <button className="btn-inquire">Inquire &rarr;</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="heritage" className="heritage">
          <div className="heritage-grid">
            <div className="heritage-mark">
              <span className="heritage-number">01</span>
              <span className="heritage-line" aria-hidden="true"></span>
            </div>
            <div>
              <p className="eyebrow">Our Heritage</p>
              <h2 className="heritage-title">Crafted by hand, verified by eye.</h2>
              <p className="heritage-text">
                Every piece that carries the Luxe mark passes through the hands
                of a single master jeweler before it ever reaches a display case.
                No two pieces are appraised the same way twice &mdash; each is
                logged, numbered, and signed off individually.
              </p>
              <div className="heritage-stats">
                <div>
                  <p className="stat-number">27</p>
                  <p className="stat-label">Years of practice</p>
                </div>
                <div>
                  <p className="stat-number">1,200+</p>
                  <p className="stat-label">Pieces appraised</p>
                </div>
                <div>
                  <p className="stat-number">100%</p>
                  <p className="stat-label">Hand-finished</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer animate-fade-in">
        <div className="footer-grid">
          <div className="brand footer-brand">Luxe<span className="brand-accent">.</span></div>
          <div className="footer-col">
            <p className="footer-heading">Visit</p>
            <p>By appointment only</p>
            <p>concierge@luxe.example</p>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Collections</p>
            <p>Timepieces</p>
            <p>Fine Jewelry</p>
          </div>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Luxe Premium Store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App