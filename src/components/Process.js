import rawMaterial from "../images/raw_materials.png";
import drying from "../images/controlled_drying_and_preprocessing.png";
import pressing from "../images/pellet_pressing_and_formation.png";
import quality from "../images/pellet_quality_check.png";

import "../styles/process.css";

export const renderProcess = () => {
  return `
    <section id="process" class="section process-section">
      <div class="container">

        <div class="section-header reveal">
          <span>The Densification Journey</span>
          <h2>Precision Engineering from Farm to Factory</h2>
          <p>
            Discover the rigorous, multi-stage process we use to transform raw agricultural waste into premium, high-density thermal fuel.
          </p>
        </div>

        <div class="process-wrapper">

          <!-- STEP 1 -->
          <div class="process-row reveal-left">
            <div class="process-image">
              <img src="${rawMaterial}" alt="Raw agro-residue collection for biomass pellets" />
            </div>
            <div class="process-content">
              <h3>1. Strategic Biomass Sourcing</h3>
              <p>
                We partner directly with farming communities to procure pristine agricultural byproducts, establishing a localized and highly efficient supply chain.
              </p>
              <ul>
                <li>Empowering local agrarian economies</li>
                <li>Ensuring a 365-day uninterrupted feed</li>
                <li>Minimizing carbon emissions during transit</li>
                <li>Selecting only premium, high-yield organic waste</li>
              </ul>
            </div>
          </div>

          <!-- STEP 2 -->
          <div class="process-row reverse reveal-right">
            <div class="process-image">
              <img src="${drying}" alt="Controlled drying and biomass pre-processing" />
            </div>
            <div class="process-content">
              <h3>2. Thermal Dehydration & Refining</h3>
              <p>
                The raw biomass undergoes rigorous processing to eliminate impurities and reach the optimal moisture threshold for densification.
              </p>
              <ul>
                <li>Precision milling for uniform particulate size</li>
                <li>Advanced filtration to remove stones and silica</li>
                <li>Strict moisture calibration (below 12%)</li>
                <li>Maximizing the inherent thermal properties</li>
              </ul>
            </div>
          </div>

          <!-- STEP 3 -->
          <div class="process-row reveal-left">
            <div class="process-image">
              <img src="${pressing}" alt="High-pressure biomass pellet pressing machine" />
            </div>
            <div class="process-content">
              <h3>3. High-Compression Densification</h3>
              <p>
                Using state-of-the-art ring die presses, the refined powder is extruded under extreme pressure, locking in the energy density.
              </p>
              <ul>
                <li>100% organic, zero synthetic adhesives used</li>
                <li>Utilizing inherent plant lignin as a natural binder</li>
                <li>Exceptional energy density (up to 4500 kcal/kg)</li>
                <li>Engineered for structural integrity and low friability</li>
              </ul>
            </div>
          </div>

          <!-- STEP 4 -->
          <div class="process-row reverse reveal-right">
            <div class="process-image">
              <img src="${quality}" alt="Biomass pellet quality inspection and packaging" />
            </div>
            <div class="process-content">
              <h3>4. Laboratory Testing & Logistics</h3>
              <p>
                Before leaving our facility, every single batch must pass our stringent quality assurance protocols to guarantee industrial-grade performance.
              </p>
              <ul>
                <li>Bomb calorimeter testing for thermal output</li>
                <li>Micro-analysis for ash and moisture tolerance</li>
                <li>Mechanical durability and fines ratio testing</li>
                <li>Sealed in heavy-duty, weather-resistant packaging</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
};