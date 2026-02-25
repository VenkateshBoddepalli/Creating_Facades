import React, { useState} from "react";
import "./ProductList.css";

import LayersIcon from "@mui/icons-material/Layers";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import WindowIcon from "@mui/icons-material/Window";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BusinessIcon from "@mui/icons-material/Business";

const ProductList = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="product-container">
      <h2 className="title">Our Solutions</h2>

      {/* Buttons */}
      <div className="button-group">
        <button
          className={activeTab === "products" ? "active" : ""}
          onClick={() => setActiveTab("products")}
        >
          Our Products
        </button>

        <button
          className={activeTab === "dealership" ? "active" : ""}
          onClick={() => setActiveTab("dealership")}
        >
          Dealership With
        </button>
      </div>

      {/* Content */}
      <div className="content-box">
        {activeTab === "products" && (
          <div className="card-grid">
            <div className="card">
              <LayersIcon className="icon" />
              <h3>High Pressure Laminates (HPL)</h3>
              <p>
                Scratch-resistant, UV-stable sheets ideal for exterior cladding,
                with fire-retardant options and diverse designs.
              </p>
            </div>

            <div className="card">
              <ViewQuiltIcon className="icon" />
              <h3>Aluminium Composite Panels (ACP)</h3>
              <p>
                Lightweight, corrosion-resistant panels with PVDF coatings for
                bold and fire-safe facades.
              </p>
            </div>

            <div className="card">
              <WbSunnyIcon className="icon" />
              <h3>Louvers</h3>
              <p>
                Aluminum vertical systems for sun control, ventilation, privacy,
                and energy efficiency.
              </p>
            </div>

            <div className="card">
              <WindowIcon className="icon" />
              <h3>Glass Solutions</h3>
              <p>
                IGUs and tinted glass for thermal efficiency, natural light,
                and sleek curtain wall designs.
              </p>
            </div>

             <div className="card">
              <WindowIcon className="icon" />
              <h3>Baffle Ceiling</h3>
              <p>
                IGUs and tinted glass for thermal efficiency, natural light,
                and sleek curtain wall designs.
              </p>
            </div>


             <div className="card">
              <WindowIcon className="icon" />
              <h3>Facade Designing</h3>
              <p>
                Designing and tinted Designing for thermal efficiency, natural light,
                and sleek curtain wall designs.
              </p>
            </div>

          </div>
        )}

        {activeTab === "dealership" && (
          <div className="card-grid">
            <div className="card">
              <BusinessIcon className="icon" />
              <h3>HPL Brands</h3>
              <ul>
                <li>Century Exteria HPL Board</li>
                <li>Greenlam</li>
                <li>ThunderX</li>
                <li>Pride Laminates</li>
              </ul>
            </div>

            <div className="card">
              <BusinessIcon className="icon" />
              <h3>ACP Brands</h3>
              <ul>
                <li>VIVA Aluminium Composite Panels</li>
                <li>Aludecor</li>
                <li>Eurobond</li>
                <li>Alstone</li>
                <li>Alex ACP</li>
                <li>Pioneer</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

