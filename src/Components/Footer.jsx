import React from 'react'
import docgenAiLogo from "../assets/img/docgen-ai-logo.svg"; 

function Footer() {
  return (
    <footer>
      <section className="bg-[#23110E] px-6 md:px-20 lg:px-40 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white  text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
            {" "}
            Stop Paying for{" "}
          </h1>
          <h1 className="text-orange-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
            {" "}
            Basic Lawyers.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-mist-400 mt-8 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate professional, compliant legal documents today. No credit
            card required.{" "}
          </p>
          <div className="w-full sm:w-auto">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-xl py-4 px-8 w-full sm:w-[350px] transition duration-300">
              Generate Your First Document{" "}
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 md:px-20 lg:px-40 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <img
                src={docgenAiLogo}
                className="w-8 h-7"
                alt="DocGenAI Logo"
              />
              <h6 className="text-black"> DocGenAI</h6>
            </div>
            <p className="text-mist-700 mt-5 max-w-[280px] leading-7">
              AI Legal Document Generator for US businesses
            </p>
          </div>
          <div>
            <h6 className="text-xl font-bold text-black"> Product</h6>
            <ul className="text-mist-700 mt-5 space-y-3">
              <li>
                <a href="" className="hover:text-black transition">
                  {" "}
                  How It Works{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  {" "}
                  Documents{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  {" "}
                  Pricing{" "}
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  {" "}
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-xl font-bold text-black"> Company </h6>
            <ul className="text-mist-700 mt-5 space-y-3">
              <li>
                <a href="" className="hover:text-black transition">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-xl font-bold text-black">Legal</h6>
            <ul className="text-mist-700 mt-5 space-y-3">
              <li>
                <a href="" className="hover:text-black transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10 border-mist-700" />
        <div className="text-center">
          <p className="text-mist-700 text-sm md:text-base leading-7 max-w-[900px] mx-auto">
            {" "}
            © 2025 DocGenAI. All rights reserved.This tool does not replace a
            licensed attorney. Developed by
            <span className="text-mist-900 font-semibold"> Codescandy </span> •
            Distributed by{" "}
            <span className="text-mist-900 font-semibold"> ThemeWagon </span>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer
