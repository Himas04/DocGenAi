import React from "react";
import logIcon from "../assets/img/log(1).png";
import thunderIcon from "../assets/img/thunder (1).png";
import bookIcon from "../assets/img/book (1).png";
import pencilIcon from "../assets/img/penchil (1).png";

function Section5() {
  return (
    <section className="bg-gray-950/98 px-6 md:px-20 lg:px-40 py-16">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-bold text-center mt-10">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="border border-mist-800 bg-gray-950  rounded-xl p-6 hover:border-orange-800 transition duration-300">
          <img src={thunderIcon} className="w-12 h-12" alt="Thunder icon" />
          <p className="text-white font-bold mt-3 text-xl">
            {" "}
            Attorney-reviewed templates{" "}
          </p>
          <p className="text-mist-400 mt-4 text-sm leading-7">
            {" "}
            Created by legal experts for accuracy and compliance
          </p>
        </div>
        <div className="border border-mist-800 bg-gray-950 rounded-xl p-6 hover:border-orange-800 transition duration-300">
          <h1 className="font-bold text-4xl text-white pb-3"> US </h1>
          <p className="text-white font-bold mt-3 text-xl">
            {" "}
            US-business friendly{" "}
          </p>
          <p className="text-mist-400 mt-4 text-sm leading-7">
            {" "}
            Compliant with US laws and regulations{" "}
          </p>
        </div>
        <div className="border border-mist-800 bg-gray-950  rounded-xl p-6 hover:border-orange-800 transition duration-300">
          <img src={bookIcon} className="w-12 h-12" alt="Open book icon" />
          <p className="text-white font-bold mt-3 text-xl"> No legal jargon </p>
          <p className="text-mist-400 mt-4 text-sm leading-7">
            {" "}
            Clear, plain English everyone can understand{" "}
          </p>
        </div>
        <div className="border border-mist-800 bg-gray-950  rounded-xl p-6 hover:border-orange-800 transition duration-300">
          <img src={pencilIcon} className="w-12 h-12" alt="Pencil icon" />
          <p className="text-white font-bold mt-3 text-xl">
            {" "}
            Edit &amp; export anytime{" "}
          </p>
          <p className="text-mist-400 mt-4 text-sm leading-7">
            {" "}
            Customize documents to your specific needs
          </p>
        </div>
        <div className="border border-mist-800 bg-gray-950  rounded-xl p-6 hover:border-orange-800 transition duration-300">
          <img src={logIcon} className="w-12 h-12" alt="Security icon" />
          <p className="text-white font-bold mt-3 text-xl">
            {" "}
            Secure &amp; private{" "}
          </p>
          <p className="text-mist-400 mt-4 text-sm leading-7">
            Your documents are never shared or stored
          </p>
        </div>
        <div className="border border-mist-800 bg-gray-950  rounded-xl p-6 hover:border-orange-800 transition duration-300">
          <img src={thunderIcon} className="w-12 h-12" alt="Thunder icon" />
          <p className="text-white font-bold mt-3 text-xl">
            {" "}
            Instant generation{" "}
          </p>
          <p className="text-mist-400 mt-4 text-sm leading-7">
            {" "}
            Get professional documents in under 5 minutes{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section5;
