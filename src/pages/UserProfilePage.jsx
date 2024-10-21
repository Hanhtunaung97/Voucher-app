import React from "react";
import {
  BreadCrumbComponent,
  ContainerComponent,
  UserProfileComponent,
} from "../components";
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
