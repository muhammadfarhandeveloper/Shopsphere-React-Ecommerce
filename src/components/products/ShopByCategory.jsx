import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function ShopByCategory({ categories }) {

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Explore our collection
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Shop by category
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-gray-500">
              Find exactly what you're looking for with our carefully curated
              collections.
            </p>
          </div>

          <Link
            to="/shop"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-900"
          >
            View all products
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Categories */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {categories.length > 0 ?
            categories.map((category) => (
              <Link
                key={category.name}
                to={`/shop?category=${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-[1.75rem] bg-gray-100"
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                    {category.description}
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {category.name}
                    </h3>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-900 transition duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            )) :
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[1.75rem] bg-gray-200"
              >
                <div className="aspect-[3/4] animate-pulse bg-slate-300" />

                {/* Skeleton content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="h-3 w-20 animate-pulse rounded bg-slate-400" />

                  <div className="mt-3 flex items-center justify-between">
                    <div className="h-6 w-28 animate-pulse rounded bg-slate-400" />
                    <div className="h-9 w-9 animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </div>
            ))

          }

        </div>

      </div>
    </section>
  );
}

export default ShopByCategory;