import React from "react";
import JourneySection from "./journey";
import CollectionSection from "./collections/collectionSection";
import BlogSection from "./blog/blogSection";
import NewsletterSection from "./newsletter";
import LandingPage from "./landingPage";

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
