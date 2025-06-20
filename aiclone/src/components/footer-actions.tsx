import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer_actions() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 mx-auto max-w-[96rem]">
      <div className="max-w-[96rem] mx-auto px-6">

        <div className="flex flex-col max-[1079px]:flex-col lg:flex-row justify-center items-start gap-10 border-b border-white/20 pb-6">

          {/* Logo + Social Icons */}
          <div className="w-full lg:w-1/4 max-[1079px]:w-full text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo-sm.png" alt="logo" width={48} height={48} className="object-cover" />
              <h2 className="text-3xl sm:text-4xl font-bold">ScholarRank</h2>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start mt-2">
              <a href="#" className="bg-white rounded-full p-2 hover:bg-blue-200 transition-all">
                <FaFacebookF className="text-black text-lg" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:bg-blue-200 transition-all">
                <FaTwitter className="text-black text-lg" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:bg-pink-200 transition-all">
                <FaInstagram className="text-black text-lg" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:bg-blue-300 transition-all">
                <FaLinkedinIn className="text-black text-lg" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="w-full lg:w-3/4 max-[1079px]:w-full flex flex-col sm:flex-row justify-end max-[1079px]:items-center max-[1079px]:justify-center gap-12 text-center max-[1079px]:text-center lg:text-left text-sm lg:text-base">

            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Contact Us</h4>
              <ul className="space-y-1 text-white/80">
                <li><a href="#" className="hover:text-white">+91 7258876459</a></li>
                <li><a href="#" className="hover:text-white">sales@scholarrank.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">About us</h4>
              <ul className="space-y-1 text-white/80">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Ask AI</a></li>
                <li><a href="#" className="hover:text-white">AiQuestionGen</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Useful Links</h4>
              <ul className="space-y-1 text-white/80">
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white">Google play</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="pt-4 flex justify-center max-[1079px]:justify-center lg:justify-end text-sm text-white/80 flex-wrap gap-4 text-center lg:text-right">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>

      </div>
    </footer>
  );
}