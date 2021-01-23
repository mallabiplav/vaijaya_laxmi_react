import React from "react";
import ReactDom from "react-dom";
import "./css/index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterSection from "./footer/footerSection";
import CollectionsPage from "./pages/Collection Page/collectionsPage";
import IndividualCollection from "./pages/individual-collection-page/individual-collection";
import HomePage from "./pages/Home Page/home-page";
import NavigationBar from "./navigation_bar/navigationBar";
import JourneyPage from "./pages/Journey Page/journey-page";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/products/rugs">
        <CollectionsPage />
      </Route>
      <Route path="/journey">
        <JourneyPage />
      </Route>
      <Route
        path="/products/rugs/:collectionName"
        children={<IndividualCollection />}
      ></Route>

      <FooterSection />
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
