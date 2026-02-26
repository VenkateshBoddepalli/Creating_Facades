import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import "./WhatsAppButton.css";

function WhatsAppButton() {

  const phoneNumber = "917777007360";
  const message = `Dear EMAAR,
  I'm interested in one of your properties. Would appreciate if you can get back to me soon.Thank you.`;


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
