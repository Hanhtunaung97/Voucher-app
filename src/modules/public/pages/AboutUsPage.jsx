import React from "react";
import { ContainerComponent } from "../../../components";
import AboutUsHeroSectionComponent from "../components/AboutUsHeroSectionComponent";
import AboutUsTestimonialComponent from "../components/AboutUsTestimonialComponent";

const AboutUsPage = () => {
  return (
    <section>
      <ContainerComponent>
        <AboutUsHeroSectionComponent />
        <AboutUsTestimonialComponent />
      </ContainerComponent>
    </section>
  );
};

export default AboutUsPage;
