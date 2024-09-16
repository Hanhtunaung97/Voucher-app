import React from "react";
import { ContainerComponent, ModuleBtnComponent } from "../components";
import { FaDatabase } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";

const HomePage = () => {
  return (
    <ContainerComponent>
      <section className=" gap-10 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Products Module"
            icon={<FaDatabase className="size-14" />}
            url="/products"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Sale Module"
            icon={<MdMonitorHeart className="size-14" />}
            url="/sale"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Voucher Module"
            icon={<FaFileInvoiceDollar className="size-14" />}
            url="/vouchers"
          />
        </div>
      </section>
    </ContainerComponent>
  );
};

export default HomePage;
