import React from "react";
import HomeGrid from "../components/HomeGrid.js";
import Footer from "../components/Footer.js";
import NavBar from "../components/NavBar";


function Home(props) {
  return (
    <div style={{ backgroundImage: "linear-gradient(#D9F2E8, white, white)" }}>
      
      <NavBar page="home" isLoggedIn={props.isLoggedIn} />
      <div style={{ maxWidth: "1584px", margin: "auto" }}>
        <HomeGrid isLoggedIn={props.isLoggedIn} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
