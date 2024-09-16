import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useLocation } from "react-router-dom";
import ProjectRoute from "../Projects/ProjectRoute";
import ScrollAnimation from "react-animate-on-scroll";
const Project = () => {
  const location = useLocation();

  return (
    <section id="projects" className="py-10 text-white">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Projects</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
        </div>
      </ScrollAnimation>
      <br />
      <div className="lg:flex border-2 md:flex sm:block border-none justify-center gap-10 text-[25px] font-math mb-4 text-center ">
        <div>
          <Link
            to="/bigprojects"
            className={`text-blue-500 ${
              location.pathname === "/bigprojects" || location.pathname === "/" ? "text-white" : ""
            }`}
          >
            Big Projects
          </Link>
        </div>
        <div>
          <Link
            to="/miniprojects"
            className={`text-blue-500 ${
              location.pathname === "/miniprojects" ? "text-white" : ""
            }`}
          >
            Mini Projects
          </Link>
        </div>
      </div>
      <ProjectRoute />
    </section>
  );
};

export default Project;
