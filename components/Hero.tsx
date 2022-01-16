import React from "react";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-togahacks-secondary-main bg-no-repeat bg-center min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/backgrounds/hero.png')",
      }}
      id="hero"
    >
      <div className="container relative sm:pb-12 sm:pt-9 md:pt-6 xl:pt-0">
        <main className="mt-5 md:mt-20">
          <div className="mx-auto">
            <div className="text-center md:max-w-3xl mx-auto">
              <img
                className="block h-48 lg:h-56 mx-auto w-auto"
                src="/img/logos/logo-white.png"
                alt="toga hacks logo"
              />
              <h1 className="mt-4 text-6xl tracking-tight font-bold text-togahacks-primary-main sm:mt-5 lg:mt-6 lg:text-7xl xl:text-7xl">
                Toga <span className="text-white">Hacks</span> I
              </h1>
              <div className="mt-3 text-2xl text-gray-300 sm:mt-5 lg:text-3xl">
                Silicon Valley, CA. Coming soon in 2022.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
