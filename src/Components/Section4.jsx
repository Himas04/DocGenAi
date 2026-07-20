import React from "react";
import downloadIcon from "../assets/img/download (1).png";
import logIcon from "../assets/img/log(1).png";
import documentIcon from "../assets/img/document(1).png";
import scaleIcon from "../assets/img/scale (1).png";
import bagIcon from "../assets/img/bag (1).png";
import employeesIcon from "../assets/img/emplooyes(1).png";
import phoneIcon from "../assets/img/phone(1).png";
import paperIcon from "../assets/img/paper (1).png";

function Section4() {
  return (
    <section className="bg-gray-950 px-6 md:px-20 lg:px-40 py-16">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xlleading-[1.3] font-bold text-center">
        Document Templates
      </h2>
      <p className="text-mist-400 text-center mt-3 text-base md:text-lg">
        {" "}
        Professional, attorney-reviewed templates for every business need
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={downloadIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Download icon"
          />
          <p className="text-white font-bold mt-3 text-sm"> NDA (Mutual) </p>
        </div>
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={logIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Log icon"
          />
          <p className="text-white font-bold mt-3 text-sm">NDA (Non-Mutual)</p>
        </div>
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={documentIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Document icon"
          />
          <p className="text-white font-bold mt-3 text-sm">Privacy Policy</p>
        </div>
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={scaleIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Scale icon"
          />
          <p className="text-white font-bold mt-3 text-sm">Terms of Service</p>
        </div>
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={bagIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Bag icon"
          />
          <p className="text-white font-bold mt-3 text-sm">
            Freelance Contract
          </p>
        </div>
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={employeesIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Employees icon"
          />
          <p className="text-white font-bold mt-3 text-sm">
            {" "}
            Employment Agreement{" "}
          </p>
        </div>
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={phoneIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Phone icon"
          />
          <p className="text-white font-bold mt-3 text-sm">
            {" "}
            Consulting Agreement
          </p>
        </div>
        <div className="group border border-mist-800 bg-gray-800/30 rounded-xl p-6 hover:border-orange-800 hover:bg-mist-400/10 transition duration-300 flex flex-col items-center justify-center text-center">
          <img
            src={paperIcon}
            className="w-12 h-12 group-hover:scale-125 transition-transform duration-300"
            alt="Paper icon"
          />
          <p className="text-white font-bold mt-3 text-sm">
            {" "}
            Service Agreement{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section4;
