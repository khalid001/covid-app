import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";



export default function Dashboard() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
      <Content />
    </div>
  );
}
