import {ArrowRight,Check} from 'lucide-react';
import BannerImage from '../../assets/images/banner.avif';

function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f7f5]">
            <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
                {/* Left Content */}
                <div className="relative z-10 max-w-xl">
                    <span className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                        New collection is here
                    </span>

                    <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                        Elevate your
                        <span className="block text-gray-500">everyday style.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
                        Discover thoughtfully designed essentials made for modern living.
                        Premium quality, timeless style, and effortless comfort.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#shop"
                            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
                        >
                            Shop collection
                            <ArrowRight className='w-4 h-4'/>
                        </a>

                        <a
                            href="#featured"
                            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                        >
                            Explore products
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
                                <Check/>
                            </span>
                            Free shipping
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
                                <Check/>
                            </span>
                            Easy returns
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
                                 <Check/>
                            </span>
                            Secure checkout
                        </div>
                    </div>
                </div>

                {/* Right Product Visual */}
                <div className="relative mx-auto w-full max-w-xl">
                    {/* Decorative background */}
                    <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4e0d8]" />

                    <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl">
                        <img
                            src={BannerImage}
                            alt="Modern fashion collection"
                            className="h-full w-full object-cover"
                        />

                        {/* Floating product card */}
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Featured
                                </p>
                                <h3 className="mt-1 font-semibold text-gray-900">
                                    Essential Collection
                                </h3>
                            </div>

                            <div className="text-right">
                                <p className="text-lg font-bold text-gray-900">$89</p>
                                <p className="text-xs text-gray-500">From</p>
                            </div>
                        </div>
                    </div>

                    {/* Discount badge */}
                    <div className="absolute -right-3 top-8 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-gray-900 text-center text-sm font-bold text-white shadow-xl sm:-right-6">
                        Up to
                        <br />
                        30% OFF
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
        </section>
    )
}

export default Hero
