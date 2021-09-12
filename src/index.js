import React from "react";
import ReactDom from "react-dom";
import "./css/index.css";
import "./css/loading.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FooterSection from "./components/footer/footerSection";
import CollectionsPage from "./pages/Collection Page/collectionsPage";
import IndividualCollection from "./pages/individual-collection-page/individual-collection";
import HomePage from "./pages/Home Page/home-page";
import NavigationBar from "./components/navigation_bar/navigationBar";
import JourneyPage from "./pages/Journey Page/journey-page";
import ScrollToTop from "./components/scrollToTop";
import AboutUsPage from "./pages/About Us/about-us";
import ContactUsPage from "./pages/Contact Us/contactUsPage";
import Communications from "./pages/Communications/communications";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/products/rugs">
        <CollectionsPage />
      </Route>
      <Route
        path="/products/rugs/:collectionName"
        children={<IndividualCollection />}
      ></Route>
      <Route path="/journey">
        <JourneyPage />
      </Route>
      <Route path="/about-us">
        <AboutUsPage />
      </Route>
      <Route path="/contact">
        <ContactUsPage />
      </Route>
      <Route path="/communications">
        <Communications />
      </Route>
      <FooterSection />
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
