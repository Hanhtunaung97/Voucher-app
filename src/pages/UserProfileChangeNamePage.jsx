import React from "react";
import {
  BreadCrumbComponent,
  ContainerComponent,
  UserProfileChangeNameComponent,
} from "../components";
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
