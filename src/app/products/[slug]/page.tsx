'use client';

/**
 * 
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

import React, { useEffect, useState } from 'react';
import Header from '@/components/commons/header/Header';
import ProductDetail from '@/components/products/detail/ProductDetail';
import Sidebar from '@/components/commons/Sidebar';
import LoadingComponent from '@/components/commons/Loading';

type TDetailProduct = { params: { slug: number } };

function DetailProduct({ params }: TDetailProduct): React.ReactElement {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        // Fetch product data from the API using the id (slug)
        const fetchProductData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${params.slug}`);
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (params.slug) {
            fetchProductData();
        }
    }, [params.slug]);

    return (
        <>
            <Header />
            <div className='xl:flex'>
                <Sidebar />
                {productData ? (
                    <ProductDetail data={productData} />
                ) : (
                    <LoadingComponent />
                )}
            </div>

        </>
    );
}

export default DetailProduct;