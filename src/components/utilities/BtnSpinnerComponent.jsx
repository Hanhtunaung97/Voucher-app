import React from "react";
import { dotSpinner } from "ldrs";

dotSpinner.register();

const BtnSpinnerComponent = () => {
  return <l-dot-spinner size="16" speed="0.9" color="white"></l-dot-spinner>;
};

export default BtnSpinnerComponent;
