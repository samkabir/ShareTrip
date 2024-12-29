'use client';

import { fetchAllProducts } from '@/allApi/allproducts';
import React, { useEffect, useState } from 'react'
import LoadingAnimation from '@/assets/Animation/LoadingAnimation.json';
import ProductCard from '../../Cards/ProductCard/ProductCard';
import Loading from '@/components/Utils/Components/Loading/Loading';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const getAllProducts = async () => {
        setLoading(true);
        const { success, data, message } = await fetchAllProducts();
        if (success) {
            setProducts(data);
        } else {
            setError(message);
        }
        setLoading(false);
    };
    useEffect(() => {
        if (typeof window !== "undefined"){
            getAllProducts();
        }
    }, []);
    
  return (
    <div className='customGridRange my-5'>
        {loading ? (
            <div className='flex justify-center items-center mt-20'>
                <Loading animationData={LoadingAnimation} style="w-[300px] h-[300px]" />
            </div>
        ) : error ? (
            <div className='flex justify-center'>{error}</div>
        ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5  gap-2'>
                {products?.products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )}
    </div>
  )
}

export default AllProducts