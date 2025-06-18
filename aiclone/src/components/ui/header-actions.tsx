"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeaderActions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-black text-white px-4 py-3 flex flex-wrap justify-between items-center mx-auto max-w-[96rem] relative">


      <div className="flex items-center space-x-2">
        <Image src="/logo-sm.png" alt="logo" width={48} height={48} className="object-cover" />
        <h2 className="text-3xl sm:text-4xl font-bold">ScholarRank</h2>
      </div>

      
      <button
        className="sm:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

     
      <div
        className={`
    ${menuOpen || !isMobile ? "flex" : "hidden"} 
    sm:flex flex-col sm:flex-row items-center justify-center 
    space-y-4 sm:space-y-0 sm:space-x-6 
    w-full sm:w-auto mt-4 sm:mt-0
    ${menuOpen && isMobile ? "bg-gray-900 rounded-lg p-4 shadow-lg" : ""}
  `}
      >

        <Link href="/">
          <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
            <span className="relative z-10 group-hover:text-black">Home</span>
          </span>
        </Link>

       
        <div
          className={`relative ${!isMobile ? "group" : ""} cursor-pointer`}
          onClick={() => {
            if (isMobile) setProductOpen(!productOpen);
          }}
        >
          <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
            <span className="relative z-10 group-hover:text-black">Products</span>
          </span>

       
          <div
            className={`
              absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white text-black shadow-lg rounded-lg p-4 z-50
              ${isMobile
                ? productOpen
                  ? "block"
                  : "hidden"
                : "invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"}
            `}
          >
            <ul className="space-y-1">
              <Link href="/ask_ai">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">💬 Ask AI</p>
                  <p className="text-sm text-gray-600">Talking Easier With AI</p>
                </li>
              </Link>
              <Link href="/file_ai">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">📄 File AI</p>
                  <p className="text-sm text-gray-600">Dive Into Your Files</p>
                </li>
              </Link>
              <Link href="/document_listner">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">📑 Document Listener</p>
                  <p className="text-sm text-gray-600">Listen To Your Documents</p>
                </li>
              </Link>
              <Link href="/ai_question_gen">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">📥 AI QuestionGen</p>
                  <p className="text-sm text-gray-600">Generate Questions</p>
                </li>
              </Link>
              <Link href="/ai_tutor">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">🎓 AI Tutor</p>
                  <p className="text-sm text-gray-600">Learn with AI Assistance</p>
                </li>
              </Link>
              <Link href="/online_testing">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">📝 Online Testing</p>
                  <p className="text-sm text-gray-600">Secure Online Testing</p>
                </li>
              </Link>
              <Link href="/procut">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">✂️ Procut</p>
                  <p className="text-sm text-gray-600">Create Memes, Jokes, Videos</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        
        <Link href="/price">
          <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
            <span className="relative z-10 group-hover:text-black">Pricing</span>
          </span>
        </Link>

        <Link href="/login">
          <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
            <span className="relative z-10 group-hover:text-black">LogIn</span>
          </span>
        </Link>
        <Link href="/signup">
          <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
            <span className="relative z-10 group-hover:text-black">SignUp</span>
          </span>
        </Link>
        <Link href="/chat_ui">
          <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
            <span className="relative z-10 group-hover:text-black">Chat UI</span>
          </span>
        </Link>

      </div>
    </header>
  );
}
