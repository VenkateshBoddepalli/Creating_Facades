import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./instantNavIcon.css";

const InstantNavIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/instant-meeting"); // change route if needed
  };

  return (
    <Tooltip title="Start Video Call">
      <IconButton onClick={handleClick} className="video-nav-btn">
        <VideoCallIcon />
      </IconButton>
    </Tooltip>
  );
};

export default InstantNavIcon;
