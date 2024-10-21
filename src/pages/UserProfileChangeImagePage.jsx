import React from "react";
import {
  BreadCrumbComponent,
  ContainerComponent,
  UserProfileChangeImageComponent,
} from "../components";
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
