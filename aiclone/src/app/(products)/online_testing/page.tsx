
"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ONLINE_TESTING() {
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
        ease: 'power2.out',
      });
    });
  }, []);
  return (
    <>
      <div className=" px-4 md:px-20 lg:px-32 py-10  mx-auto max-w-[96rem] ">
        <h1 data-aos="fade-right" data-aos-duration="2000" className="text-4xl md:text-5xl text-black dark:text-white text-center font-bold mb-15">ONLINE_TESTING</h1>
        <section data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100" className="text-center dark:text-white  text-black mb-12 ">
        
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-20 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Secure Online Testing Platform: Ensuring Integrity and Convenience</h2>
              <p className="split-text mb-6 text-xl">Our online testing platform has many features to maintain test integrity and provide a user-friendly experience. It has advanced security measures and intuitive controls, so users can focus on their assessments without any distractions or concerns.</p>
              <div className="flex flex-wrap  gap-4">
                <button className="bg-blue-600 cursor-pointer rounded-3xl hover:bg-blue-700 text-white font-semibold hover:font-bold py-2 px-4 ">Get Started Free</button>
                <button className="bg-white border cursor-pointer rounded-3xl border-blue-600 text-blue-600 font-semibold  hover:bg-blue-50 hover:font-bold py-2 px-4 ">View Pricing</button>
              </div>
            </div>
            <Image
              src="/image/Online_testing/online Testing.webp"
              alt="online"
              width={600}
              height={400}
              className="w-full md:w-1/2 hidden md:block rounded-4xl object-contain"
            />

          </div>
        </section>

        <section data-aos="zoom-in" data-aos-duration="2000" className="text-center  mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">The only AI tool you need!</h2>
          <p className="split-text text-2xl  text-gray-700 dark:text-gray-400">Ask anything, generate questions using AI, understand your documents easily, and much more.</p>
        </section>

      

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white px-4 md:px-10 lg:px-20">

          {/* Card 1 */}
          <div data-aos="fade-up-right" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Image src="/image/Online_testing/webcam security.webp" alt="Webcam Security" width={200} height={150}
                className="w-full md:w-1/2 max-w-xs rounded-3xl object-contain" />
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-semibold mb-2">Webcam Security</h3>
                <p className="split-text text-xl leading-tight">Begin by ensuring the integrity of your tests with built-in webcam monitoring, effectively deterring cheating attempts.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up-left" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-6">
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-semibold mb-2">Tab Locking</h3>
                <p className="split-text text-xl leading-tight">Maintain focus during tests by preventing users from accessing other tabs or applications.</p>
              </div>
              <Image src="/image/Online_testing/tabalert.webp" alt="Tab Locking" width={200} height={150}
                className="w-full md:w-1/2 max-w-xs rounded-4xl object-contain" />
            </div>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up-right" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Image src="/image/Online_testing/tab-alert.webp" alt="Tab Alert" width={200} height={150}
                className="w-full md:w-1/2 max-w-xs rounded-4xl object-contain" />
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-semibold mb-2">Tab Alert</h3>
                <p className="split-text text-xl leading-tight">Stay informed with real-time alerts, notifying of unauthorized tab switching.</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div data-aos="fade-up-left" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-6">
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-semibold mb-2">Right-Click Disable</h3>
                <p className="split-text text-xl leading-tight">Prevent users from copying or pasting information by disabling right-click functionality.</p>
              </div>
              <Image src="/image/Online_testing/disble right click.webp" alt="Right Click Disable" width={200} height={150}
                className="w-full md:w-1/2 max-w-xs rounded-4xl object-contain" />
            </div>
          </div>

          {/* Card 5 */}
          <div data-aos="fade-up-right" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Image src="/image/Online_testing/time limits.webp" alt="Time Limits" width={200} height={150}
                className="w-full md:w-1/2 max-w-xs rounded-4xl object-contain" />
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-semibold mb-2">Time Limits</h3>
                <p className="split-text text-xl leading-tight">Set time limits to simulate real-world conditions and encourage timely completion.</p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div data-aos="fade-up-left" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-6">
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-semibold mb-2">Question Randomization</h3>
                <p className="split-text text-xl leading-tight">Randomize questions to reduce the chances of collaboration and ensure fairness.</p>
              </div>
              <Image src="/image/Online_testing/question randmization.webp" alt="Question Randomization" width={200} height={150}
                className="w-full md:w-1/2 max-w-xs rounded-4xl object-contain" />
            </div>
          </div>

          {/* Card 7 */}
          <div data-aos="fade-up-right" data-aos-duration="1000"
            className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-4xl transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Image src="/image/Online_testing/auto-submitted.webp" alt="Auto Submission" width={200} height={150}
                className="w-full md:w-1/2 max-w-xs rounded-4xl object-contain" />
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-semibold mb-2">Auto Submission</h3>
                <p className="split-text text-xl leading-tight">Automatically submit tests when time expires or user completes the test.</p>
              </div>
            </div>
          </div>
        </div>



        <section data-aos="fade-up" data-aos-duration="2000" className="text-center dark:text-white  text-black mt-20">
          <h2 className="text-3xl font-bold mb-4">Ready to try it out?</h2>
          <p className="mb-6 text-2xl  text-gray-700 dark:text-gray-400">Over 20k+ users on ScholarRank. Join them.</p>
          <div className="flex flex-wrap justify-center cursor-pointer gap-4">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 hover:font-bold rounded-3xl">Get Started Free</button>
            <button className="bg-white border cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50 hover:font-bold font-semibold py-2 px-4 rounded-3xl">View Pricing</button>
          </div>
        </section>
      </div>
    </>
  );
}