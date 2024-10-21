import React from "react";
import {
  BreadCrumbComponent,
  ContainerComponent,
  UserProfileChangePasswordComponent,
} from "../components";
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
