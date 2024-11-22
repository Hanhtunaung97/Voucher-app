import React from "react";
import { ContainerComponent } from "../../../components";
import HeroSectionComponent from "../components/HeroSectionComponent";
import FeatureComponent from "../components/FeatureComponent";

const HomePage = () => {
  return (
    <section>
      <ContainerComponent>
        <HeroSectionComponent />
        <FeatureComponent />
      </ContainerComponent>
    </section>
  );
};

export default HomePage;
