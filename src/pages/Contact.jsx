import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"
import { ArrowDown, MessageCircle, PhoneCall, Clock3,Mail,MapPin,Phone,Send } from "lucide-react";

function Contact() {
    return (
        <>
            <Navbar />
            <section className="relative overflow-hidden bg-[#f7f7f5]">
                {/* Decorative shapes */}
                <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#e8e5de] blur-3xl" />
                <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#e4e0d8] blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Badge */}
                        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                            We'd love to hear from you
                        </span>

                        {/* Heading */}
                        <h1 className="mt-7 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                            Let's start a
                            <span className="block text-gray-500">conversation.</span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            Have a question about your order, our products, or anything else?
                            Our team is here to help. Send us a message and we'll get back to
                            you as soon as possible.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                href="#contact-form"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
                            >
                                Send us a message
                                <ArrowDown className="h-4 w-4" />
                            </a>

                            <a
                                href="mailto:hello@example.com"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                            >
                                <Mail className="h-4 w-4" />
                                Email us
                            </a>
                        </div>
                    </div>

                    {/* Contact Cards */}
                    <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">
                        {/* Email */}
                        <div className="group rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                                <Mail className="h-5 w-5" />
                            </div>

                            <h3 className="mt-5 font-semibold text-gray-900">Email us</h3>

                            <p className="mt-2 text-sm text-gray-500">
                                hello@example.com
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="group rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                                <Phone className="h-5 w-5" />
                            </div>

                            <h3 className="mt-5 font-semibold text-gray-900">Call us</h3>

                            <p className="mt-2 text-sm text-gray-500">
                                +92 300 1234567
                            </p>
                        </div>

                        {/* Support */}
                        <div className="group rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                                <MessageCircle className="h-5 w-5" />
                            </div>

                            <h3 className="mt-5 font-semibold text-gray-900">Live support</h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Mon – Sat, 9am – 6pm
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
            </section>
            
              <section
      id="contact-form"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* Form */}
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Contact form
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tell us how we can help.
              </h2>

              <p className="mt-3 max-w-xl text-gray-500">
                Fill out the form below and our team will get back to you
                within 1–2 business days.
              </p>
            </div>

            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Muhammad Farhan"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order inquiry</option>
                    <option value="product">Product question</option>
                    <option value="return">Return & exchange</option>
                    <option value="shipping">Shipping inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us a little more about your question..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-700 sm:w-auto"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pt-14">
            <div className="rounded-[2rem] bg-gray-950 p-8 text-white sm:p-10">

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                Get in touch
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                We're here for you.
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Whether you have a question about an order or simply want to
                know more about our products, feel free to reach out.
              </p>

              <div className="mt-8 space-y-6">

                {/* Email */}
                <a
                  href="mailto:hello@example.com"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-white group-hover:text-gray-900">
                    <Mail className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="mt-1 text-sm font-medium">
                      hello@example.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923001234567"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-white group-hover:text-gray-900">
                    <Phone className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="mt-1 text-sm font-medium">
                      +92 300 1234567
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm text-gray-400">Our location</p>
                    <p className="mt-1 text-sm font-medium">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock3 className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm text-gray-400">Working hours</p>
                    <p className="mt-1 text-sm font-medium">
                      Mon – Sat, 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Response box */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold">
                  Quick response guaranteed
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Our support team typically responds within a few hours
                  during business days.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

            <Footer />
        </>
    )
}

export default Contact
