import React, { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/Hero'
import Footer from '../components/common/Footer'
import ShopByCategory from '../components/products/ShopByCategory'
import { getAllCategory } from '../services/productService'

function Home() {

    const [categories, setCategories] = useState([]);

    const fetchAllCategory = async () => {

        let data = await getAllCategory();

        setCategories(data);

    }

    useEffect(() => {

        fetchAllCategory();

    }, []);

    return (
        <>
            <Navbar />
            <Hero />

            <ShopByCategory categories={categories} />
           

            <Footer />
        </>
    )
}

export default Home
