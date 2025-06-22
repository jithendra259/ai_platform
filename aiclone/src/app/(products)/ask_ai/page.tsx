"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const useClient = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

// ----- Hero Section -----
const HeroSection = () => {
  const mounted = useClient();

  return (
    <section className="py-20 px-4 lg:px-24 mx-auto max-w-[96rem] ">
      <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-sm hover:text-blue-500 ${mounted ? "animate-fade-in" : ""}`}>
        Ask AI
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className={`flex-1 ${mounted ? "animate-slide-left" : ""}`}>
          <p className="text-3xl mb-4 ">
            Experience ChatGPT-4, Claude-3, Mistral AI, Cloude Instant and more — all in one subscription!
          </p>
          <p className="text-2xl dark:text-gray-400 hover:text-gray-700 text-gray-600 mb-4" >
            Ask AI enhances conversations with engaging, informative, and intelligent responses.
          </p>
          <p className="text-2xl dark:text-gray-400 hover:text-gray-700 text-gray-600 mb-6">
            Join thousands exploring the future of AI-powered interaction.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-md">
              Get Started Free
            </button>
            <button className="bg-gray-700 hover:bg-white hover:text-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-md">
              View Pricing
            </button>
          </div>
        </div>

        <div className={`flex-1 flex justify-center ${mounted ? "animate-scale-up" : ""}   `} >
          <Image
            src="/image/ask_aipic/chatbot.webp"
            alt="Chatbot"
            width={480}
            height={480}
            className="rounded-3xl shadow-xl transition-transform duration-500 hover:scale-110 hidden md:block "
          />
        </div>
      </div>
    </section>
  );
};

// ----- Intro Section -----
const IntroSection = () => (
  <section className="text-center px-4 lg:px-24 mx-auto max-w-[96rem] my-12 animate-slide-up transition-transform hover:scale-[1.01]">
    <h2 className="text-3xl font-bold mb-4 hover:text-blue-500 transition-colors">
      The Only AI Tool You Need!
    </h2>
    <p className="text-gray-600 text-2xl dark:text-gray-400 hover:text-gray-700 transition-colors">
      Ask anything, understand documents, brainstorm, and more — powered by the best AI models.
    </p>
  </section>
);

// ----- Feature Block -----
interface FeatureBlockProps {
  title: string;
  points: string[];
  imgSrc: string;
  reverse?: boolean;
}

const FeatureBlock = ({ title, points, imgSrc, reverse = false }: FeatureBlockProps) => {
  const flexClass = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex flex-col ${flexClass} items-center gap-8 mx-auto max-w-[96rem] group hover:scale-[1.02] transition-transform`}>
      <Image
        src={imgSrc}
        alt={title}
        width={480}
        height={480}
        className="rounded-3xl w-full max-w-[300px] md:max-w-[480px] h-auto shadow-md group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300"
      />
      <div>
        <h3 className="text-3xl font-semibold m-10 text-left text-black dark:text-white dark:group-hover:text-blue-400 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <ul className="text-2xl text-gray-600 dark:text-gray-400 text-left space-y-2 list-disc list-inside group-hover:text-gray-700 transition-colors">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ----- Feature Section -----
const FeatureSection = () => (
  <section className="py-20 px-4 lg:px-24 mx-auto max-w-[96rem] space-y-16">
    <FeatureBlock
      title="Top AI Models in One Place"
      imgSrc="/image/ask_aipic/chatbot1.webp"
      reverse
      points={[
        "Ask anything using ChatGPT-4, Claude-3, and more.",
        "ChatPrompt Pro powered by Mistral and Cloude Instant.",
        "Unified, intuitive platform for smarter conversations.",
      ]}
      
    />
    <FeatureBlock
      title="Versatile Assistance"
      imgSrc="/image/ask_aipic/chatbot2.webp"
      points={[
        "Homework, brainstorming, or research help.",
        "Creative prompts and logical insights.",
        "Your all-in-one AI companion.",
      ]}
    />
    <FeatureBlock
      title="Effortless Conversations"
      imgSrc="/image/ask_aipic/chatbot3.webp"
      reverse
      points={[
        "Natural and responsive AI interaction.",
        "Enjoy fast, smart, and secure chats.",
        "Seamless experience across devices.",
      ]}
    />
  </section>
);

// ----- Call to Action -----
const CTASection = () => (
  <section className="py-20 text-center px-4 lg:px-24 ">
    <h2 className="text-3xl font-bold mb-4 hover:text-blue-500 transition-colors">
      Ready to Try It Out?
    </h2>
    <p className="text-gray-600 hover:text-gray-700 dark:text-gray-400 text-lg md:text-xl mb-8">
      Join 20k+ users already experiencing smarter AI interactions.
    </p>
    <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-transform hover:scale-105 shadow-md">
      Start Free Trial
    </button>
  </section>
);

// ----- Main Page -----
const AskAIPage = () => (
  <main className="  min-h-screen dark:bg-black">
    <HeroSection />
    <IntroSection />
    <FeatureSection />
    <CTASection />
  </main>
);

export default AskAIPage;
