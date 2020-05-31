import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
