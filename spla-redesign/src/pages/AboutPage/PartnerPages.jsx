import React from "react";
import "./AboutPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import AboutPageNav from "../../components/PageNavs/AboutPageNav";

const PartnerPages = props => {
  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/582dc9ea6a4963e5091cd8cd/1540780008740-YRR5T16QIGBKI7RYTCXM/ke17ZwdGBToddI8pDm48kA_Ksi6rUAMcghH-kTXLxH97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcduKWfxEIyTerzyH-R9k5K2Z-iAV1i-qW9ns5B3Z6BawAmYg09eZ-nMcZEAiM1A6Q/image-asset.jpeg?format=300w"
          alt="Safe Parking LA"
          className="home-story-img"
        />
        <AboutPageNav />
        <Col xs={12} className="home-story">
          <h3>Saying Yes to Being a Safe Parking Partner</h3> <br />
          <h4>1. INSURANCE</h4>
          <p className="story">
            Safe Parking LA (SPALA) will list your institution as an additional
            insured to our already $1,000,000- $2,000,000 policy. In addition,
            each vehicle dweller is required to have their own motor vehicle
            insurance.
          </p>
          <br />
          <h4>2. VANDALISM</h4>
          <p className="story">
            Safe Parking LA has been running 5 sites (as of Oct 24, 2018) with
            60 vehicles and 75 people with 2 calls to LAPD. In both instances,
            the Safe Parking LA security guards thwarted vandals from outside
            the program. The Safe Parking program served as a deterrent to
            criminal activity by others. The Koreatown lot is shared with people
            living in their cars, 10 year old boys playing basketball, and a
            preschool which rents their space from the church. There are bands
            which use the church as well while the vehicle dwellers settle in
            for the night. The Santa Barbara program with 125 vehicles (Cars and
            RVs) which has been in existence for over 14 years has not
            experienced 1 instance of vandalism and in fact the Santa Barbara
            Police Department has acknowledged the reduction in calls and
            citations re: people living in their vehicles. The San Diego program
            with 75 and soon to be 115 spaces and has been around for 10 years
            has had 2 episodes of vandalism. Those instances were not from the
            vehicle dwellers, but from people outside of the program. People
            living in their vehicles serve as a deterrent to vandalism and are
            not the source of it. In Santa Barbara, there are preschools and
            evening programs which co-exist with Safe Parking in the same lot.
            None of the schools associated with Safe Parking Santa Barbara have
            seen a loss of student populace in the 13 years. Certainly no crime
            against the children has occurred.
          </p>
          <br />
          <h4>3. COST OF THE PROGRAM</h4>
          <p className="story">
            The Safe Parking program does not cost anything. Each private
            parking lot owner gets a $500 stipend for soft costs that the lot
            owner might bear such as water and electricity.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default PartnerPages;
