import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import UserProfileChangePasswordComponent from "../components/UserProfileChangePasswordComponent";

const UserProfileChangePasswordPage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          links={[{ name: "User Profile", path: "/dashboard/user-profile" }]}
          currentPageTitle="Change Password"
        />
        <UserProfileChangePasswordComponent />
      </ContainerComponent>
    </section>
  );
};

export default UserProfileChangePasswordPage;
