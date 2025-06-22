import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footeractions() {
  return (
    <footer className=" pt-10 pb-6 mx-auto max-w-[96rem]">
      <div className="max-w-[96rem] mx-auto px-6">

        <div className="flex flex-col max-[1079px]:flex-col lg:flex-row justify-center items-start gap-15 border-b border-t border-black dark:border-white/20 pt-6 pb-6">

          {/* Logo + Social Icons */}
          <div className="w-full lg:w-1/4 max-[1079px]:w-full text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo-sm.png" alt="logo" width={48} height={48} className="object-cover" />
              <h2 className="text-3xl sm:text-4xl font-bold">ScholarRank</h2>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start mt-2">
              <a href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gray-300 rounded-full p-2 hover:bg-blue-300 transition-all">
                <FaFacebookF className="text-black text-lg" />
              </a>
              <a href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gray-300 rounded-full p-2 hover:bg-blue-300 transition-all">
                <FaTwitter className="text-black text-lg" />
              </a>
              <a href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gray-300 rounded-full p-2 hover:bg-pink-300 transition-all">
                <FaInstagram className="text-black text-lg" />
              </a>
              <a href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gray-300 rounded-full p-2 hover:bg-blue-400 transition-all">
                <FaLinkedinIn className="text-black text-lg" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
         <div className="w-full lg:w-3/4 max-[1079px]:w-full flex flex-col sm:flex-row sm:items-start sm:justify-evenly text-center sm:text-left text-sm lg:text-base">

            <div>
              <h4 className="text-purple-600 text-2xl font-semibold mb-2">Contact Us</h4>
              <ul className="space-y-1 text-black dark:text-white/80">
                <li><a href="tel:+917258876459" className="hover:text-purple-400">+91 7258876459</a></li>
                <li><a href="mailto:sales@scholarrank.com" className="hover:text-purple-400">sales@scholarrank.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-600 text-2xl font-semibold mb-2">About Us</h4>
              <ul className="space-y-1 text-black dark:text-white/80">
                <li>
                  <Link href="/" className="hover:text-purple-400">Home</Link>
                </li>
                <li>
                  <Link href="/ask_ai" className="hover:text-purple-400">Ask AI</Link>
                </li>
                <li>
                  <Link href="/ai_question_gen" className="hover:text-purple-400">AiQuestionGen</Link>
                </li>
                <li>
                  <Link href="/price" className="hover:text-purple-400">Pricing</Link>
                </li>

              </ul>
            </div>
            <div>
              <h4 className="text-purple-600 text-2xl font-semibold mb-2">Useful Links</h4>
              <ul className="space-y-1 text-black dark:text-white/80">
                <li><Link href="/privacy-policy" className="hover:text-purple-400">Privacy policy</Link></li>
                <li><Link href="/Google-play" className="hover:text-purple-400">Google play</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="pt-4 flex justify-center max-[1079px]:justify-center lg:justify-end text-black text-sm dark:text-white/80 flex-wrap gap-4 text-center lg:text-right">
          <Link href="/terms-of-service" className="hover:text-purple-400">Terms of Service</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:text-purple-400">Privacy Policy</Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-purple-400">Contact Us</Link>

        </div>

      </div>
    </footer>
  );
}