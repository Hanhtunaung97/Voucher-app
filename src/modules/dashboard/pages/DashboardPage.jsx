import React from "react";
import { ContainerComponent, LogoutBtnComponent } from "../../../components";
import ModuleBtnComponent from "../components/ModuleBtnComponent";
import {
  LuBadgeDollarSign,
  LuDatabase,
  LuMonitorCheck,
  LuUserCircle,
} from "react-icons/lu";

const DashboardPage = () => {
  return (
    <ContainerComponent>
      <section className=" gap-10 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Products Module"
            icon={<LuDatabase className="size-14" />}
            url="/dashboard/products"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Sale Module"
            icon={<LuMonitorCheck className="size-14" />}
            url="/dashboard/sale"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Voucher Module"
            icon={<LuBadgeDollarSign className="size-14" />}
            url="/dashboard/vouchers"
          />
        </div>
        <div className="col-span-1">
          <ModuleBtnComponent
            name="Profile Module"
            icon={<LuUserCircle className="size-14" />}
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

export default DashboardPage;
