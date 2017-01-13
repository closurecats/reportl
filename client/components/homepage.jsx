import React from 'react';
import { Link } from 'react-router';

const Homepage = () => (
  <div>
    <img
      role="presentation"
      className="homePagePhoto heroPhoto"
      src="/api/files/17"
    />
    <p><strong>The</strong> tool for managing a school</p>

    <Link to="/login">
      <button>
        Login
      </button></Link>


    <div className="homepageTextBlock">
      <p className="homepageText">reportl is an application for allowing teachers, schools,
         and students to navigate the complex demands of education.</p>
    </div>

    <img
      role="presentation"
      className="homePagePhoto"
      src="/api/files/18"
    />


    <div className="homepageTextBlock">
      <p className="homepageText">All information is integrated in one place making access,
         updates, and insight lightning-fast.</p>
    </div>

    <img
      role="presentation"
      className="homePagePhoto"
      src="/api/files/19"
    />

    <div className="homepageTextBlock">
      <p className="homepageText">It features an intuitive calendar, class view, analytics
        , course catalog and directory to help teachers and students enjoy going to school.</p>
    </div>

  </div>
);


export default Homepage;
