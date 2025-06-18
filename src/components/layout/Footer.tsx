import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/AstroLabsLogo.png";

const marqueeItems = [
  "Astro Labs",
  "Work Life Balance",
  "Diverse Team with Field Expertise",
  "Thrive Together",
  "Driving Innovation Through Collective Teamwork",
];

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        const el = marqueeRef.current;
        const totalWidth = el.scrollWidth;

        gsap.fromTo(
          el,
          { x: 0 },
          {
            x: -totalWidth / 2,
            duration: 20,
            ease: "linear",
            repeat: -1,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center px-4 py-16 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-[80px] font-bold mb-6 max-w-[1130px]">
          Innovation begins here. Let’s transform your ideas into impact.
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-gray-300">
          Let’s create with Astro Labs.
        </p>
      </div>

      {/* Scrolling Tagline Strip */}
      <div className="overflow-hidden bg-[#101010] py-2 border-y border-gray-700">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-sm text-[#4682B4] items-center"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="mx-4 flex items-center gap-2">
               {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:col-span-1">
            <img
              src={logo}
              alt="Brahma Byte Lab Logo"
              className="h-[100px] w-[120px] object-contain"
            />
            <p className="text-white font-semibold text-2xl md:text-3xl text-center sm:text-left">
              Astrolabs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-2">Our Services</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>Web Development</li>
              <li>Mobile Application</li>
              <li>Graphics Designing & Administration</li>
              <li>Business Analysis</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-2">Our Company</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>About Us</li>
              <li>Careers</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-2">Products</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>Avical</li>
              <li>Team Monitor</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; 2025 Astro Labs. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Terms & Policy
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
