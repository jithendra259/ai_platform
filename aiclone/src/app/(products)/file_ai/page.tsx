"use client";
import Image from "next/image";

// ----- HeroSection -----
const HeroSection = () => {
  return (


    <section className="flex flex-col md:flex-row mx-auto max-w-[96rem] items-center justify-between gap-12 py-20 px-4 lg:px-24 ">
      <div className="flex-1 animate-slide-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-text-pop">
          Explore the Future with <span className="text-blue-500">Ask AI</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 animate-fade-in delay-200">
          Unlock access to top AI models like ChatGPT-4, Claude 3, Mistral, and more — all under one powerful subscription.
        </p>
        <p className="text-gray-400 text-sm mb-6 animate-fade-in delay-400">
          Whether you&apos;re a student, researcher, creator, or business, Ask AI empowers you with cutting-edge tools to chat, analyze, and solve problems in seconds.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in delay-600">
          <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105">
            Get Started Free
          </button>
          <button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105">
            Explore Features
          </button>
        </div>
      </div>

      <div className="flex-1 animate-scale-up flex justify-center">
        <Image
          src="/image/ask_aipic/chatbot.webp"
          alt="AI Chatbot Illustration"
          width={450}
          height={450}
          className="rounded-4xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
   
  );
};
// ----- FeatureCard -----
const FeatureCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in-up">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

// ----- FeatureGrid -----
const FeatureGrid = () => (
  <section className="mt-24 mx-auto max-w-[96rem] grid grid-cols-1 md:grid-cols-3 gap-8">
    <FeatureCard
      icon="🤖"
      title="Multi-Model Access"
      desc="ChatGPT-4, Claude 3, Gemini, and more — all from one dashboard."
    />
    <FeatureCard
      icon="⚡"
      title="Fast & Reliable"
      desc="Lightning-fast responses and 99.9% uptime ensures you're never left waiting."
    />
    <FeatureCard
      icon="🔒"
      title="Secure & Private"
      desc="Your data stays yours. Military-grade encryption protects every session."
    />
  </section>
);

// ----- CTASection -----
const CTASection = () => (
  <section className="mx-auto max-w-[96rem] text-center mt-32 animate-fade-in-up delay-500">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-text-pop">
      Ready to Supercharge Your Conversations?
    </h2>
    <p className="text-gray-400 mb-8">
      Sign up now and get instant access to the world’s best AI models.
    </p>
    <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-transform hover:scale-110">
      Start Free Trial
    </button>
  </section>
); 



// ----- Combined Page -----
const AskAIPromoPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 md:px-24 py-16">
      <HeroSection />
      <FeatureGrid />
      <CTASection />
    </main>
  );
};

export default AskAIPromoPage;

