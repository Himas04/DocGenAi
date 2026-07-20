import React from "react";

function Section2() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-950 px-6 md:px-20 lg:px-40 py-10 md:py-20 gap-12 md:gap-20 min-h-screen">
      <div className="w-full max-w-[600px]">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-bold">
          {" "}
          The Problem{" "}
        </h2>
        <div className="flex gap-5 mt-12">
          <i className="fa-solid fa-sack-dollar text-yellow-500 text-3xl shrink-0" />
          <div>
            <p className="font-bold text-white leading-8">
              {" "}
              Hiring lawyers is expensive
            </p>
            <p className="text-mist-400">
              {" "}
              Legal services can cost thousands for simple documents{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-6">
          <i className="fa-solid fa-alarm-clock text-white text-3xl shrink-0" />
          <div>
            <p className="font-bold text-white leading-8">
              {" "}
              Legal documents take time
            </p>
            <p className="text-mist-400">
              Traditional drafting takes weeks or months{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-6">
          <i className="fa-solid fa-book-open text-white text-3xl shrink-0" />
          <div>
            <p className="font-bold text-white leading-8">
              {" "}
              Confusing legal language{" "}
            </p>
            <p className="text-mist-400">
              {" "}
              Complex jargon makes documents hard to understand{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[600px] border border-red-400 rounded-3xl p-6 md:p-8 bg-orange-700/10">
        <h4 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-bold">
          Our Solution
        </h4>
        <p className="text-mist-400 mt-7 leading-8">
          Our AI creates clear, ready-to-use legal documents tailored to your
          business in minutes. No legal jargon. No confusion. Just documents you
          can understand and use immediately.
        </p>
        <div className="flex gap-3 mt-8">
          <i className="fa-solid fa-circle-check text-red-600 text-xl shrink-0" />
          <p className="font-bold text-white">Save thousands on legal fees</p>
        </div>
        <div className="flex gap-3 mt-3">
          <i className="fa-solid fa-circle-check text-red-600 text-xl shrink-0" />
          <p className="font-bold text-white">
            Get documents in minutes, not months
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          <i className="fa-solid fa-circle-check text-red-600 text-xl shrink-0" />
          <p className="font-bold text-white">Clear, plain English language</p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
