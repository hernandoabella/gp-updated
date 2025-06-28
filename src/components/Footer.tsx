import { FaLinkedin, FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Social */}
        <div>
          <Image src="/logo.png" alt="G&P" width={180} height={40} />
          <p className="mt-4 text-sm text-[#0b2f61] font-bold">Follow Us</p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-[#be8f33] hover:text-[#0b2f61] transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-[#0b2f61]">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Shipbroker</li>
            <li>Logistics Solutions</li>
            <li>Naval Repairs</li>
            <li>Maritime Representations</li>
            <li>Shipper Owned Container</li>
            <li>Container Rental and Sales</li>
          </ul>
        </div>

        {/* Column 3 - Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-[#0b2f61]">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Business Lines</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4 - Brochure */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-[#0b2f61]">Brochure</h3>
          <p className="text-sm mb-4">
            Download our brochure to explore our services, features, and how we can help you.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="/brochure-es.pdf"
              download
              className="bg-[#be8f33] hover:bg-[#0b2f61] text-white text-sm px-3 py-2 rounded-full inline-flex items-center transition"
            >
              <FaDownload className="mr-2" />
              Spanish
            </a>
            <a
              href="/brochure-en.pdf"
              download
              className="bg-[#be8f33] hover:bg-[#0b2f61] text-white text-sm px-3 py-2 rounded-full inline-flex items-center transition"
            >
              <FaDownload className="mr-2" />
              English
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm">
      © {new Date().getFullYear()} G&P - Shipping Management & Co. All rights reserved.
      </div>
    </footer>
  );
}