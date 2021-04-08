import React from "react";
import Link from "next/link";
import DoubleGridBg from "./utility/DoubleGridBg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function About() {
  return (
    <div className="relative z-30 bg-gray-50 overflow-hidden" id="about">
      <DoubleGridBg />
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center container">
            <h1 className="tracking-tight font-bold text-togahacks-secondary-bright  text-4xl md:text-5xl">
              <div className="text-togahacks-primary-main mb-2">
                Build and innovate.
              </div>
              <div>Turn your ideas into reality.</div>
            </h1>
            <div className="mt-3 max-w-md mx-auto text-gray-500 text-lg md:text-xl md:mt-5 md:max-w-3xl">
              <p className="mb-2">
                <b>
                  Toga Hacks I is a 24-hour programming event where high school
                  students all over Silicon Valley come together to develop a
                  software or hardware project!
                </b>{" "}
                Thanks to{" "}
                <AnchorLink
                  href="#sponsors"
                  className="blue-link"
                  offset="60px"
                >
                  our sponsors
                </AnchorLink>
                , Toga Hacks I will be completely free.{" "}
              </p>
              <p>
                <i>
                  Toga Hacks I is currently postponed due to COVID-19. Stay
                  tuned for updates!
                </i>
              </p>
            </div>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md">
                <AnchorLink
                  offset="60px"
                  href="#schedule"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-togahacks-secondary-bright hover:bg-togahacks-secondary-main md:py-4 md:text-lg md:px-10 trans-300"
                >
                  View Schedule
                </AnchorLink>
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <AnchorLink
                  offset="60px"
                  href="#faq"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-togahacks-secondary-main bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10 trans-300"
                >
                  View FAQ
                </AnchorLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
