import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Joinus from "./components/Joinus";
import Info from "./components/Info";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-rose-100 via-purple-50 to-fuchsia-100 ">
      <Hero />
      <section className="mt-5 lg:mt-44 p-20 ">
        <Joinus />
      </section>
      <Info />
    </main>
  );
};

export default Home;
