import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import UserProfileChangeNameComponent from "../components/UserProfileChangeNameComponent";
const UserProfileChangeNamePage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent
          links={[{ name: "User Profile", path: "/dashboard/user-profile" }]}
          currentPageTitle="Change Name"
        />
        <UserProfileChangeNameComponent />
      </ContainerComponent>
    </section>
  );
};

export default UserProfileChangeNamePage;
