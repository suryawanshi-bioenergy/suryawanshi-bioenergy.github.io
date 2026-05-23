import "../styles/products.css";
import boilerImg from "../images/boiler.png";
import heatingImg from "../images/heating_system.png";
import powerImg from "../images/power_plants.png";
import foodImg from "../images/food_processing.png";

import maizeStoverImg from "../images/products/corn_stover.jpg";
import sugarcaneLeavesImg from "../images/products/sugarcane_leaves.jpg";
import groundnutShellImg from "../images/products/groundnut_shell.jpg";
import wheatStrawImg from "../images/products/wheat_straw.jpg";
import mixedAgroImg from "../images/products/mixed_agro_residue.jpg";
import cottonStalkImg from "../images/products/cotton_stalk.jpg";
import mustardStalkImg from "../images/products/mustard_stalk.jpg";
import soybeanHuskImg from "../images/products/soyabean_husk.jpg";
import bambooImg from "../images/products/bamboo.jpg";
import sawdustImg from "../images/products/sawdust.jpg";
import riceStrawImg from "../images/products/rice_straw.jpg";
import cornCobImg from "../images/products/corn_cob.jpg";

const rawMaterials = [
  {
    name: "Maize Stover / Corn Stalk",
    image: maizeStoverImg,
    specs: {
      "Pellet Diameter": "6mm / 8mm / 10mm",
      "Moisture Content": "8–12%",
      "Ash Content": "4–6%",
      "Gross Calorific Value": "3800–4200 kcal/kg",
      "Bulk Density": "600–700 kg/m³",
      "Pellet Length": "20–35 mm",
      "Sulphur Content": "Very Low",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Sugarcane Leaves / Trash",
    image: sugarcaneLeavesImg,
    specs: {
      "Pellet Diameter": "8mm / 10mm",
      "Moisture Content": "8–10%",
      "Ash Content": "3–5%",
      "Gross Calorific Value": "3500–4000 kcal/kg",
      "Bulk Density": "650–750 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Groundnut Shell",
    image: groundnutShellImg,
    specs: {
      "Pellet Diameter": "6mm / 8mm / 12mm",
      "Moisture Content": "≤ 8%",
      "Ash Content": "2–4%",
      "Gross Calorific Value": "4000–4200 kcal/kg",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Wheat Straw",
    image: wheatStrawImg,
    specs: {
      "Pellet Diameter": "8mm / 10mm",
      "Moisture Content": "6–10%",
      "Ash Content": "4–7%",
      "Gross Calorific Value": "3500–4300 kcal/kg",
      "Bulk Density": "500–700 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Mixed Agro Residue",
    image: mixedAgroImg,
    specs: {
      "Pellet Diameter": "8mm / 10mm / 12mm / 16mm",
      "Moisture Content": "8–12%",
      "Ash Content": "3–8%",
      "Gross Calorific Value": "3500–4200 kcal/kg",
      "Bulk Density": "600–750 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Cotton Stalk Pellets",
    image: cottonStalkImg,
    specs: {
      "Gross Calorific Value": "3800–4200 kcal/kg",
      "Ash Content": "4–6%",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Mustard Stalk Pellets",
    image: mustardStalkImg,
    specs: {
      "Pellet Diameter": "6-12 mm",
      "Gross Calorific Value": "3600–4000 kcal/kg",
      "Ash Content": "5–7%",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Soybean Husk Pellets",
    image: soybeanHuskImg,
    specs: {
      "Gross Calorific Value": "3800–4200 kcal/kg",
      "Ash Content": "3–5%",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Bamboo Pellets",
    image: bambooImg,
    specs: {
      "Gross Calorific Value": "4200–4500 kcal/kg",
      "Ash Content": "2–4%",
      "Grade": "Premium",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Sawdust/Wood Pellets",
    image: sawdustImg,
    specs: {
      "Pellet Diameter": "6-12 mm",
      "Gross Calorific Value": "4200–4800 kcal/kg",
      "Ash Content": "1–3%",
      "Grade": "Export Grade",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Rice Straw Pellets",
    image: riceStrawImg,
    specs: {
      "Gross Calorific Value": "3000–3600 kcal/kg",
      "Ash Content": "10–15%",
      "Grade": "Moderate",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  },
  {
    name: "Corn Cob Pellets",
    image: cornCobImg,
    specs: {
      "Gross Calorific Value": "4000–4400 kcal/kg",
      "Bulk Density": "500 to 600 kg/m³",
      "Percentage of Fines (ARB)": "Fines ≤ 5%"
    }
  }
];

export const renderProducts = () => {
  const carouselSlides = rawMaterials.map((material, index) => {
    const specItems = Object.entries(material.specs).map(([key, value]) => `
            <div class="prod-spec-item">
                <span>${key}</span>
                <p>${value}</p>
            </div>
        `).join('');

    return `
            <div class="prod-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="prod-grid">
                    <div class="prod-content">
                        <div class="prod-badge">${String(index + 1).padStart(2, '0')} / ${String(rawMaterials.length).padStart(2, '0')}</div>
                        <h3 class="prod-title" style="margin-bottom: 0.5rem;">${material.name}</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; font-weight: 500; margin-top: 0; margin-bottom: 2rem; letter-spacing: 0.5px;">Raw Material: Directly sourced from farmers</p>
                        <div class="prod-spec-grid">
                            ${specItems}
                        </div>
                    </div>
                    <div class="prod-image-wrapper">
                        <img src="${material.image}" alt="${material.name}" class="prod-image" />
                    </div>
                </div>
            </div>
        `;
  }).join('');

  return `
      <section id="products" class="section products-section">
        <div class="container">
          <div class="section-header reveal" style="text-align: center; margin-bottom: 4rem;">
            <span>Our Catalog</span>
            <h2 style="color: var(--primary); font-size: 2.2rem; margin-bottom: 1.5rem;">Suryawanshi Bioenergy Premium Biomass Pellets (6–16 mm)</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6; max-width: 800px; margin: 0 auto;">
              Engineered for maximum thermal efficiency, our bio-pellets are forged from responsibly sourced agricultural byproducts. Through advanced densification, we deliver a high-performance, low-emission fuel source designed to keep heavy industries running smoothly and sustainably.
            </p>
          </div>
          
          <div class="emerald-carousel-card reveal">
            <div class="particles-overlay">
                <div class="ambient-glow glow-blue"></div>
                <div class="ambient-glow glow-green"></div>
                <span class="floating-particle p1"></span>
                <span class="floating-particle p2"></span>
                <span class="floating-particle p3"></span>
                <span class="floating-particle p4"></span>
                <span class="floating-particle p5"></span>
            </div>

            <div class="prod-slides-wrapper">
                ${carouselSlides}
            </div>
            
            <button class="prod-nav-btn prev">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button class="prod-nav-btn next">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
          </div>
        </div>
      </section>

      <section class="section apps-section">
        <div class="container">
          <div class="apps-container reveal">
            <div class="apps-header text-center">
              <h3>Empowering Sectors with Clean Thermal Energy</h3>
              <p>From heavy manufacturing to commercial heating, our high-density biofuels are the smart alternative to coal and gas.</p>
            </div>

            <div class="showcase-outer-container stagger-container">
                <div class="showcase-card emerald-theme-card reveal">
                    <div class="showcase-tabs integrated-tabs">
                        <button class="showcase-tab active" data-slide="0">Manufacturing</button>
                        <button class="showcase-tab" data-slide="1">Commercial</button>
                        <button class="showcase-tab" data-slide="2">Utility & Power</button>
                        <button class="showcase-tab" data-slide="3">Food Processing</button>
                    </div>

                    <div class="showcase-content-area">
                        <!-- Slide 0 -->
                        <div class="showcase-slide active" data-index="0">
                            <div class="showcase-grid">
                                <div class="showcase-content">
                                    <h3>1. Heavy Manufacturing & Boilers</h3>
                                    <p>Power your heavy industrial operations with a sustainable, high-yield thermal solution.</p>
                                    <ul class="app-list">
                                      <li>Uninterrupted base-load fuel for steam generation</li>
                                      <li>Exceptional burn consistency without temperature drops</li>
                                      <li>Trusted by textile mills, chemical plants, and pharma</li>
                                    </ul>
                                </div>
                                <div class="showcase-image">
                                    <img src="${boilerImg}" alt="Industrial Boilers" />
                                </div>
                            </div>
                        </div>

                        <!-- Slide 1 -->
                        <div class="showcase-slide" data-index="1">
                            <div class="showcase-grid">
                                <div class="showcase-content">
                                    <h3>2. Large-Scale Commercial Heating</h3>
                                    <p>Efficient, low-emission heating solutions for large-scale commercial facilities and corporate spaces.</p>
                                    <ul class="app-list">
                                      <li>Cost-effective climate control for hotels and corporate spaces</li>
                                      <li>Dramatically lowers operational heating overheads</li>
                                      <li>Perfectly suited for automated centralized HVAC networks</li>
                                    </ul>
                                </div>
                                <div class="showcase-image">
                                    <img src="${heatingImg}" alt="Commercial Heating" />
                                </div>
                            </div>
                        </div>

                        <!-- Slide 2 -->
                        <div class="showcase-slide" data-index="2">
                            <div class="showcase-grid">
                                <div class="showcase-content">
                                    <h3>3. Utility & Power Generation</h3>
                                    <p>Reliable base-load renewable energy designed for municipal and utility-scale power grids.</p>
                                    <ul class="app-list">
                                      <li>Seamless integration for coal co-firing to meet emission targets</li>
                                      <li>Delivers robust, predictable energy yields for the grid</li>
                                      <li>Boosts overall thermal efficiency and reduces carbon taxes</li>
                                    </ul>
                                </div>
                                <div class="showcase-image">
                                    <img src="${powerImg}" alt="Power Plants" />
                                </div>
                            </div>
                        </div>

                        <!-- Slide 3 -->
                        <div class="showcase-slide" data-index="3">
                            <div class="showcase-grid">
                                <div class="showcase-content">
                                    <h3>4. Food Processing Facilities</h3>
                                    <p>Clean, consistent thermal energy ideal for strict food-grade processing and dehydration.</p>
                                    <ul class="app-list">
                                      <li>Food-safe, clean-burning thermal energy for industrial ovens</li>
                                      <li>Precision temperature control for roasting and dehydration</li>
                                      <li>A zero-toxicity alternative to traditional fossil fuels</li>
                                    </ul>
                                </div>
                                <div class="showcase-image">
                                    <img src="${foodImg}" alt="Food Processing" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    `;
};

