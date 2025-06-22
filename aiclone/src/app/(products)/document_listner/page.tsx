"use client"
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Database } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";


export default function DocumentListener(){
    const router = useRouter();
     const data = [
    {
      title: "Automatic Playback",
      content: (
        <div>
          <p className=" dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Enjoy hands-free listening with automatic playback for any text or file.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/document_listner_images/image2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "User-Friendly Interface",
      content: (
        <div>
          <p className=" dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
           Intuitive controls allow you to play, pause, and resume playback with ease.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/document_listner_images/image3.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "Multi-Format Support",
      content: (
        <div>
          <p className=" dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
           Document Listener supports a wide range of file formats, including PDFs, Word documents, and text files.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/document_listner_images/image4.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "Cross-Platform Compatibility",
      content: (
        <div>
          <p className=" dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Access Document Listener from any device, including desktop computers, laptops, tablets, and smartphones.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/document_listner_images/image5.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "Privacy and Security",
      content: (
        <div>
          <p className=" dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
          Rest assured that your data is safe and secure with Document Listener&apos;s robust privacy measures and encryption protocols.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image/document_listner_images/image6.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    
  ];
    return(
      
        <div className="min-h-screen mx-auto max-w-[96rem] ">
            <header className="mt-10 ">
                <div>
                    <AnimatedText
                        text="Document Listener"
                        textClassName="text-5xl font-bold mb-2 text-center"
                        underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10 Q 225,0 300,10 Q 225,0 300,10 Q 225,0 300,"
                        underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10 Q 225,0 300,10 Q 225,0 300, 10 Q 225,0 300,"
                        underlineDuration={1.5}
                        />
                </div>
            </header>

            <div className="flex flex-col mt-10 ">
                <div className=" pl-11">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/home" className="text-xl">Products</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>                            
                            <Select 
                                defaultValue="3"
                                onValueChange={(value) => {
                                    switch(value) {
                                        case "1":
                                            router.push('/ask_ai');
                                            break;
                                        case "2":
                                            router.push('/file_ai');
                                            break;
                                        case "3":
                                            router.push('/document_listner');
                                            break;
                                        case "4":
                                            router.push('/ai_question_gen');
                                            break;
                                        case "5":
                                            router.push('/ai_tutor');
                                            break;
                                        case "6":
                                            router.push('/online_testing');
                                            break;
                                        case "7":
                                            router.push('/procut');
                                            break;
                                    }
                                }}
                            >
                                <SelectTrigger
                                id="select-database"
                                className="relative ps-9"
                                aria-label="Select database"
                                >
                                <div className="pointer-events-none text-zinc-50 absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[[disabled]]:opacity-50">
                                    <Database size={16} strokeWidth={2} aria-hidden="true" />
                                </div>
                                <SelectValue placeholder="Select time"/>
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="1">Ask Ai</SelectItem>
                                <SelectItem value="2">File ai</SelectItem>
                                <SelectItem value="3">Document listner</SelectItem>
                                <SelectItem value="4">Ai Question Gen</SelectItem>
                                <SelectItem value="5">Ai Tutor</SelectItem>
                                <SelectItem value="6">Online Testing</SelectItem>
                                <SelectItem value="7">Procut</SelectItem>
                                </SelectContent>
                            </Select>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="">
                    <div className=" w-full ">
                        <div className=" w-full overflow-hidden">
                             <div>
                              <div className="flex pr-8">
                                <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10 text-black dark:text-white">
                                    <h2 className="text-lg md:text-4xl mb-4  dark:text-white max-w-4xl">
                                    Document Listener: Automatic Text and File Playback
                                    </h2>
                                    <p className=" dark:text-neutral-300  md:text-base text-sm max-w-2xl ">
                                    
                                    Document Listener is a revolutionary feature designed to enhance your
                                    user experience by providing automatic playback for any text or file
                                    you input. Simply upload your document or paste your text, and let Document
                                    Listener do the rest. It offers seamless playback functionality, allowing you
                                    to effortlessly listen to your content without any additional software or plugins.
                                    Whether you&apos;re on the go, multitasking, or prefer auditory learning, Document Listener
                                    ensures that your content is accessible and convenient.
                                    </p>
                                </div>
                                <div>
                                  <Image
                                    src="/image/document_listner_images/image1.png"
                                    alt="startup template nice complete Document Listner"
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block"
                                  />
                                </div>

                                </div>
                                <div className="mt-20  text-center" >
                                    <h1  className="text-lg md:text-4xl mb-4 font-bold dark:text-white">The only AI tool you need!</h1>
                                    <h3 className="text-2xl">Ask anything, generate questions using AI, understand your documents easily, and much more.</h3>
                                </div>
                            </div>

                            <Timeline data={data}/>

                            <div className="text-center item-center">
                              <h1 className="text-lg md:text-4xl mb-4  dark:text-white">Ready to try it out?</h1>
                              <a className="dark:text-neutral-300 md:text-xl md:text-base text-sm max-w-2xl">Over 20k+ users on ScholarRank. Join them.</a>
                              <div className="item-center justify-center mt-5 flex">
                                <InteractiveHoverButton onClick={()=>router.push('/chat_ui')} text="Get Started Free "/>
                                <div className="ml-5">
                                <button onClick={() => router.push('/price')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-purple-600 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                  View Pricing
                                  </span>
                                </button>
                                </div>
                              </div>

                            </div>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
       
    );
}