import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function NewArrivalsProducts({newProducts}) {
  return (
    <section className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

       
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Handpicked for you
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              New Arrivals products
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-gray-500">
              Discover our most-loved pieces, carefully selected for quality,
              style, and everyday comfort.
            </p>
          </div>

          <Link
            to="/shop"
            className="w-fit text-sm font-semibold text-gray-900 underline underline-offset-4 transition hover:text-gray-500"
          >
            View all products
          </Link>
        </div>

        
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {newProducts.map((product) => (
                <ProductCard product={product} key={product.id}/>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
          >
            Explore all products
          </Link>
        </div>

      </div>
    </section>
  );
}

export default NewArrivalsProducts;