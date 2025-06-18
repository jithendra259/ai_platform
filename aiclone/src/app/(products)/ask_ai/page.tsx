"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Animations handled after mount to avoid hydration mismatches
const useClient = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

// ----- HeroSection -----
const HeroSection = () => {
  const mounted = useClient();

  return (
    <section className="py-20 px-4 lg:px-24 bg-black">
      <div className="text-center mb-12">
        <h1 className={`relative inline-block text-3xl md:text-4xl lg:text-[35px] font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full hover:text-blue-500 transition-colors duration-300 ${mounted ? "animate-fade-in" : ""}`}>
          Ask AI
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className={`flex-1 text-left ${mounted ? "animate-slide-left" : ""}`}>
          <p className="text-base md:text-lg mb-4 text-gray-300">Experience ChatGPT-4, Claude-3, Mistral AI, Cloude Instant and many leading AI Models with One Simple Subscription!</p>
          <p className="text-sm md:text-md text-gray-400 mb-4">Your personal AI-powered chat companion, Ask AI, enhances online conversations by providing engaging, informative, and enjoyable interactions.</p>
          <p className="text-sm md:text-md text-gray-400 mb-6">Join thousands of users and explore the future of chatting with Ask AI.</p>

          <div className="flex flex-wrap gap-4">
            <button className="cursor-pointer bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg duration-300">
              Get Started Free
            </button>
            <button className="cursor-pointer bg-gray-700 hover:bg-white hover:text-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg duration-300">
              View Pricing
            </button>
          </div>
        </div>

        <div className={`flex-1 flex justify-center ${mounted ? "animate-scale-up" : ""}`}>
          <div className="transition-transform duration-500 hover:scale-110 hover:rotate-1">
            <Image
              src="/askai/chatbot.webp"
              alt="Chatbot"
              width={350}
              height={350}
              className="rounded-lg shadow-md w-full max-w-[350px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- IntroSection -----
const IntroSection = () => (
  <section className="text-center px-4 lg:px-24 max-w-4xl mx-auto animate-slide-up mb-12 transition-transform duration-300 hover:scale-[1.01]">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 hover:text-blue-500">
      The only AI tool you need!
    </h2>
    <p className="text-gray-400 text-base md:text-lg transition-colors duration-300 hover:text-gray-200">
      Ask anything, generate questions using AI, understand your documents
      easily, and much more.
    </p>
  </section>
);

// ----- FeatureBlock -----
interface FeatureBlockProps {
  title: string;
  points: string[];
  imgSrc: string;
  reverse?: boolean;
}

const FeatureBlock = ({ title, points, imgSrc, reverse = false }: FeatureBlockProps) => {
  const flexClass = reverse
    ? "md:flex-row-reverse"
    : "md:flex-row";

  return (
    <div className={`flex flex-col ${flexClass} items-center gap-6 group transition-transform duration-300 hover:scale-[1.02]`}>
      <div className="transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105">
        <Image
          src={imgSrc}
          alt={title}
          width={480}
          height={480}
          className="rounded-full object-cover w-full max-w-[300px] md:max-w-[480px] h-auto shadow-md"
        />
      </div>
      <div className="transition-colors duration-300 group-hover:text-blue-400">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-500">
          {title}
        </h2>
        <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm md:text-base group-hover:text-gray-300">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ----- FeatureSection -----
const FeatureSection = () => (
  <section className="py-16 px-4 lg:px-24 grid gap-16 bg-black">
    <FeatureBlock
      title="Experience Ask AI and Leading AI Models for Free!"
      imgSrc="/askai/chatbot1.webp"
      reverse
      points={[
        "Ask anything, generate questions, understand documents, and much more.",
        "Experience the next generation of chatting with ChatGPT-4, Claude-3, and other top AI models.",
        "Enjoy seamless chatting with ChatPrompt Pro powered by Mistral AI and Cloude Instant.",
        "Unlock the power of AI-driven conversations in one unified platform.",
        "Discover the future of chatting with Ask AI—your free personal AI-powered companion.",
      ]}
    />

    <FeatureBlock
      title="Versatile Assistance"
      imgSrc="/askai/chatbot2.webp"
      points={[
        "Comprehensive support for various conversational needs.",
        "Helps answer questions and spark creativity.",
        "Ideal for homework help and project brainstorming.",
        "A reliable tool for diverse tasks and ideas.",
      ]}
    />

    <FeatureBlock
      title="Effortless Conversations"
      imgSrc="/askai/chatbot3.webp"
      reverse
      points={[
        "Powered by advanced AI for smooth and responsive chats.",
        "Understands natural language effortlessly.",
        "Provides a user-friendly interface for enjoyable conversations.",
        "Makes chatting feel intuitive, quick, and productive.",
      ]}
    />
  </section>
);

// ----- CTA Section -----
const CTASection = () => (
  <section className="py-16 px-4 lg:px-24 text-center bg-black">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 hover:text-blue-500">
      Ready to try it out?
    </h2>
    <p className="text-base md:text-lg text-gray-400 mb-6">
      Over 20k+ users on ScholarRank. Join them.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <button className="cursor-pointer bg-blue-600 hover:bg-white hover:text-blue-600 text-white text-md md:text-lg font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg duration-300">
        Get Started Free
      </button>
      <button className="cursor-pointer bg-gray-700 hover:bg-white hover:text-gray-700 text-white text-md md:text-lg font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg duration-300">
        View Pricing
      </button>
    </div>
  </section>
);

// ----- Main Page -----
const AskAIPage = () => (
  <main className="min-h-screen bg-black text-white">
    <HeroSection />
    <IntroSection />
    <FeatureSection />
    <CTASection />
  </main>
);

export default AskAIPage;
