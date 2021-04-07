import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function TeamMember({name, position, imgSrc, email, github, linkedin}: TeamMemberProps) {
    return (
      <li>
        <div className="space-y-6">
          <img
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
            src={imgSrc}
            alt={name}
          />
          <div className="space-y-2">
            <div className="text-lg leading-6 font-medium space-y-1">
              <h3>{name}</h3>
              <p className="text-togahacks-primary-main">{position}</p>
            </div>
            <ul className="flex justify-center space-x-5">
              {[
                {
                  href: linkedin,
                  icon: faLinkedin,
                  sr: "linkedin",
                },
                {
                  href: "mailto:" + email,
                  icon: faEnvelope,
                  sr: "github",
                },
                { href: github, icon: faGithub, sr: "email" },
              ].map(({ href, sr, icon }) => (
                <div key={href}>
                  {github && (
                    <li>
                      <a
                        href={github}
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
      </li>
    );
}

type TeamMemberProps = {
  name: string;
  position: string;
  imgSrc: string;
  email: string;
  github?: string;
  linkedin?: string;
};
