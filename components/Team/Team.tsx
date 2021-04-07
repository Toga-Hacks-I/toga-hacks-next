import React from "react";
import TeamMember from "./TeamMember";

import teamMembers from "../../data/team";

export default function TeamMemberGrid() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-14 mb-2">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl -mb-4">
              Meet our Team
            </h2>
            {/* <p className="text-xl text-gray-500">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p> */}
          </div>
          <ul className="mx-auto justify-center flex flex-wrap flex-col sm:flex-row">
            {teamMembers.map((member) => {
              let key = member.name.replace(/[\W_]+/g, "-").toLowerCase();
              return (
                <TeamMember
                  key={key}
                  name={member.name}
                  position={member.position}
                  imgSrc="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
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
      </div>
    </div>
  );
}
