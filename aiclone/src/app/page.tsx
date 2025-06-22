import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import CtaSection from '@/components/cta-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderAction from '@/components/header-actions';
import Footer_actions from '@/components/footer-actions';
import React from 'react';

const featureTabs = [
  {
    value: "tab-1",
    title: "Ask AI",
    description: "Experience ChatGPT-4, cloude-3, Mistral AI, Cloude Instant and many leading AI Model with One Simple Subscription!",
    content: "Your personal AI-powered chat companion, Ask AI, enhances online conversations by providing engaging, informative, and enjoyable interactions. With advanced AI technology, Ask AI simplifies chatting by understanding natural language, making interactions easy and fun."
  },
  {
    value: "tab-2",
    title: "AI QuestionGen",
    content: "Welcome to Ai QuestionGen, your revolutionary solution for effortlessly generating tests in minutes! With Ai QuestionGen, you can simply upload your file or enter a paragraph, enter your desired topics, and watch as our advanced AI technology instantly creates customized tests tailored to your specifications. Say goodbye to tedious manual test creation and hello to a seamless, time-saving process."
  },
  {
    value: "tab-3",
    title: "File AI",
    content: "File AI is a powerful tool that allows you to upload any file and ask questions about its content. Whether it's a PDF, Word document, or any other file type, File AI can analyze the text and provide accurate answers to your queries. This feature is perfect for quickly extracting information from large documents or understanding complex materials without having to read everything."
  },
  {
    value: "tab-4",
    title: "Online Testing",
    content: "Online Testing is a feature that allows you to create and conduct tests online. You can set up multiple-choice questions, short answer questions, and more. This feature is ideal for educators and trainers who want to assess knowledge in a flexible and efficient manner."
  },
  {
    value: "tab-5",
    title: "Procut",
    content: "Procut is a cutting-edge tool designed to enhance your productivity by automating repetitive tasks. Whether it's data entry, content generation, or any other routine activity, Procut streamlines your workflow, allowing you to focus on more important aspects of your work."
  },
  {
    value: "tab-6",
    title: "AI Tutor",
    content: "AI Tutor is your personal learning assistant that provides tailored educational support. Whether you need help with math, science, language learning, or any other subject, AI Tutor adapts to your learning style and pace, offering explanations, practice problems, and feedback to enhance your understanding."
  },
  {
    value: "tab-7",
    title: "Document Listener",
    content: "Document Listener is a feature that allows you to upload documents and have them read aloud. This is particularly useful for those who prefer auditory learning or need assistance with reading comprehension. Simply upload your document, and Document Listener will convert the text to speech, making it accessible and easy to understand."
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <HeaderAction />
       <HeroSection />
      <FeaturesSection />
      
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Explore Our Features
        </h2>
        
        <div className="flex justify-center">
          <Tabs defaultValue="tab-1" className="w-full max-w-4xl">
            <TabsList className="grid grid-cols-4 md:grid-cols-7 gap-2 bg-gray-800 p-2 rounded-lg">
              {featureTabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value}
                  className="text-xs md:text-sm px-2 py-1 rounded-md data-[state=active]:bg-gray-700 data-[state=active]:text-white hover:bg-gray-700 transition-colors"
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {featureTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-center mb-4 text-blue-300">
                    {tab.title}
                  </h3>
                  {tab.description && (
                    <p className="text-center text-gray-300 mb-4">
                      {tab.description}
                    </p>
                  )}
                  <p className="text-gray-300">
                    {tab.content}
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div>
           
          <h2 className="text-3xl font-bold text-center mt-12 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Effortlessly incorporate ScholarRankAI into your existing system.
          </h2>

          <div className='items-center justify-center flex flex-wrap gap-10 w-8xl'>
            <div className='items-text-center'>
              <img src="/image/homepage/blackbud.png" alt="Hero Image" className="shadow-lg w-15 h-15" />
              <a>Blackboud</a>
            </div>
            <div>
              <img src="/image/homepage/brightspace.svg" alt="Hero Image" className="shadow-lg w-15 h-15 bg-white " />
              <a>BrightSpace</a>
            </div>
            <div>
              <img src="/image/homepage/email.svg" alt="Hero Image" className="shadow-lg w-15 h-15" />
              <a>Email</a>
            </div>

            <div>
              <img src="/image/homepage/firabase.webp" alt="Hero Image" className="shadow-lg w-15 h-15" />
              <a>Firebase</a>
            </div>

            <div>
              <img src="/image/homepage/moodle.svg" alt="Hero Image" className="shadow-lg w-15 h-15" />
              <a>Moodle</a>
            </div>
            <div>
              <img src="/image/homepage/schoology.png" alt="Hero Image" className="shadow-lg w-30 h-15" />
              <a>Schoology</a>
            </div>

            <div>
              <img src="/image/homepage/skyward.svg" alt="Hero Image" className="shadow-lg w-20 h-15" />
              <a>Skyward</a>
            </div>

            <div>
              <img src="/image/homepage/slack.svg" alt="Hero Image" className="shadow-lg h-15" />
              <a>Slack</a>
            </div>

            <div>
              <img src="/image/homepage/tally.png" alt="Hero Image" className="shadow-lg h-15" />
              <a>Tally</a>
            </div>

            <div>
              <img src="/image/homepage/wbhook.jpeg" alt="Hero Image" className="shadow-lg h-15" />
              <a>Webhook</a>
            </div>            
          </div>
        </div>
      </section>
      
      <CtaSection />

      <Footer_actions />
    </div>
  );
}