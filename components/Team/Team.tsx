import React from "react";
import TeamMember from "./TeamMember";

import teamMembers from "../../data/team";
import advisors from './../../data/advisors';

export default function Team() {
  return (
    <div className="bg-white" id="team">
      <div className="max-w-7xl mx-auto py-16 px-4 text-center sm:px-6 lg:px-8 lg:py-20 mb-2">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold text-togahacks-secondary-bright tracking-tight sm:text-4xl -mb-4">
              Our Team
            </h2>
            {/* <p className="text-xl text-gray-500">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p> */}
          </div>
          <ul className="mx-auto flex md:flex-wrap align-middle justify-center flex-col md:flex-row lg:max-w-7xl">
            {teamMembers.map((member: any) => {
              let key = member.name.replace(/[\W_]+/g, "-").toLowerCase();
              return (
                <TeamMember
                  key={key}
                  name={member.name}
                  position={member.position}
                  imgSrc={`/img/team/${key}.jpg`}
                  email={
                    member.email
                      ? member.email
                      : `${member.name
                          .split(" ")[0]
                          .toLowerCase()}@togahacks.org`
                  }
                  github={member.github}
                  linkedin={member.linkedin}
                />
              );
            })}
          </ul>
        </div>

        <div className="space-y-12 pt-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold text-togahacks-secondary-bright tracking-tight sm:text-4xl -mb-4">
              Our Advisors
            </h2>
            {/* <p className="text-xl text-gray-500">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p> */}
          </div>
          <ul className="mx-auto flex sm:flex-wrap align-middle justify-center flex-col sm:flex-row lg:max-w-7xl">
            {advisors.map((member: any) => {
              let key = member.name.replace(/[\W_]+/g, "-").toLowerCase();
              return (
                <TeamMember
                  key={key}
                  name={member.name}
                  position={member.position}
                  imgSrc={`/img/team/advisors/${key}.jpg`}
                  github={member.github}
                  linkedin={member.linkedin}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
