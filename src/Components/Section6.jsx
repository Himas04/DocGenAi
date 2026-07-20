import React from "react";
import logIcon from "../assets/img/log(1).png";
import privacyIcon from "../assets/img/privecy(1).png";

function Section6() {
  return (
    <section className="bg-gray-950 px-6 md:px-20 lg:px-40 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        <div className="border border-mist-800  bg-orange-800/10 rounded-xl p-6">
          <img src={logIcon} className="w-12 h-12" alt="Company logo" />
          <p className="text-white font-bold mt-3 text-xl"> Security </p>
          <p className="text-mist-400 mt-4">
            {" "}
            Enterprise-grade encryption protects your data{" "}
          </p>
        </div>
        <div className="border border-mist-800  bg-orange-800/10 rounded-xl p-6">
          <img
            src={privacyIcon}
            className="w-12 h-12 invert"
            alt="Privacy icon"
          />
          <p className="text-white font-bold mt-3 text-xl"> Privacy </p>
          <p className="text-mist-400 mt-4">
            {" "}
            Your documents are never shared or retained{" "}
          </p>
        </div>
        <div className="border border-mist-800  bg-orange-800/10 rounded-xl p-6">
          <h1 className="font-bold text-4xl text-white pb-3"> US</h1>
          <p className="text-white font-bold mt-3 text-xl"> US-Focused </p>
          <p className="text-mist-400 mt-4">
            {" "}
            Compliant with all US business regulations{" "}
          </p>
        </div>
      </div>
      <div className="w-full bg-mist-800 rounded-xl p-8 md:p-10">
        <p className="text-white font-bold text-xl">Important Disclaimer </p>
        <p className="text-mist-400 mt-4 leading-8">
          This tool does not replace a licensed attorney. Documents generated
          are for informational purposes. For complex legal matters or specific
          legal advice, please consult with a qualified attorney.
        </p>
      </div>
    </section>
  );
}

export default Section6;
