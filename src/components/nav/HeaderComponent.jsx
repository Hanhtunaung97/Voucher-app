import React from "react";
import ContainerComponent from "../utilities/ContainerComponent";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="mb-5 print:hidden">
      <ContainerComponent>
        <div className="flex flex-col gap-1 py-5">
          <Link to={"/"} className="font-heading font-bold text-lg md:text-2xl text-slate-800">
            Voucher Management
          </Link>
          <h5 className="font-medium text-slate-500 text-sm md:text-base">
            MMS Software
          </h5>
        </div>
      </ContainerComponent>
    </header>
  );
};

export default HeaderComponent;
