import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection/NavigationHeaderSection";
import { OurProcessSection } from "./sections/OurProcessSection";
import { PressReleasesSection } from "./sections/PressReleasesSection/PressReleasesSection";
import { ServicesOfferedSection } from "./sections/ServicesOfferedSection/ServicesOfferedSection";

export const HomeFinal = (): JSX.Element => {
  return (
<div className="flex flex-col w-full bg-white overflow-hidden mt-[120px] max-[1000px]:mt-[100px] max-[680px]:mt-[80px]">
<NavigationHeaderSection />
      <div id="hero">
        <HeroBannerSection />
      </div>
      <MainContentSection />
      <div id="services">
        <ServicesOfferedSection />
      </div>
      <div id="case-studies">
        <CaseStudiesSection />
      </div>
      <div id="about">
        <AboutUsSection />
      </div>
      <OurProcessSection />
      <PressReleasesSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};
