import React, { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/Hero'
import Footer from '../components/common/Footer'
import ShopByCategory from '../components/products/ShopByCategory'
import FeaturedProducts from '../components/products/FeaturedProducts'
import NewArrivalsProducts from '../components/products/NewArrivalsProducts'
import { getAllCategory, getAllFeaturedProducts, getAllNewProducts } from '../services/productService'
import HomeProductsSkeleton from '../components/skeleton/HomeProductsSkeleton'

function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    const fetchAllHomeData = async () => {
        try {
            setLoading(true);

            const [categoriesData, featuredData, newProductsData] = await Promise.all([
                getAllCategory(),
                getAllFeaturedProducts(),
                getAllNewProducts()
            ]);

            setCategories(categoriesData);
            setFeaturedProducts(featuredData);
            setNewProducts(newProductsData);

        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {

        fetchAllHomeData();

    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <ShopByCategory categories={categories} />
            {loading ? <HomeProductsSkeleton /> : <FeaturedProducts featuredProducts={featuredProducts} />}
            {loading ? <HomeProductsSkeleton /> : <NewArrivalsProducts newProducts={newProducts} />}
            <Footer />
        </>
    )
}

export default Home
