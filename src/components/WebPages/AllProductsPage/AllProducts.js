'use client';

import { fetchAllProducts } from '@/allApi/allproducts';
import React, { useEffect, useState } from 'react'
import LoadingAnimation from '@/assets/Animation/LoadingAnimation.json';
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
        asd
    </div>
  )
}

export default AllProducts