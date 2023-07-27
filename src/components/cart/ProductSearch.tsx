/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

import React from 'react';
// ProductSearch.tsx
type ProductSearchProps = {
    searchQuery: string;
    brandSearchQuery: string;
    minPrice: number;
    maxPrice: number;
    setSearchQuery: (query: string) => void;
    setBrandSearchQuery: (query: string) => void;
    handleMinPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProductSearch: React.FC<ProductSearchProps> = ({
    searchQuery,
    brandSearchQuery,
    minPrice,
    maxPrice,
    setSearchQuery,
    setBrandSearchQuery,
    handleMinPriceChange,
    handleMaxPriceChange,
}) => {

    return (
        <div className='bg-gray-50 xl:mx-8 mx-2 rounded-md xl:w-11/12 h-20'>
            <div className='w-full flex h-20 items-center px-8'>
                <div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex h-10 xl:w-full w-screen border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-10 text-xs focus:outline-none"
                        placeholder="Product Name"
                    />
                </div>
                <div className="mx-4">
                    <input
                        type="text"
                        className="flex h-10 xl:w-full w-screen  border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-10 text-xs focus:outline-none"
                        placeholder="Brand Name"
                        value={brandSearchQuery}
                        onChange={(e) => setBrandSearchQuery(e.target.value)}
                    />
                </div>
                {/* Add inputs for minimum and maximum price */}
                <div className="mx-4 flex text-xs items-center">
                    <div className='px-2 font-semibold'>Filter Price :</div>
                    <input
                        type="number"
                        className="flex h-10 w-40 border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-2 text-xs focus:outline-none"
                        placeholder="Min Price"
                        value={minPrice}
                        min={0}
                        onChange={handleMinPriceChange}
                    />
                </div>
                <div className="mx-4">
                    <input
                        type="number"
                        className="flex h-10 w-40 border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-2 text-xs focus:outline-none"
                        placeholder="Max Price"
                        value={maxPrice}
                        min={0}
                        onChange={handleMaxPriceChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductSearch;