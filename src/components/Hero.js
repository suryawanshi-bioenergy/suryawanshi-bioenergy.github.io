export const renderHero = () => {
  return `
    <section id="home" class="hero">
      <div class="container hero-content stagger-container">
        <span style="color: var(--secondary); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 3px; display: block; margin-bottom: 1rem;">Next-Generation Biofuels</span>
        <h1 style="color: white; margin-bottom: 1.5rem;">Powering Industry <br/> With Nature's Efficiency</h1>
        <p>Premium biomass pellets engineered to deliver uncompromising thermal performance while drastically reducing carbon footprints.</p>
        <div class="hero-btns reveal-scale" style="display: flex; gap: 1.5rem; margin-top: 3rem; justify-content: center;">
            <a href="#products" class="btn btn-primary">Our Solutions</a>
            <a href="./Suryawanshi_Catalog.pdf" download class="btn btn-secondary" style="display: flex; align-items: center; gap: 0.5rem; border: 2px solid rgba(255,255,255,0.8); background: transparent; color: white;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Catalog
            </a>
        </div>
      </div>
    </section>
  `;
};
