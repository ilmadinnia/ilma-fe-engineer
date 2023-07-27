'use client';
import React, { useState } from 'react';

// Components
import Header from '@/components/commons/header/Header';
import Sidebar from '@/components/commons/Sidebar';
import { CartListPage } from '@/components/cart';


/**
 * 
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
type IProductCartParams = {
    id?: number;
    title?: string;
    quantity?: number;
    price?: number;
    discountPercentage?: number;
    discountedPrice?: number;

};

type CartList = {
    products: IProductCartParams[];
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
};
type Response = {
    products: IProductCartParams[];
    total: number;
    skip: number;
    limit: number;
};

function CartPage(): React.ReactElement {
    /**
     * Give some miliseconds to hide and display login info
     * to dismiss hydration error
     */
    const [isLoaded, setIsLoaded] = useState(false);
    setTimeout(() => {
        setIsLoaded(true);
    }, 500);
    return (
        <>
            <Header />
            <div className='xl:flex'>
                <Sidebar />
                <CartListPage />
            </div>
        </>
    );
}

export default CartPage;
