import "../styles/products.css"; // Reuse existing FAQ styles

export const renderFAQ = () => {
    return `
          <div class="faq-container reveal">
            <div class="faq-header">
              <h3>Procurement & Technical FAQ</h3>
              <p>Essential insights for transitioning your enterprise to biofuel.</p>
            </div>
            
            <div class="faq-grid stagger-container">
              <div class="faq-item reveal">
                <h4>How do biofuels compare to high-grade coal?</h4>
                <p>Our bio-pellets deliver a highly comparable thermal yield to premium coal, but with virtually zero net carbon footprint. Furthermore, they drastically cut down sulfur and nitrogen off-gassing, keeping you ahead of environmental regulations.</p>
              </div>
              
              <div class="faq-item reveal">
                <h4>What are the storage requirements?</h4>
                <p>Provided they are kept in a dry, covered, and well-ventilated silo or warehouse, our dense pellets maintain their structural integrity and full calorific value for 6 to 12 months.</p>
              </div>
              
              <div class="faq-item reveal">
                <h4>Do I need to modify my existing boiler?</h4>
                <p>In most commercial and industrial settings, our standard 12–16mm pellets are a drop-in replacement for coal. Minor feed-rate calibration may be required depending on your specific furnace architecture.</p>
              </div>
              
              <div class="faq-item reveal">
                <h4>How is batch consistency guaranteed?</h4>
                <p>We employ continuous inline moisture monitoring and random batch sampling. Every shipment is backed by internal calorimetry and density tests to ensure it meets our strict combustion standards.</p>
              </div>
            </div>
          </div>
    `;
};
