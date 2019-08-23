import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Grid, Row, Col } from "react-bootstrap";
import HomePage from "../HomePage/HomePage";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";
import ApplyPage from "../ApplyPage/ApplyPage";
import AboutPage from "../AboutPage/AboutPage";
import ResourcesPage from "../ResourcesPage/ResourcesPage";
import DonatePage from "../DonatePage/DonatePage";
import ContactPage from "../ContactPage/ContactPage";
import MapsPage from "../MapsPage/MapsPage";
import ApplicationPage from "../ApplicationPage/ApplicationPage";
import ProcessPage from "../AboutPage/ProcessPage";
import NewsPage from "../AboutPage/NewsPage";
import PartnerPages from "../AboutPage/PartnerPages";
import VeteransPage from "../ResourcesPage/VeteransPage";
import GreenStreets from "../ResourcesPage/GreenStreets";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div className="site-content">
          <Switch>
            <Route
              exact
              path="/"
              render={({ history }) => <HomePage history={history} />}
            />
            <Route
              exact
              path="/apply"
              render={({ history }) => <ApplyPage history={history} />}
            />
            <Route
              exact
              path="/about"
              render={({ history }) => <AboutPage history={history} />}
            />
            <Route
              exact
              path="/about/ourprocess"
              render={({ history }) => <ProcessPage history={history} />}
            />
            <Route
              exact
              path="/about/news"
              render={({ history }) => <NewsPage history={history} />}
            />
            <Route
              exact
              path="/about/partner"
              render={({ history }) => <PartnerPages history={history} />}
            />
            <Route
              exact
              path="/resources"
              render={({ history }) => <ResourcesPage history={history} />}
            />
            <Route
              exact
              path="/resources/veterans"
              render={({ history }) => <VeteransPage history={history} />}
            />
            <Route
              exact
              path="/resources/greenstreets"
              render={({ history }) => <GreenStreets history={history} />}
            />
            <Route
              exact
              path="/donate"
              render={({ history }) => <DonatePage history={history} />}
            />
            <Route
              exact
              path="/contactus"
              render={({ history }) => <ContactPage history={history} />}
            />
            <Route
              exact
              path="/confirmation"
              render={({ history }) => <ConfirmationPage history={history} />}
            />
            <Route
              exact
              path="/map"
              render={({ history }) => <MapsPage history={history} />}
            />
            <Route
              exact
              path="/applicationpage"
              render={({ history }) => <ApplicationPage history={history} />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
