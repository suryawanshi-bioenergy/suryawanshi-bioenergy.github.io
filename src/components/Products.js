import "../styles/products.css";
import pelletsImg from "../images/pellets.png";
import boilerImg from "../images/boiler.png";
import heatingImg from "../images/heating_system.png";
import powerImg from "../images/power_plants.png";
import foodImg from "../images/food_processing.png";

export const renderProducts = () => {
  return `
      <section id="products" class="section products-section">
        <div class="container">
          <div class="section-header reveal">
            <span>Our Catalog</span>
            <h2>Product Specifications</h2>
          </div>
          
          <div class="spec-card reveal">
            <div class="spec-grid">
                <div class="spec-content">
                    <h3 style="color: var(--primary);">Suryawanshi Bioenergy<br/>Premium Biomass Pellets (6–16 mm)</h3>
                    <p style="color: var(--text-secondary);">
                      Engineered for maximum thermal efficiency, our bio-pellets are forged from 
                      responsibly sourced agricultural byproducts. Through advanced densification, 
                      we deliver a high-performance, low-emission fuel source designed to keep 
                      heavy industries running smoothly and sustainably.
                    </p>
                    
                    <div class="spec-feature-grid">
                        <div class="spec-feature-item">
                            <span>Calorific Value</span>
                            <p>3400–4500 kcal/kg</p>
                        </div>
                        <div class="spec-feature-item">
                            <span>Ash Content</span>
                            <p>&lt; 10%</p>
                        </div>
                        <div class="spec-feature-item">
                            <span>Moisture</span>
                            <p>&lt; 12%</p>
                        </div>
                        <div class="spec-feature-item">
                            <span>Pellet Size</span>
                            <p>6–16 mm</p>
                        </div>
                    </div>

                    <ul class="spec-meta-list">
                        <li><strong>Raw Materials:</strong> Paddy straw, wheat straw, agro-waste</li>
                        <li><strong>Process:</strong> Controlled drying & high-density compaction</li>
                        <li><strong>Supply Capacity:</strong> 80-100 Tons Daily Production (Year-round)</li>
                    </ul>
                    
                    <a href="/visiting_card.pdf" 
                       target="_blank" class="btn btn-primary" style="margin-top: 2rem;">Download Visiting Card</a>
                </div>
                <div class="spec-image">
                    <img src="${pelletsImg}" alt="Premium Industrial Pellets" />
                </div>
            </div>
          </div>

          <div class="apps-container reveal">
            <div class="apps-header">
              <h3>Empowering Sectors with Clean Thermal Energy</h3>
              <p>From heavy manufacturing to commercial heating, our high-density biofuels are the smart alternative to coal and gas.</p>
            </div>

            <div class="application-grid stagger-container">
                
                <div class="app-card reveal">
                    <div class="app-img-wrapper">
                         <img src="${boilerImg}" alt="Industrial Boilers" />
                    </div>
                    <h4><span class="app-number">01.</span> Heavy Manufacturing & Boilers</h4>
                    <ul class="app-list">
                      <li>Uninterrupted base-load fuel for steam generation</li>
                      <li>Exceptional burn consistency without temperature drops</li>
                      <li>Trusted by textile mills, chemical plants, and pharma</li>
                    </ul>
                </div>

                <div class="app-card reveal">
                    <div class="app-img-wrapper">
                         <img src="${heatingImg}" alt="Commercial Heating" />
                    </div>
                    <h4><span class="app-number">02.</span> Large-Scale Commercial Heating</h4>
                    <ul class="app-list">
                      <li>Cost-effective climate control for hotels and corporate spaces</li>
                      <li>Dramatically lowers operational heating overheads</li>
                      <li>Perfectly suited for automated centralized HVAC networks</li>
                    </ul>
                </div>

                <div class="app-card reveal">
                    <div class="app-img-wrapper">
                         <img src="${powerImg}" alt="Power Plants" />
                    </div>
                    <h4><span class="app-number">03.</span> Utility & Power Generation</h4>
                    <ul class="app-list">
                      <li>Seamless integration for coal co-firing to meet emission targets</li>
                      <li>Delivers robust, predictable energy yields for the grid</li>
                      <li>Boosts overall thermal efficiency and reduces carbon taxes</li>
                    </ul>
                </div>

                <div class="app-card reveal">
                    <div class="app-img-wrapper">
                         <img src="${foodImg}" alt="Food Processing" />
                    </div>
                    <h4><span class="app-number">04.</span> Food Processing Facilities</h4>
                    <ul class="app-list">
                      <li>Food-safe, clean-burning thermal energy for industrial ovens</li>
                      <li>Precision temperature control for roasting and dehydration</li>
                      <li>A zero-toxicity alternative to traditional fossil fuels</li>
                    </ul>
                </div>

            </div>
          </div>
        </div>
      </section>
    `;
};
