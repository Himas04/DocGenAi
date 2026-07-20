import React from "react";

function Section3() {
  return (
    <section className="bg-gray-950 px-6 md:px-20 lg:px-40 py-16 md:py-20">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-bold text-center">
        How It Works
      </h2>
      <p className="text-mist-400 text-center mt-3 text-base md:text-lg">
        Simple, intuitive, and fast. Three steps to your legal documents.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-20">
        <div className="border border-mist-800  bg-gray-800/20 w-full p-8 rounded-xl hover:border-orange-950 hover:bg-mist-300/10 transition duration-300">
          <h3 className="text-orange-950 text-5xl md:text-6xl font-bold">
            {" "}
            01{" "}
          </h3>
          <p className="text-white font-bold mt-3 text-xl">
            {" "}
            Choose a Document Type{" "}
          </p>
          <p className="text-mist-400 mt-4 leading-7">
            {" "}
            Select from NDA, Contract, Privacy Policy, and more{" "}
          </p>
        </div>
        <div className="border border-mist-800 bg-gray-800/20 w-full p-8 rounded-xl hover:border-orange-950 hover:bg-mist-300/10 transition duration-300">
          <h3 className="text-orange-950 text-5xl md:text-6xl font-bold">
            {" "}
            02
          </h3>
          <p className="text-white font-bold mt-3 text-xl">
            Answer Simple Questions
          </p>
          <p className="text-mist-400 mt-4 leading-7">
            Our AI asks just what it needs to know about your business
          </p>
        </div>
        <div className="border border-mist-800 bg-gray-800/20 w-full p-8 rounded-xl hover:border-orange-950 hover:bg-mist-300/10 transition duration-300">
          <h3 className="text-orange-950 text-5xl md:text-6xl font-bold">
            {" "}
            03{" "}
          </h3>
          <p className="text-white font-bold mt-3 text-xl">
            {" "}
            Download or Edit Instantly{" "}
          </p>
          <p className="text-mist-400 mt-4 leading-7">
            Get your document ready to use or customize further{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
