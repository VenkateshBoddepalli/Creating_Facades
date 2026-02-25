import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolToTop = () =>{

    const {pathname} =useLocation();

    useEffect(()=> {
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
      });
    }, [pathname]);
return null;
};
export default ScrolToTop;