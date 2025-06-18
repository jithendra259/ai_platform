
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
        delay: index * 0.1, 
        ease: 'power2.out',
      });
    });
  }, []);
  return (
    <>
      <div className=" px-4 md:px-20 lg:px-32 py-10 bg-black mx-auto max-w-[96rem] ">
        <h1 data-aos="fade-right" data-aos-duration="2000" className="text-4xl md:text-5xl text-white text-center font-bold mb-15">ONLINE_TESTING</h1>
        <section data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100" className="text-center  text-white mb-12 ">
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
            <div className="text-green-500">Online Testing</div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-20 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Secure Online Testing Platform: Ensuring Integrity and Convenience</h2>
              <p className="split-text mb-6 text-2xl">Our online testing platform has many features to maintain test integrity and provide a user-friendly experience. It has advanced security measures and intuitive controls, so users can focus on their assessments without any distractions or concerns.</p>
              <div className="flex flex-wrap  gap-4">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Get Started Free</button>
                <button className="bg-white border cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded">View Pricing</button>
              </div>
            </div>
            <Image
              src="/image/Online_testing/online Testing.webp"
              alt="online"
              width={600}
              height={400}
              className="w-full md:w-1/2 h-auto object-contain"
            />

          </div>
        </section>

        <section data-aos="zoom-in" data-aos-duration="2000" className="text-center  mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">The only AI tool you need!</h2>
          <p className="split-text text-2xl  text-gray-400">Ask anything, generate questions using AI, understand your documents easily, and much more.</p>
        </section>


        <div className="space-y-20 text-white">

          <div data-aos="fade-up-right" data-aos-duration="2000" className="flex flex-col md:flex-row items-center  justify-center  gap-10">
            <Image src="/image/Online_testing/webcam security.webp" alt="Webcam Security" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-contain" />
            <div>
              <h3 className="text-4xl font-semibold mb-2">Webcam Security</h3>
              <p className="split-text text-2xl" >Begin by ensuring the integrity of your tests with built-in webcam monitoring, effectively deterring cheating attempts.</p>
            </div>
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-left" data-aos-duration="2000" className="flex flex-col-reverse md:flex-row items-center justify-center  gap-10">
            <div>
              <h3 className="text-4xl font-semibold mb-2">Tab Locking</h3>
              <p className=" split-text text-2xl" >Maintain focus during tests by preventing users from accessing other tabs or applications, ensuring undivided attention to the task at hand.</p>
            </div>
            <Image src="/image/Online_testing/tabalert.webp" alt="Tab Locking" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-contain" />
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-right"  data-aos-duration="2000" className="flex flex-col md:flex-row items-center justify-center  gap-10">
            <Image src="/image/Online_testing/tab-alert.webp" alt="Tab Alert" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-contain" />
            <div>
              <h3 className="text-4xl font-semibold mb-2">Tab Alert</h3>
              <p className=" split-text text-2xl" >Stay informed with real-time alerts, notifying you of any unauthorized tab switching during test sessions, allowing for prompt intervention.</p>
            </div>
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-left"  data-aos-duration="2000" className="flex flex-col-reverse md:flex-row items-center  justify-center gap-10">
            <div>
              <h3 className="text-4xl font-semibold mb-2">Right-Click Disable</h3>
              <p className=" split-text text-2xl" >Safeguard test content by disabling right-click functionality, preventing users from copying or pasting information and maintaining test integrity.</p>
            </div>
            <Image src="/image/Online_testing/disble right click.webp" alt="Right Click Disable" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-contain" />
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-right"  data-aos-duration="2000" className="flex flex-col md:flex-row items-center justify-center  gap-10">
            <Image src="/image/time limits.webp" alt="Time Limits" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-contain" />
            <div>
              <h3 className="text-4xl font-semibold mb-2">Time Limits</h3>
              <p className=" split-text text-2xl" >Encourage timely completion of tests and simulate real-world conditions by setting time limits, fostering a sense of urgency and accountability.</p>
            </div>
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8  object-contain" />

          <div data-aos="fade-up-left"  data-aos-duration="2000" className="flex flex-col md:flex-row items-center  justify-center gap-10">
            <div>
              <h3 className="text-4xl font-semibold mb-2">Question Randomization</h3>
              <p className=" split-text text-2xl">Minimize the impact of collaboration or cheating by randomizing the order of questions, ensuring fairness and impartiality in assessment.</p>
            </div>
            <Image src="/image/Online_testing/question randmization.webp" alt="Question Randomization" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-contain" />
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />

          <div data-aos="fade-up-right"  data-aos-duration="2000" className="flex flex-col md:flex-row items-center justify-center  gap-10">
            <Image src="/image/Online_testing/auto-submitted.webp" alt="Auto Submission" width={200} height={150} className="w-full md:w-1/2 max-w-xs object-contain" />
            <div>
              <h3 className="text-4xl font-semibold mb-2">Auto Submission</h3>
              <  p className=" split-text text-2xl">Prevent unauthorized changes and ensure test completion integrity by automatically submitting tests upon completion or when the time limit expires.</p>
            </div>
          </div>
          <Image data-aos="fade-up" data-aos-duration="2000" src="/divider.svg" alt="divider" width={2000} height={150} className="w-full h-auto my-8 object-contain" />
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