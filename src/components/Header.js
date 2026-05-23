export const renderHeader = () => {
  return `
    <header class="navbar">
      <div class="container">
        <a href="#home" class="logo" style="display: flex; align-items: center; gap: 10px;">
          <img src="./logo.png" alt="Suryawanshi Bioenergy Logo" style="height: 40px; width: auto;" />
          <div>SURYAWANSHI <span>BIOENERGY</span></div>
        </a>
        <nav>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Product</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="nav-cta">
            <a href="#contact" class="btn btn-primary" style="padding: 0.7rem 1.5rem; font-size: 0.8rem; letter-spacing: 0.5px;">Get a Quote</a>
        </div>
      </div>
    </header>
  `;
};
