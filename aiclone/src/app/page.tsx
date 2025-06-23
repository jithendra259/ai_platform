"use client";
import HeaderActions from "@/components/header-actions";
import FooterActions from "@/components/footer-actions";
import { BackgroundPaths } from "@/components/ui/background-paths"
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';
import { Images } from "lucide-react";
// Simple Step component definition
type StepProps = { title: string };
function Step({ title }: StepProps) {
  return <li className="mb-2">{title}</li>;
}


const featureTabs = [
  {
    value: "tab-1",
    title: "Ask AI",
    description: "Experience ChatGPT-4, cloude-3, Mistral AI, Cloude Instant and many leading AI Model with One Simple Subscription!",
    content: "Your personal AI-powered chat companion, Ask AI, enhances online conversations by providing engaging, informative, and enjoyable interactions. With advanced AI technology, Ask AI simplifies chatting by understanding natural language, making interactions easy and fun.",
    images: "image/homepage/askai.png",
  },
  {
    value: "tab-2",
    title: "AI QuestionGen",
    content: "Welcome to Ai QuestionGen, your revolutionary solution for effortlessly generating tests in minutes! With Ai QuestionGen, you can simply upload your file or enter a paragraph, enter your desired topics, and watch as our advanced AI technology instantly creates customized tests tailored to your specifications. Say goodbye to tedious manual test creation and hello to a seamless, time-saving process.",
    images: "image/homepage/aiquestiongen.png"
  },
  {
    value: "tab-3",
    title: "File AI",
    content: "File AI is a powerful tool that allows you to upload any file and ask questions about its content. Whether it's a PDF, Word document, or any other file type, File AI can analyze the text and provide accurate answers to your queries. This feature is perfect for quickly extracting information from large documents or understanding complex materials without having to read everything.",
    images: "image/homepage/fileai.png"
  },
  {
    value: "tab-4",
    title: "Online Testing",
    content: "Online Testing is a feature that allows you to create and conduct tests online. You can set up multiple-choice questions, short answer questions, and more. This feature is ideal for educators and trainers who want to assess knowledge in a flexible and efficient manner.",
    images: "image/homepage/onlinetesting.png"
  },
  {
    value: "tab-5",
    title: "Procut",
    content: "Procut is a cutting-edge tool designed to enhance your productivity by automating repetitive tasks. Whether it's data entry, content generation, or any other routine activity, Procut streamlines your workflow, allowing you to focus on more important aspects of your work.",
    images: "image/homepage/procut.png"
  },
  {
    value: "tab-6",
    title: "AI Tutor",
    content: "AI Tutor is your personal learning assistant that provides tailored educational support. Whether you need help with math, science, language learning, or any other subject, AI Tutor adapts to your learning style and pace, offering explanations, practice problems, and feedback to enhance your understanding.",
    images: "image/homepage/aitutor.png"
  },
  {
    value: "tab-7",
    title: "Document Listener",
    content: "Document Listener is a feature that allows you to upload documents and have them read aloud. This is particularly useful for those who prefer auditory learning or need assistance with reading comprehension. Simply upload your document, and Document Listener will convert the text to speech, making it accessible and easy to understand.",
    images: "image/homepage/documentlistner.png"
  }
];





export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen mx-auto max-w-[96rem]">
      <header className="">
        <HeaderActions />
      </header>
      <div className="min-h-screen">
        <div>
          <BackgroundPaths title="The only AI tool you need!" />
        </div>
        <div className='items-center justify-center text-center flex-col mt-10 mb-10'>
          <a >Trusted by 18000+ monthly active users globally</a>
          <div className='items-center justify-center text-center flex flex-wrap gap-8 mt-4'>
            <img src="image/homepage/katihar_engeering_logo (1).png" className='bg-white' alt="alt" width={120} height={70} />
            <img src="image/homepage/iit_delhi_logo.png" alt="alt" className='' width={70} height={70} />
            <img src="image/homepage/niet_noida_logo.svg" className='bg-white ' alt="alt" width={110} height={70} />
            <img src="image/homepage/fiit_jee_logo.svg" alt="alt" className='bg-white' width={80} height={50} />
            <img src="image/homepage/unc_cordoba_logo.png" alt="alt" width={120} height={70} />
            <img src="image/homepage/suffolk_uni_logo.png" alt="alt" width={80} height={70} />
          </div>
        </div>

        <div>
          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              Authentication steps
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              Follow these steps to secure your account:
              <ul className="list-none  mt-2">
                <Step title="Enter your email address" />
                <Step title="Create a strong password" />
                <Step title="Set up two-factor authentication" />
                <Step title="Verify your identity" />
              </ul>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Ensuring your account is properly secured helps protect your personal
              information and data.
            </p>
          </CardSpotlight>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Explore Our Features
          </h2>

          <div className="flex justify-center">
            <Tabs defaultValue="tab-1" className="w-full max-w-5xl">
              <TabsList className="grid grid-cols-4 md:grid-cols-7 gap-2 p-2 rounded-lg">
                {featureTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="text-xs md:text-sm px-2 py-1 rounded-md transition-colors"
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {featureTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-2">
                  <div className="backdrop-blur-sm p-6 rounded-xl border">
                    <h3 className="text-xl font-semibold text-center mb-4">
                      {tab.title}
                    </h3>
                    {tab.description && (
                      <p className="text-center mb-4">
                        {tab.description}
                      </p>
                    )}
                    <p className="">
                      {tab.content}
                    </p>
                    <img src={tab.images} alt={tab.title} className="mt-4 mx-auto" />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

        </div>

        <h2 className="text-3xl font-bold text-center mt-20 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
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
        <div>

          <div className="mt-30">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Explore Academic Excellence?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of students, researchers, and institutions using ScholarRank to make informed academic decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => router.push('/signup')}
                  className="px-8 py-3 rounded-2xl 
             text-black dark:text-white bg-white dark:bg-black 
             hover:bg-gray-100 dark:hover:bg-gray-800 
             hover:text-blue-500 dark:hover:text-blue-500 
             font-semibold shadow-3xl hover:shadow-lg 
             transition-all duration-300 ease-in-out"
                >
                  Sign Up Free
                </button>
                <button className="px-8 py-3 border  rounded-2xl hover:bg-gradient-to-r from-purple-600 to-cyan-400 font-medium">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="">
          <FooterActions />
        </footer>

      </div>
    </div>

  );
}