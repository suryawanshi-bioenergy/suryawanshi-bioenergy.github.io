import "../styles/about.css";
import aboutImage from "../images/about.png";

export const renderAbout = () => {
  return `
    <section id="about" class="section about-section">
      <div class="container">
        
        <div class="about-wrapper reveal">

          <div class="about-image">
            <img 
              src="${aboutImage}" 
              alt="Biomass pellet manufacturing facility and production plant"
            />
          </div>

          <div class="about-content">
            <span class="section-tag">About Us</span>
            <h2>Driving Sustainable Energy Solutions</h2>

            <p>
              Suryawanshi Bioenergy stands at the forefront of the green industrial revolution. 
              We transform agricultural byproducts into premium, dense biofuel pellets designed to 
              power heavy industry without the heavy environmental toll.
            </p>

            <p>
              Driven by innovation and strict quality control, our state-of-the-art densification 
              process guarantees a reliable, high-yield energy source. We partner with forward-thinking 
              enterprises to replace fossil fuels with clean, sustainable, and cost-effective alternatives.
            </p>

            <ul class="about-highlights">
              <li>Engineered for maximum thermal output</li>
              <li>Carbon-neutral industrial heating</li>
              <li>Rigorous batch-by-batch testing</li>
              <li>Uninterrupted national supply network</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  `;
};