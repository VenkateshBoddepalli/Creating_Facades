import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Divider,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./MaterialsAccordion.css";

const data = [
  {
    title: "High Pressure Laminates",
    items: [
      "Century High Pressure Laminates",
      "Greenlam High Pressure Laminates",
      "ThunderX High Pressure Laminates",
      "Fundermax High Pressure Laminates",
      "Pride High Pressure Laminates",
      "Merino High Pressure Laminates",
      "Royal Touche High Pressure Laminates",
      "Stylam High Pressure Laminates",
    ],
  },
  {
    title: "Aluminium Composite Panels",
    items: [
      "Viva Aluminium Composite Panels",
      "Aludecor Aluminium Composite Panels",
      "Eurobond Aluminium Composite Panels",
      "Alstone Aluminium Composite Panels",
      "Alex Aluminium Composite Panels",
      "Alumaze Aluminium Composite Panels",
    ],
  },
  {
    title: "Baffle Ceilings",
    items: [
      "LD Square",
      "Gypstonite",
      "Hunter Douglas",
      "Amstrong",
      "Vindisil Architectural Products",
      "Metalium Multitech Products",
    ],
  },
];

const MaterialsAccordion = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef();

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box ref={containerRef} className="materials-wrapper">
      <div elevation={4} className="materials-container">
        {data.map((section, index) => (
          <React.Fragment key={index}>
            <Box
              onClick={(e) => handleClick(e, index)}
              className="materials-item"
            >
              <Typography className="materials-title">
                {section.title.toUpperCase()}
              </Typography>

              <ExpandMoreIcon
                className={`arrow-icon ${
                  activeIndex === index ? "rotate" : ""
                }`}
              />
            </Box>

            {index !== data.length - 1 && (
              <Divider orientation="vertical" flexItem className="divider" />
            )}
          </React.Fragment>
        ))}
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transitionDuration={300}
        PaperProps={{
          className: "dropdown-menu",
        }}
      >
        {activeIndex !== null &&
          data[activeIndex].items.map((item, i) => (
            <MenuItem key={i} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default MaterialsAccordion;
