

"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Classes() {
    useEffect(() => {
    const elements = document.querySelectorAll('.split-text');

    elements.forEach((el, index) => {
      const split = new SplitType(el as HTMLElement, {
        types: 'words',
        tagName: 'span',
      });

      gsap.from(split.words, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.05,
        delay: index * 0.1, 
        ease: 'power2.out',
      });
    });
  }, []);
  return (
    <>
      <div className="px-4 md:px-20 lg:px-32 py-10 bg-black mx-auto max-w-[96rem] ">
        <h1 data-aos="fade-right" data-aos-duration="2000" className="text-4xl md:text-5xl text-white text-center font-bold mb-15">PRO_CUT</h1>
        <section data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100" className="text-center text-white mb-12 ">
          <div className="flex flex-row md:flex-row items-center mb-3  ">
            <div className=" text-blue-500"><a href="/">Products</a></div>
            <div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
              <path
                d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            </div>
            <div className="text-green-500">Procut</div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-20 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Procut: Effortlessly Create Memes, Jokes, and Marketing Videos</h2>
              <p className="split-text mb-6 text-2xl">With Procut, you can easily generate engaging content, including memes, jokes, and marketing videos, in just a few clicks. Whether you're looking to entertain your audience or promote your brand, Procut streamlines the creation process, saving you time and effort.</p>
              <div className="flex flex-wrap  gap-4">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Coming Soon...</button>

              </div>
            </div>
            <Image
              src="/image/procut/procut.webp"
              alt="procut"
              width={600}
              height={400}
              className="w-full md:w-1/2 h-auto object-contain"
            />
          </div>
        </section>

        <section data-aos="zoom-in" data-aos-duration="2000" className="text-center mb-16">
          <h2 className=" split-text text-3xl text-white font-bold mb-2">The only AI tool you need!</h2>
          <p className=" split-text text-2xl text-gray-400">Ask anything, generate questions using AI, understand your documents easily, and much more.</p>
        </section>


        <div className="space-y-20 text-white">

          <div data-aos="fade-up-right" data-aos-duration="2000" className="flex flex-col md:flex-row items-center  justify-center  gap-10">
            <Image src="/image/procut/meme generate.webp" alt="meme" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-cover" />
            <div>
              <h3 className="text-4xl font-semibold mb-2">
                Meme Generation</h3>
              <p className=" split-text text-2xl" >Start by swiftly creating humorous memes that entertain your audience and drive engagement effortlessly.</p>
            </div>
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="2000" className="flex flex-col-reverse md:flex-row items-center justify-center  gap-10">
            <div>
              <h3 className="text-4xl font-semibold mb-2">Marketing Video Creation</h3>
              <p className=" split-text text-2xl">Design captivating marketing videos to effectively promote your products or services, enhancing your brand's visibility and reach.</p>
            </div>
            <Image src="/image/procut/marketing video.webp" alt="marketing video" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-cover" />
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="2000" className="flex flex-col md:flex-row items-center justify-center  gap-10">
            <Image src="/image/procut/user friendly.webp" alt="user friendly" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-cover" />
            <div>
              <h3 className="text-4xl font-semibold mb-2">
                User-Friendly Interface</h3>
              <p className=" split-text text-2xl">Benefit from Procut's intuitive interface, simplifying content creation and making the process both easy and enjoyable.</p>
            </div>
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-left" data-aos-delay="150" data-aos-duration="2000" className="flex flex-col-reverse md:flex-row items-center  justify-center gap-10">
            <div>
              <h3 className="text-4xl font-semibold mb-2">Time-Saving</h3>
              <p className=" split-text text-2xl" >Save valuable time and resources by utilizing Procut to generate high-quality content quickly, allowing you to focus on other essential tasks.</p>
            </div>
            <Image src="/image/procut/time saving.webp" alt="time saving" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-cover" />
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-right" data-aos-delay="200" data-aos-duration="2000" className="flex flex-col md:flex-row items-center justify-center  gap-10">
            <Image src="/image/procut/innovative solution.webp" alt="innovative solution" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-cover" />
            <div>
              <h3 className="text-4xl font-semibold mb-2">
                Innovative Solution</h3>
              <p className=" split-text text-2xl" >Embrace Procut as an innovative solution for content creation, empowering you to differentiate yourself in a competitive digital landscape and capture audience attention effectively.</p>
            </div>
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8  object-contain" />
        </div>

        <section data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200" className="text-center text-white mt-20">
          <h2 className="text-3xl font-bold mb-4">Ready to try it out?</h2>
          <p className="mb-6">Over 20k+ users on ScholarRank. Join them.</p>
          <div className="flex flex-wrap justify-center cursor-pointer gap-4">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Get Started Free</button>
            <button className="bg-white border cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded">View Pricing</button>
          </div>
        </section>
      </div>
    </>
  );
}
