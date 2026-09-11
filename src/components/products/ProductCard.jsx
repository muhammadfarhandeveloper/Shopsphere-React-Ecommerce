import { Heart, ShoppingBag, Star } from "lucide-react";

function ProductCard({product}) {
    return (
        <article key={product.id} className="group">

            {/* Product Image */}
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gray-200">

                <a
                    href={`/product/${product.id}`}
                    className="block aspect-[4/5] overflow-hidden"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                </a>

                {/* Badge */}
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-900 shadow-sm">
                    {product.badge}
                </span>

                {/* Wishlist */}
                <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-gray-900 hover:text-white"
                >
                    <Heart className="h-4 w-4" />
                </button>

                {/* Add to Cart */}
                <button
                    type="button"
                    className="absolute bottom-3 left-3 right-3 flex translate-y-16 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <ShoppingBag className="h-4 w-4" />
                    Add to cart
                </button>
            </div>

            {/* Product Info */}
            <div className="mt-4">

                {/* Category */}
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    {product.category}
                </p>

                {/* Product Name */}
                <a href={`/product/${product.id}`}>
                    <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-gray-900 transition hover:text-gray-500 sm:text-base">
                        {product.name}
                    </h3>
                </a>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                        <Star className="h-3.5 w-3.5 fill-current text-gray-900" />
                        <span className="text-xs font-medium text-gray-700">
                            {product.rating}
                        </span>
                    </div>

                    <span className="text-xs text-gray-400">
                        ({product.reviews})
                    </span>
                </div>

                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900">
                        {product.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                    </span>
                </div>
            </div>
        </article>
    )
}

export default ProductCard
