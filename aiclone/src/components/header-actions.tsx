"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LightPullThemeSwitcher } from "@/components/ui/light-pull-theme-switcher"

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
    <div className="mx-auto max-w-[96rem]">
    
    <header className="bg-black text-white px-4 py-3 flex flex-wrap justify-between items-center mx-auto max-w-[96rem] relative">
        
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image src="/logo-sm.png" alt="logo" width={48} height={48} className="object-cover" />
          <h2 className="text-3xl sm:text-4xl font-bold">ScholarRank</h2>
        </div>

        
      </Link>
      

      {/* Hamburger Button – now uses isMobile instead of sm:hidden */}
      {isMobile && (
        <button
          className="text-white cursor-pointer text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      )}

      {/* Menu wrapper */}
      <div
        className={`
    ${menuOpen || !isMobile ? "flex" : "hidden"}
    ${isMobile ? "absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-gray-900 flex-col items-center justify-center space-y-6 text-center z-50" : "sm:flex-row items-center justify-end space-x-6"}
    mt-4 sm:mt-0
  `}
      >


        {/* Products */}
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
            className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white text-black shadow-lg rounded-lg p-4 z-50
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
                  <p className="font-bold">✂ Procut</p>
                  <p className="text-sm text-gray-600">Create Memes, Jokes, Videos</p>
                </li>
              </Link>
              <Link href="/chat_Ui">
                <li className="p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
                  <p className="font-bold">🎭 Chat Ui</p>
                  <p className="text-sm text-gray-600"> Chat. Learn. Grow.</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <Link href="/price">
          <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
            <span className="relative z-10 group-hover:text-black">Pricing</span>
          </span>
        </Link>

        {/* Login & Signup Buttons */}
        <div className="flex gap-4">
          <Link href="/login">
            <button className="relative overflow-hidden rounded-full px-6 py-2 text-black text-lg font-semibold bg-white group transition-all duration-300">
              <span className="absolute inset-0 z-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 transition-transform duration-500 origin-left rounded-full"></span>
              <span className="relative z-10 group-hover:text-black">LogIn</span>
            </button>
          </Link>
          <Link href="/signup">
            <button className="relative overflow-hidden rounded-full px-6 py-2 text-black text-lg font-semibold bg-white group transition-all duration-300">
              <span className="absolute inset-0 z-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 transition-transform duration-500 origin-left rounded-full"></span>
              <span className="relative z-10 group-hover:text-black">SignUp</span>
            </button>
          </Link>
        </div>


      </div>
    </header>
     <div className="absolute hidden md:block mx-auto" >
            <LightPullThemeSwitcher/>
            {/* <p className="text-sm text-neutral-500">Pull down to change theme</p> */}
      </div>
    
    </div>
    
  );
}