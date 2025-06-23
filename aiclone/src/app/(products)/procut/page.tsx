

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
      <div className="px-4 md:px-20 lg:px-32 py-10  mx-auto max-w-[96rem] ">
        <h1 data-aos="fade-right" data-aos-duration="2000" className="text-4xl md:text-5xl dark:text-white  text-black text-center font-bold mb-15">PROCUT</h1>
        <section data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100" className="text-center dark:text-white  text-black  mb-12 ">
         
          <div className="flex flex-col-reverse md:flex-row mt-0 items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-20 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Procut: Effortlessly Create Memes, Jokes, and Marketing Videos</h2>
              <p className="split-text mb-6 text-xl">With Procut, you can easily generate engaging content, including memes, jokes, and marketing videos, in just a few clicks. Whether you're looking to entertain your audience or promote your brand, Procut streamlines the creation process, saving you time and effort.</p>
              <div className="flex flex-wrap  gap-4">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold hover:font-bold py-2 px-4 rounded-3xl">Coming Soon...</button>

              </div>
            </div>
            <Image
              src="/image/procut/procut.webp"
              alt="procut"
              width={600}
              height={400}
              className="w-full md:w-1/2 hidden md:block rounded-4xl object-contain"
            />
          </div>
        </section>

        <section data-aos="zoom-in" data-aos-duration="2000" className="text-center mb-16">
          <h2 className=" split-text text-3xl text-black dark:text-white font-bold mb-2">The only AI tool you need!</h2>
          <p className=" split-text text-2xl text-gray-700 dark:text-gray-400">Ask anything, generate questions using AI, understand your documents easily, and much more.</p>
        </section>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

          {/* Card 1 */}
          <div data-aos="fade-up-right" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-md hover:shadow-2xl w-full overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center gap-6 w-full">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/image/procut/meme generate.webp" alt="meme" width={200} height={150}
                  className="w-[150px] h-auto object-cover rounded-4xl" />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-2">Meme Generation</h3>
                <p className="split-text text-xl">Start by swiftly creating humorous memes that entertain your audience and drive engagement effortlessly.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-md hover:shadow-2xl w-full overflow-hidden">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-6 w-full">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-2">Marketing Video Creation</h3>
                <p className="split-text text-xl">Design captivating marketing videos to effectively promote your products or services, enhancing your brand's visibility and reach.</p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/image/procut/marketing video.webp" alt="marketing video" width={200} height={150}
                  className="w-[150px] h-auto object-cover rounded-4xl" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-md hover:shadow-xl w-full overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center gap-6 w-full">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/image/procut/user friendly.webp" alt="user friendly" width={200} height={150}
                  className="w-[150px] h-auto object-cover rounded-4xl" />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-2">User-Friendly Interface</h3>
                <p className="split-text text-xl">Benefit from Procut's intuitive interface, simplifying content creation and making the process both easy and enjoyable.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div data-aos="fade-up-left" data-aos-delay="150" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-md hover:shadow-2xl w-full overflow-hidden">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-6 w-full">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-2">Time-Saving</h3>
                <p className="split-text text-xl">Save valuable time and resources by utilizing Procut to generate high-quality content quickly, allowing you to focus on other essential tasks.</p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/image/procut/time saving.webp" alt="time saving" width={200} height={150}
                  className="w-[150px] h-auto object-cover rounded-4xl" />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div data-aos="fade-up-right" data-aos-delay="200" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-md hover:shadow-2xl w-full overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center gap-6 w-full">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/image/procut/innovative solution.webp" alt="innovative solution" width={200} height={150}
                  className="w-[150px] h-auto object-cover rounded-4xl" />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-2">Innovative Solution</h3>
                <p className="split-text text-xl">Embrace Procut as an innovative solution for content creation, empowering you to differentiate yourself in a competitive digital landscape and capture audience attention effectively.</p>
              </div>
            </div>
          </div>

        </div>


        <section data-aos="fade-up" data-aos-duration="2000" className="text-center text-white mt-20">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Ready to try it out?</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-400">Over 20k+ users on ScholarRank. Join them.</p>
          <div className="flex flex-wrap justify-center cursor-pointer gap-4">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-4xl hover:font-bold text-white font-semibold py-2 px-4 ">Get Started Free</button>
            <button className="bg-white border cursor-pointer border-blue-600 rounded-4xl hover:font-bold text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 ">View Pricing</button>
          </div>
        </section>
      </div>
    </>
  );
}
