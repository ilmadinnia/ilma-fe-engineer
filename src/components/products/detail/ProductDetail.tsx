'use client';

/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
import StarRating from '../StarRating';
import LoadingComponent from '@/components/commons/Loading';


type IDetailProduct = {
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    discountPercentage?: number;
    rating?: string;
    stock?: number[];
    brand?: string;
    category?: number;
    thumbnail?: string;
    images?: any[];
};

function ProductDetail({ data }: any) {
    // Check if data is available before rendering
    if (!data) {
        return <LoadingComponent />;
    }
    const {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
    } = data;

    return (
        <div className="bg-white xl:m-8 xl:mt-32 xl:p-8 xl:w-9/12 capitalize p-4 shadow-md rounded-xl text-black font-customFont">
            <h2 className='font-semibold text-md'>Detail Product</h2>
            <div className='xl:flex grid w-full'>
                <div className='xl:w-4/12'>
                    <div className='grid items-center'>
                        <div className='xl:m-8'>
                            <Image className="rounded-md object-cover shadow-md" src={thumbnail} alt={title} width={500}
                                height={500} />
                        </div>
                        <div className='flex items-center xl:overflow-hidden overflow-scroll w-full'>
                            {images.map((image: string | StaticImport, index: React.Key | null | undefined) => (
                                <Image className="w-[80px] h-[80px] rounded-md object-cover m-2 shadow-md" key={index} src={image} width={80}
                                    height={80} alt="" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap my-8 text-sm xl:w-7/12'>
                    <div className='grid xl:w-4/12 w-6/12'>
                        <span className='text-gray-400 text-xs font-semibold flex items-end'>Product Name</span>
                        <span className='py-4 text-black'>{title}</span>
                    </div>
                    <div className='grid xl:w-4/12 w-6/12'>
                        <span className='text-gray-400 text-xs font-semibold flex items-end'>Category</span>
                        <span className='py-4 text-black'>{category}</span>
                    </div>
                    <div className='grid xl:w-4/12 w-6/12'>
                        <span className='text-gray-400 text-xs font-semibold flex items-end'>Price</span>
                        <span className='py-4 text-black'>{price}</span>
                    </div>
                    <div className='grid xl:w-4/12 w-6/12'>
                        <span className='text-gray-400 text-xs font-semibold flex items-end'>Discount %</span>
                        <span className='py-4 text-purple-700 font-semibold'>{discountPercentage}</span>
                    </div>
                    <div className="grid xl:w-4/12 w-6/12">
                        <span className="text-gray-400 text-xs font-semibold flex items-end">Rating</span>
                        <span className="py-4 text-black">
                            <StarRating rating={Number(rating)} maxStars={5} /> {/* Use the StarRating component here */}
                        </span>
                    </div>
                    <div className='grid xl:w-4/12 w-6/12'>
                        <span className='text-gray-400 text-xs font-semibold flex items-end'>Brand</span>
                        <span className='py-4 text-black'>{brand}</span>
                    </div>
                    <div className='grid xl:w-4/12 w-6/12'>
                        <span className='text-gray-400 text-xs font-semibold flex items-end'>Stock</span>
                        <span className='py-4 text-black'>{stock}</span>
                    </div>
                    <div className='flex flex-wrap my-8 text-sm'>
                        <div className='grid xl:w-9/12	w-full'>
                            <span className='text-gray-400 text-xs font-semibold flex items-end'>Description</span>
                            <span className='py-4 text-black break-words'>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
