import React from "react";
import JourneySection from "../../Journey/journey";
import CollectionSection from "../../collections/collectionSection";
import BlogSection from "../../blog/blogSection";
import NewsletterSection from "../../newsletter/newsletter";
import LandingPage from "../../Hero Page/landingPage";

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <JourneySection />
      <CollectionSection />
      <BlogSection />
      <NewsletterSection />
      {/* <FooterSection /> */}
      {/* <CollectionsPage /> */}
      {/* <IndividualCollection /> */}
    </>
  );
};

export default HomePage;
