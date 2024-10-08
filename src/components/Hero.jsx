import React from "react";
import hero from "../assets/images/home.png";
import Textloop from "./Textloop";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaBlogger } from "react-icons/fa";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  const social_media = [
    { social_logo: <BsGithub />, link: "https://github.com/rajkumar7859" },
    {
      social_logo: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rajkumar-vishwakarma-32772a209/",
    },
    {
      social_logo: <FaBlogger />,
      link: "https://medium.com/@Rajkumar_Vishwakarma",
    },
    {
      social_logo: <AiFillCodeSandboxCircle />,
      link: "https://codesandbox.io/dashboard/drafts?workspace=39fe24b1-58d8-4015-8690-3314a29575be",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <ScrollAnimation animateIn="fadeInLeft">
        <div className="flex-1 flex items-center justify-center h-full">
          <img
            src={hero}
            alt="heroImage"
            className="md:w-11/12 h-full object-cover "
          />
        </div>
      </ScrollAnimation>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <ScrollAnimation animateIn="fadeInUp">
            <h1 className=" intro md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
              <span className="text-cyan-600 md:text-6xl text-5xl">
                Hello!
                <br />
              </span>
              My Name is <span>Rajkumar</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h3 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-[rgb(4_229_255)] ">
              <Textloop />
            </h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1DOW-990HrV3-6if9hzDT7M5aNI8diMdf"
              download
            >
              <button className="btn-primary mt-8 hover:translate-y-[-5px] hover:shadow-[0px_5px_10px_2px_rgb(0_139_255/70%)]">Download CV</button>
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
              {social_media?.map((icon) => (
                <div
                  key={icon}
                  className="text-gray-600 hover:text-white cursor-pointer "
                >
                  <a href={icon.link} rel="noopener noreferrer" target="_blank">
                    <div>{icon.social_logo}</div>
                  </a>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
