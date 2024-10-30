import React from "react";
import ContainerComponent from "../utilities/ContainerComponent";
import { Link } from "react-router-dom";
import userProfile from "../../assets/images/userProfile.png";
import useCookie from "react-use-cookie";
import useUserStore from "../../store/useUserStore";
const HeaderComponent = () => {
  // const [userCookie] = useCookie("user_cookie");
  // console.log(userCookie);
  // const { name, email, profile_image } = JSON.parse(userCookie);
  const {
    user: { name, email, profile_image },
  } = useUserStore();
  return (
    <header className="mb-5 print:hidden">
      <ContainerComponent>
        <div className="flex justify-between items-center py-5">
          <div className="flex flex-col gap-1 ">
            <Link
              to={"/dashboard"}
              className="font-heading font-bold text-lg md:text-2xl text-slate-800"
            >
              Voucher Management
            </Link>
            <h5 className="font-medium text-slate-500 text-sm md:text-base">
              MMS Software
            </h5>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={profile_image ? profile_image : userProfile}
              alt="profile"
              className="size-10 object-contain object-top"
            />
            <div className="flex flex-col items-start">
              <Link
                to={"/dashboard/user-profile"}
                className="font-heading font-bold text-base md:text-lg text-slate-800"
              >
                {name}
              </Link>
              <h5 className="font-medium text-slate-500 text-xs md:text-sm">
                {email}
              </h5>
            </div>
          </div>
        </div>
      </ContainerComponent>
    </header>
  );
};

export default HeaderComponent;
