// DetailCart.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/commons/header/Header';
import Sidebar from '@/components/commons/Sidebar';
import CartDetail, { IProductCartParams } from '@/components/cart/detail/CartDetail'; // Import the interface
/**
 * 
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
type TDetailCart = { params: { slug: number } };

function DetailCart({ params }: TDetailCart): React.ReactElement {
    const [cartData, setCartData] = useState<IProductCartParams>({
        products: [], // Provide an empty array for the initial value of cartData
        totalProducts: 0,
        total: 0,
        userId: 0,
        id: 0
    });

    useEffect(() => {
        // Fetch product data from the API using the id (slug)
        const fetchCartData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/cart/${params.slug}`);
                const data: IProductCartParams = await response.json();
                setCartData(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (params.slug) {
            fetchCartData();
        }
    }, [params.slug]);

    return (
        <>
            <Header />
            <div className='xl:flex'>
                <Sidebar />
                {/* Pass the cartData as a prop to the CartDetail component */}
                <CartDetail products={cartData.products} userId={cartData.userId} total={cartData.total} totalProducts={cartData.totalProducts} id={cartData.id} />
            </div>
        </>
    );
}

export default DetailCart;
