import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footeractions() {
  return (
    <footer className="  bg-black text-white pt-10 pb-6 mx-auto max-w-[96rem] ">
      <div data-aos="fade-up" data-aos-duration="5000" data-aos-delay="400" className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">


        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Google Play</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Ask Ai</a></li>
            <li><a href="#" className="hover:text-white">AiQuestionGen</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">+91 7258876459</a></li>
            <li><a href="#" className="hover:text-white">sales@scholarrank.com</a></li>
          </ul>
        </div>


        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4">Our Social Networks</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-white rounded-lg p-2 hover:bg-blue-200 transition-all">
              <FaTwitter className="text-blue-500 text-xl" />
            </a>
            <a href="#" className="bg-white rounded-lg p-2 hover:bg-blue-200 transition-all">
              <FaFacebookF className="text-blue-700 text-xl" />
            </a>
            <a href="#" className="bg-white rounded-lg p-2 hover:bg-pink-200 transition-all">
              <FaInstagram className="text-pink-500 text-xl" />
            </a>
            <a href="#" className="bg-white rounded-lg p-2 hover:bg-blue-300 transition-all">
              <FaLinkedinIn className="text-blue-700 text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/80">
        © 2023 Invithi Software Private Limited. All rights reserved.
      </div>
    </footer>
  );
}
