import React from "react";
import {
  ContainerComponent,
  LogoutBtnComponent,
  ModuleBtnComponent,
} from "../components";
import { FaDatabase } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi2";

const HomePage = () => {
  return (
    <ContainerComponent>
      <section className=" gap-10 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Products Module"
            icon={<FaDatabase className="size-14" />}
            url="/dashboard/products"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Sale Module"
            icon={<MdMonitorHeart className="size-14" />}
            url="/dashboard/sale"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Voucher Module"
            icon={<FaFileInvoiceDollar className="size-14" />}
            url="/dashboard/vouchers"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Profile Module"
            icon={<HiUserCircle className="size-14" />}
            url="/dashboard/user-profile"
          />
        </div>
        <div className="col-span-1 ">
          <div className="flex font-semibold items-center gap-3 w-full flex-col shadow-md rounded-lg p-3 text-blue-500 transition-all  text-sm  duration-200 hover:scale-105 hover:-translate-y-0.5">
            <p className="text-center">If you finish your work,Please</p>
            <LogoutBtnComponent />
          </div>
        </div>
      </section>
    </ContainerComponent>
  );
};

export default HomePage;
