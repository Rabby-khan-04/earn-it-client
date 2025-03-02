import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaAndroid,
  FaApple,
} from "react-icons/fa6";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="container py-5 flex items-center justify-between border-b border-text/20">
        <ul className="flex items-center gap-7 text-title font-dm-sans font-normal text-lg">
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>

        <ul className="flex items-center gap-4">
          <li>
            <p className="text-title font-dm-sans font-normal text-lg">
              Follow Us
            </p>
          </li>
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>

      <div className="container py-10 grid grid-cols-5 gap-10 border-b border-text/20">
        <div className="col-span-2 space-y-3">
          <Link to="/" className="inline-block">
            <img src={logo} className="w-40 inline-block" alt="" />
          </Link>
          <p className="font-inter text-text text-base font-normal">
            We connect businesses with skilled freelancers worldwide, providing
            a secure and efficient platform for task completion. Whether for
            quick gigs or long-term work, we make earning and hiring seamless.
          </p>
        </div>
        <div className="">
          <p className="text-title font-dm-sans font-normal text-lg mb-5">
            About
          </p>

          <ul className="text-text font-inter space-y-[10px]">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Become Seller</Link>
            </li>
            <li>
              <Link to="/">Jobs on EarnIt.io</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="text-title font-dm-sans font-normal text-lg mb-5">
            Support
          </p>

          <ul className="text-text font-inter space-y-[10px]">
            <li>
              <Link to="/">Help & Support</Link>
            </li>
            <li>
              <Link to="/">FAQ EarnIt.io</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-title font-dm-sans font-normal text-lg mb-5">
              Subscribe
            </p>
            <div
              htmlFor="newsletter"
              className="flex items-center bg-white rounded-md border border-text/20 px-5 py-[10px]"
            >
              <Input
                type="email"
                id="newsletter"
                className="border-none outline-none focus:border-none focus:outline-none"
                placeholder="Your email address"
              />
              <button type="button">Send</button>
            </div>
          </div>

          <div className="">
            <p className="text-title font-dm-sans font-normal text-lg mb-5">
              App
            </p>
            <div className="flex items-center gap-2 text-text font-inter mb-2">
              <FaApple className="text-lg" />
              <p>IOS App</p>
            </div>
            <div className="flex items-center gap-2 text-text font-inter">
              <FaAndroid className="text-lg" />
              <p>Android App App</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 text-center text-text font-inter">
        <p>&copy; EarnIt.io {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
