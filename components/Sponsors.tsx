import React from "react";
import DoubleGridBg from "./utility/DoubleGridBg";
import sponsors from "./../data/sponsors";
import partners from './../data/partners';

export default function Sponsors() {
  return (
    <div className="bg-gray-50 relative overflow-hidden" id="sponsors">
      <DoubleGridBg color="text-gray-600" />
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="pt-10 pb-4">
          <h2 className="text-5xl text-center font-bold text-gray-900">
            Partners
          </h2>
          <div className="flow-root mt-8 mb-14 lg:mt-3 lg:mb-10">
            <div className="flex flex-wrap sm:flex-row justify-center">
              {partners.map((p) => {
                let key = p.name.replace(/[\W_]+/g, "-").toLowerCase();
                return (
                  <div
                    key={key}
                    className="mt-4 px-4 lg:py-4 lg:px-8 items-center flex"
                  >
                    <a href={p.link} target="_blank">
                      <img
                        className="my-2 sm:my-0 w-64 h-auto lg:w-72 mx-auto"
                        src={`/img/sponsors/partners/${key}.png`}
                        alt={p.name}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <h2 className="text-5xl text-center font-bold text-gray-900">
            Sponsors
          </h2>
          <div className="flow-root mt-8 lg:mt-6 pb-6">
            <div className="flex flex-wrap sm:flex-row justify-center">
              {sponsors.map((s) => {
                let key = s.name.replace(/[\W_]+/g, "-").toLowerCase();
                return (
                  <div
                    key={key}
                    className="mt-4 px-4 lg:py-4 lg:px-8 items-center flex"
                  >
                    <a href={s.link} target="_blank">
                      <img
                        className="my-2 sm:my-0 w-36 h-auto lg:w-48 mx-auto"
                        src={`/img/sponsors/${key}.png`}
                        alt={s.name}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
