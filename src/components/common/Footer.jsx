import { ArrowRight } from "lucide-react";
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Stay in the loop
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Get 10% off your first order.
            </h2>

            <p className="mt-2 max-w-lg text-gray-400">
              Subscribe to our newsletter for new arrivals, exclusive offers,
              and style inspiration.
            </p>
          </div>

          <form className="flex w-full max-w-md rounded-full bg-white p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="text-2xl font-bold tracking-tight">
              YOURSTORE<span className="text-gray-500">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Thoughtfully designed essentials made for modern living.
              Quality, comfort, and timeless style in every detail.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-gray-900"
              >
                <FaFacebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/theProviders.Official" target="_blank"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-gray-900"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-gray-900"
              >
                <FaTwitter className="h-4 w-4" />
              </a>

              <a
                href="https://youtube.com/@theProvidersOfficial" target="_blank"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-gray-900"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Help
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-gray-500 sm:flex-row sm:text-left lg:px-8">
          <p>
            Copyright © {new Date().getFullYear()} Muhammad Farhan. All rights
            reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <a target="_blank"
              href="https://youtube.com/@theProvidersOfficial"
              className="font-medium text-gray-300 transition hover:text-white"
            >
              Muhammad Farhan — The Providers Company
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;