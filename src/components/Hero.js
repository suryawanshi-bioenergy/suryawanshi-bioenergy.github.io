export const renderHero = () => {
  return `
    <section id="home" class="hero">
      <div class="container hero-content stagger-container">
        <span style="color: var(--secondary); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 3px; display: block; margin-bottom: 1rem;">Next-Generation Biofuels</span>
        <h1 style="color: white; margin-bottom: 1.5rem;">Powering Industry <br/> With Nature's Efficiency</h1>
        <p>Premium biomass pellets engineered to deliver uncompromising thermal performance while drastically reducing carbon footprints.</p>
        <div class="hero-btns reveal-scale" style="display: flex; gap: 1.5rem; margin-top: 3rem;">
            <a href="#products" class="btn btn-primary">Our Solutions</a>
            <a href="#contact" class="btn btn-secondary">Partner With Us</a>
        </div>
      </div>
    </section>
  `;
};
