import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import UserProfileChangeImageComponent from "../components/UserProfileChangeImageComponent";
const UserProfileChangeImagePage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          links={[{ name: "User Profile", path: "/dashboard/user-profile" }]}
          currentPageTitle="Change Image"
        />
        <UserProfileChangeImageComponent />
      </ContainerComponent>
    </section>
  );
};

export default UserProfileChangeImagePage;
