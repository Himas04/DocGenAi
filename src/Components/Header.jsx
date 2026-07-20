import React from "react";
import docgenAiLogo from "../assets/img/docgen-ai-logo.svg";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-5 bg-black text-white flex items-center justify-between px-6 md:px-20 lg:px-20 py-5">
      <div className="flex items-center gap-2 text-xl font-bold">
        <img src={docgenAiLogo} className="w-8 h-7" alt="DocGenAI logo" />
        <p>DocGenAI</p>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-mist-400 text-sm">
        <a href="" className="hover:text-white">
          {" "}
          How It Works{" "}
        </a>
        <a href="" className="hover:text-white">
          {" "}
          Documents
        </a>
        <a href="" className="hover:text-white">
          {" "}
          Pricing{" "}
        </a>
      </nav>
      <div className="flex items-center text-sm">
        <button className="hover:bg-red-600 py-2 px-4 rounded-xl">
          {" "}
          Sign In{" "}
        </button>
        <button className="bg-red-600 text-white py-2 px-4 rounded-xl ml-2 md:ml-4 hover:bg-red-800">
          {" "}
          Sign Up{" "}
        </button>
      </div>
    </header>
  );
}

export default Header;
