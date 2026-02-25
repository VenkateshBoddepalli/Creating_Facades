import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import "./WhatsAppButton.css";

function WhatsAppButton() {

  const phoneNumber = "919177370914";
  const message = `Hello,I visited your website.I would like to know more details.Thank you.`;


  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
  <IconButton onClick={handleClick} className="whatsapp-btn">
    <WhatsAppIcon className="whatsapp-icon" />
  </IconButton>
  );
}

export default WhatsAppButton;
