import React from "react";

function Section7() {
  return (
    <section className="bg-gray-950 px-6 md:px-20 lg:px-40 py-16">
      <h2 className="text-white text-4xl md:text-5xl lg:text-6xl  leading-[1.3] font-bold text-center">
        {" "}
        Simple, Transparent Pricing{" "}
      </h2>
      <p className="text-mist-400 mt-4 text-base md:text-lg text-center">
        {" "}
        Choose the plan that fits your needs{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 items-center">
        <div className="border border-mist-700 bg-gray-900/55 rounded-xl p-8 md:p-10 hover:border-orange-800 transition duration-300 min-h-[620px]">
          <h5 className="font-bold text-3xl md:text-4xl text-white pb-3">
            Starter{" "}
          </h5>
          <p className="text-mist-400 text-lg">Perfect for getting started</p>
          <h1 className="font-bold text-5xl text-white mt-5">$0</h1>
          <div className="mt-10 bg-gray-950 p-3 rounded-xl cursor-pointer hover:bg-mist-900">
            <p className="font-bold text-white text-lg text-center">
              {" "}
              Get started
            </p>
          </div>
          <ul className="text-white leading-10 md:leading-14 mt-10">
            <li>
              <i className="fa-solid fa-check text-red-700" /> 1 document per
              month
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Watermarked
              documents
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Basic templates
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Email support
            </li>
          </ul>
        </div>
        <div className="border-2 border-orange-800 bg-gray-900/55 rounded-xl p-8 md:p-10 md:scale-105 shadow-lg min-h-[700px]">
          <p className="text-orange-500 bg-orange-600/20 w-36 rounded-full p-2 text-sm text-center">
            {" "}
            RECOMMENDED
          </p>
          <h5 className="font-bold text-3xl md:text-4xl text-white pb-3 mt-5">
            {" "}
            Pro{" "}
          </h5>
          <p className="text-mist-400 text-lg"> For most small businesses </p>
          <div className="flex gap-2 items-end mt-5">
            <h1 className="font-bold text-5xl text-white"> $29 </h1>
            <p className="text-mist-400 text-lg"> /month </p>
          </div>
          <div className="mt-10 bg-orange-600 p-3 rounded-xl cursor-pointer hover:bg-orange-700">
            <p className="font-bold text-white text-lg text-center">
              {" "}
              Start free Trial{" "}
            </p>
          </div>
          <ul className="text-white leading-10 md:leading-14 mt-10">
            <li>
              <i className="fa-solid fa-check text-red-700" /> Unlimited
              documents
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> No watermark
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Editable formats
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Priority support
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Advanced
              templates
            </li>
          </ul>
        </div>
        <div className="border border-mist-700 bg-gray-900/55 rounded-xl p-8 md:p-10 hover:border-orange-800 transition duration-300 min-h-[620px]">
          <h5 className="font-bold text-3xl md:text-4xl text-white pb-3">
            {" "}
            Business{" "}
          </h5>
          <p className="text-mist-400 text-lg"> For growing teams </p>
          <div className="flex gap-2 items-end mt-5">
            <h1 className="font-bold text-5xl text-white">$79</h1>
            <p className="text-mist-400 text-lg"> /month </p>
          </div>
          <div className="mt-10 bg-gray-950 p-3 rounded-xl cursor-pointer hover:bg-mist-900">
            <p className="font-bold text-white text-lg text-center">
              {" "}
              Contact Sales{" "}
            </p>
          </div>
          <ul className="text-white leading-10 md:leading-14 mt-10">
            <li>
              <i className="fa-solid fa-check text-red-700" /> Everything in Pro
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Team access
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Client documents
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Priority support
            </li>
            <li>
              <i className="fa-solid fa-check text-red-700" /> Custom templates
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section7;
