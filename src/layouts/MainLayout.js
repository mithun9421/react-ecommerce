import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const MainLayout = (props) => {
  console.log("props", props);
  return (
    <div>
      <Header {...props} />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
