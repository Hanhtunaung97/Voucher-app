import React from "react";
import { BreadCrumbComponent, ContainerComponent } from "../../../components";
import UserProfileComponent from "../components/UserProfileComponent";

const UserProfilePage = () => {
  return (
    <section>
      <ContainerComponent>
        <BreadCrumbComponent currentPageTitle="User Profile" />
        <UserProfileComponent />
      </ContainerComponent>
    </section>
  );
};

export default UserProfilePage;
