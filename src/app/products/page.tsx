'use client';
import React, { useState } from 'react';
import { ProductList } from '@/components/products';
import Header from '@/components/commons/header/Header';
import Sidebar from '@/components/commons/Sidebar';

/**
 * 
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

type IProductListParams = {
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string;
};

type Response = {
    products: IProductListParams[];
    total: number;
    skip: number;
    limit: number;
};

function ProductPage(): React.ReactElement {
    const [isLoaded, setIsLoaded] = useState(false);
    setTimeout(() => {
        setIsLoaded(true);
    }, 500);
    return (
        <>
            <Header />
            <div className='xl:flex'>
                <Sidebar />
                <ProductList />

            </div>
        </>
    );
}

export default ProductPage;



