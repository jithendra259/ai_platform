// import { HyperText } from "@/components/magicui/hyper-text";
// import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 py-20 px-4 border-b border-gray-800">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          The only AI tool you need!
        </h1>
         className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto" 
          
           Ask anything, generate questions using AI, understand your documents easily, and much more.
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700">
            Try For Free
          </Button>
        </div>
      </div>
    </section>
  );
}