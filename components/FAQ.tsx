import React from "react";

import questions from "../data/faq";

export default function FAQ() {
  return (
    <div className="bg-togahacks-primary-dark" id="faq">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 border-t border-red-200 border-opacity-50 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
            {questions.map(({ q, a }) => (
              <div key={q}>
                <dt className="text-lg leading-6 font-semibold text-white">
                  {q}
                </dt>
                <dd className="mt-2 text-base text-red-200">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
