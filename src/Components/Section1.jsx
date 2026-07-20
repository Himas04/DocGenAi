import React from "react";
import docsbotImg from "../assets/img/docsbot.png";

function Section1() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-950 px-6 md:px-20 lg:px-40 py-10 md:py-20 gap-20 min-h-screen">
      <div className="w-full max-w-125">
        <p className="text-orange-600 bg-orange-500/20 border border-orange-600 w-fit rounded-full py-2 px-5 text-sm text-center mt-12 mb-8">
          Trusted by 10,000+ companies{" "}
        </p>
        <h1 className="text-white text-5xl md:text-5xl lg:text-7xl leading-tight font-bold">
          {" "}
          Legal Docs
          <span className="text-orange-700 block"> in Minutes</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg lg:text-xl mt-6 mb-10 leading-8">
          Generate compliant NDAs, contracts,and policies with AI. Fast,
          affordable, and simple— no lawyer required.
        </p>
        <div className=" flex-wrap gap-4 grid col-1 md:grid-cols-2">
          <button className="bg-orange-700 text-white py-3 px-6 rounded-xl hover:bg-orange-800">
            {" "}
            Start Free
          </button>
          <button className="border border-orange-700 text-white py-3 px-6 rounded-xl hover:border-orange-600">
            View Sample
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="mt-20 bg-orange-600/10 rounded-xl w-full max-w-[500px] p-6 md:p-8 border border-orange-900/30 md:scale-125">
          <img
            src={docsbotImg}
            alt="Docsbot illustration"
            className="w-full max-w-[400px] mx-auto object-contain"
          />
          <p className="text-center text-gray-300  mt-8 text-lg">
            {" "}
            AI-Powered Document Generation{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
