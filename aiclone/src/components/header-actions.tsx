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
      setIsMobile(window.innerWidth < 880);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">

      <header className=" px-4 py-3 mx-auto max-w-[96rem] flex flex-wrap justify-between items-center relative">

        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo-sm.png" alt="logo" width={48} height={48} className="object-cover" />
            <h2 className="text-3xl sm:text-4xl font-bold">ScholarRank</h2>
          </div>
        </Link>


        {/* Hamburger Button – now uses isMobile instead of sm:hidden */}
        {isMobile && (
          <button
            className="text-black dark:text-white cursor-pointer text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}

        {/* Menu wrapper */}
        <div className={`
          transition-all duration-500 ease-in-out
          ${!isMobile || menuOpen ? " flex" : "hidden"}
            ${isMobile
            ? "absolute top-20 left-0 w-full h-[180px] dark:text-white bg-gray-700 flex-col items-center justify-center space-y-6 text-left z-50"
            : "flex-row items-center justify-end space-x-6"}
             mt-4 sm:mt-0
             `}>





          {/* Products */}
          <div
            className={`relative ${!isMobile ? "group" : ""} cursor-pointer`}
            onClick={() => {
              if (isMobile) setProductOpen(!productOpen);
            }}>
            <span className="relative text-xl sm:text-2xl cursor-pointer px-4 py-1 transition-all duration-300 group overflow-hidden">
              <span className="absolute inset-0  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg z-0"></span>
              <span className="relative z-10 dark:group-hover:text-white group-hover:font-semibold">Products</span>
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
                <Link href="/Chat_Ui">
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
              <span className="absolute inset-0  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg "></span>
              <span className="relative z-10 dark:group-hover:text-white group-hover:font-semibold">Pricing</span>
            </span>
          </Link>

          {/* Login & Signup Buttons */}
          <div className="flex gap-4 ">
            <Link href="/login">
              <button className="relative overflow-hidden cursor-pointer rounded-full px-6 py-2 text-white dark:text-black dark:bg-white text-lg font-semibold bg-cyan-400 group transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500">
                <span className="relative z-10 group-hover:font-semibold">LogIn</span>
              </button>
            </Link>
            <Link href="/signup">
              <button className="relative cursor-pointer overflow-hidden rounded-full px-6 py-2 text-white text-lg dark:text-black dark:bg-white font-semibold bg-cyan-400 group transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500">
                <span className="relative z-10 group-hover:font-semibold">SignUp</span>
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="absolute left-0 right-0 mx-auto z-50 max-w-[96rem] md:block hidden">
        <LightPullThemeSwitcher />
      </div>


    </div>

  );
}