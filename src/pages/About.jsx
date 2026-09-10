import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar";
import {ArrowDown,  Heart, Leaf, Sparkles, Target } from 'lucide-react';
import AboutImage from '../assets/images/banner.avif';

function About() {
  return (
    <>
        <Navbar/>
          <section className="relative overflow-hidden bg-[#f7f7f5]">
      {/* Decorative Background */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#e7e3da] blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#e3dfd6] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            Our story
          </span>

          {/* Heading */}
          <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Designed with purpose.
            <span className="block text-gray-500">
              Made for everyday life.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We believe great products should be simple, thoughtful, and built
            to last. Our journey started with one goal — creating everyday
            essentials that make life a little better.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href="#our-story"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Discover our story
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:grid-cols-4">
          <div className="border-b border-gray-200 p-6 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-bold text-gray-900">10K+</p>
            <p className="mt-1 text-sm text-gray-500">Happy customers</p>
          </div>

          <div className="border-b border-gray-200 p-6 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-bold text-gray-900">50+</p>
            <p className="mt-1 text-sm text-gray-500">Products</p>
          </div>

          <div className="border-b border-gray-200 p-6 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-bold text-gray-900">4.9/5</p>
            <p className="mt-1 text-sm text-gray-500">Customer rating</p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-bold text-gray-900">5+</p>
            <p className="mt-1 text-sm text-gray-500">Years of excellence</p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
    </section>

      <section id="our-story" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Story */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-gray-100">
              <img
                src={AboutImage}
                alt="Our store"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 max-w-[230px] rounded-2xl bg-gray-950 p-5 text-white shadow-xl sm:-right-6">
              <Sparkles className="h-5 w-5 text-gray-300" />

              <p className="mt-3 text-sm font-medium leading-6">
                "Quality isn't an option. It's our standard."
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Who we are
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              More than a store.
              <span className="block text-gray-400">
                We're building a lifestyle.
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-gray-600">
              <p>
                What started as a simple idea has grown into a community of
                people who value quality, thoughtful design, and products that
                genuinely fit into everyday life.
              </p>

              <p>
                Every product we offer is carefully selected with the same
                principle in mind: it should look good, feel good, and be made
                to last.
              </p>

              <p>
                We don't believe in following every trend. Instead, we focus
                on creating a collection of timeless essentials that you can
                enjoy season after season.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="font-serif text-2xl italic text-gray-900">
                Muhammad Farhan
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Founder & Creative Director
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              What we believe
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our values guide everything we do.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Value 1 */}
            <div className="rounded-3xl border border-gray-200 bg-[#f7f7f5] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                <Sparkles className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Quality
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We never compromise on the quality of the products we bring
                to you.
              </p>
            </div>

            {/* Value 2 */}
            <div className="rounded-3xl border border-gray-200 bg-[#f7f7f5] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                <Heart className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Customer first
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Every decision starts with creating a better experience for
                our customers.
              </p>
            </div>

            {/* Value 3 */}
            <div className="rounded-3xl border border-gray-200 bg-[#f7f7f5] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                <Leaf className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Conscious choices
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We believe in making thoughtful choices that are better for
                people and the world around us.
              </p>
            </div>

            {/* Value 4 */}
            <div className="rounded-3xl border border-gray-200 bg-[#f7f7f5] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                <Target className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Purpose
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We create with intention, focusing on products that add real
                value to everyday life.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

        <Footer/>
    </>
  )
}

export default About
