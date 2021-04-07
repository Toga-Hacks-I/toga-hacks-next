import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function TeamMember({
  name,
  position,
  imgSrc,
  email,
  github,
  linkedin,
}: TeamMemberProps) {
  return (
    <div className="md:w-1/2 py-6 lg:w-1/3 xl:w-1/4 p-1">
      <div className="space-y-6">
        <img
          className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 bg-togahacks-secondary-main"
          src={imgSrc}
          alt={name}
        />
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="leading-6 font-bold text-togahacks-primary-main text-lg">
              {name}
            </h3>
            <p className="text-togahacks-secondary-main text-md">{position}</p>
          </div>
          <ul className="flex justify-center">
            {[
              { href: github, icon: faGithub, sr: "github" },
              {
                href: linkedin,
                icon: faLinkedin,
                sr: "linkedin",
              },
              {
                href: email ? "mailto:" + email : "",
                icon: faEnvelope,
                sr: "email",
              },
            ].map(({ href, sr, icon }) => (
              <div key={sr}>
                {href && (
                  <li className="px-2.5">
                    <a
                      href={href}
                      target="_blank"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{sr}</span>
                      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                    </a>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type TeamMemberProps = {
  name: string;
  position: string;
  imgSrc: string;
  email?: string;
  github?: string;
  linkedin?: string;
};
