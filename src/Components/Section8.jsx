import React from "react";

function Section10() {
  return (
    <section className="bg-gray-950 px-6 md:px-20 lg:px-40 py-20">
      <h6 className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.3] font-bold text-center">
        {" "}
        Frequently Asked Questions{" "}
      </h6>
      <p className="text-mist-400 mt-4 text-base md:text-lg text-center">
        {" "}
        Everything you need to know{" "}
      </p>
      <div className="flex flex-col items-center gap-5 mt-12">
        <details className="group w-full max-w-[800px] border border-mist-700 rounded-xl overflow-hidden hover:bg-gray-800/50 transition">
          <summary className="text-white p-5 md:p-6 font-semibold select-none cursor-pointer list-none flex justify-between items-center text-sm md:text-base">
            <span>Is this legally binding?</span>
            <i className="fa-solid fa-arrow-down text-red-600 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="border-t border-gray-700" />
          <div className="text-mist-400 text-sm md:text-base leading-7 bg-gray-950 p-5">
            {" "}
            Yes, documents generated are legally binding when properly executed.
            However, for complex situations, we recommend having a lawyer review
            your document.
          </div>
        </details>
        <details className="group w-full max-w-[800px] border border-mist-700 rounded-xl overflow-hidden hover:bg-gray-800/50 transition">
          <summary className="text-white p-5 md:p-6 font-semibold cursor-pointer list-none flex justify-between items-center text-sm md:text-base">
            <span>Can I customize documents?</span>
            <i className="fa-solid fa-arrow-down text-red-600 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="border-t border-gray-700" />
          <div className="text-mist-400 text-sm md:text-base leading-7 bg-gray-950 p-5">
            {" "}
            All documents are fully editable. You can customize them to match
            your specific business needs before download.
          </div>
        </details>
        <details className="group w-full max-w-[800px] border border-mist-700 rounded-xl overflow-hidden hover:bg-gray-800/50 transition">
          <summary className="text-white p-5 md:p-6 font-semibold cursor-pointer list-none flex justify-between items-center text-sm md:text-base">
            <span>Is this US-specific?</span>
            <i className="fa-solid fa-arrow-down text-red-600 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="border-t border-gray-700" />
          <div className="text-mist-400 text-sm md:text-base leading-7 bg-gray-950 p-5">
            Yes, all our templates are created to comply with US federal and
            state laws. International support is coming soon.
          </div>
        </details>
        <details className="group w-full max-w-[800px]  border border-mist-700 rounded-xl overflow-hidden  hover:bg-gray-800/50 transition">
          <summary className="text-white p-5 md:p-6 font-semibold cursor-pointer list-none flex justify-between items-center  text-sm md:text-base">
            <span>Can I cancel anytime?</span>
            <i className="fa-solid fa-arrow-down text-red-600 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="border-t border-gray-700" />
          <div className="text-mist-400 text-sm md:text-base leading-7 bg-gray-950 p-5">
            {" "}
            Yes, you can cancel your subscription at any time with no penalties
            or hidden fees. Your documents remain accessible forever.
          </div>
        </details>
      </div>
    </section>
  );
}

export default Section10;
