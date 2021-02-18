import React from 'react';
import {Link } from "@reach/router"
const Home = () => {
  return <div>
  <h1>Home</h1>
  <link to="stylesheet" href=""/>
  <Link to="/usser" id="boton">usser</Link>
  <br/>
  <Link to="/course">course</Link>
  </div>;
};

export default Home;
