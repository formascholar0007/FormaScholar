import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import aboutImage from "../assets/Image4.svg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="md:py-32 py-12 overflow-hidden bg-gray-50  md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hey 👋
              <br className="block sm:hidden" />
              There
            </h2>
            <p className="max-w-4xl mt-3 text-xl leading-10 text-gray-600  md:mt-8">
              Welcome to FormaScholar, your go-to place for learning cool stuff
              about Math and Science! FormaScholar is all about helping you get
              better at school stuff. We know learning can be tricky sometimes,
              so we made our website super easy to use. It's like hanging out
              with your friends while you learn. You'll find it's simple to
              navigate and find what you need. Plus, we're serious about keeping
              things safe and secure. Our website uses a special code, so you
              can focus on learning without worrying about anything else. Right
              now, we've got a bunch of stuff for you to explore. But guess
              what? We're always adding more! So, no matter what you're into,
              we've got something for you. Come join us at FormaScholar and
              let's make learning awesome together!
            </p>

            <p className="mt-4 text-xl text-black md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-300"></span>
                <span className="relative"> Meet </span>
              </span>{" "}
              <NavLink
                to="/meetUs"
                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
              >
                the Founders.
              </NavLink>
            </p>
          </div>

          <div className="relative">
            <img
              className="relative md:w-[75%] w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src={aboutImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
