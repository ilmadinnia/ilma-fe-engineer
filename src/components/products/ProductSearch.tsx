import React from 'react';
// ProductSearch.tsx
/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
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
        <div className='bg-gray-50 xl:mx-8 mx-2 h-[170px] rounded-md w-11/12 xl:h-20'>
            <div className='w-full xl:flex h-20 items-center xl:px-8 p-2'>
                <div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex h-10 xl:w-full  w-full border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-10 text-xs focus:outline-none"
                        placeholder="Product Name"
                    />
                </div>
                {/* Add inputs for minimum and maximum price */}
                <div className="xl:mx-4 xl:flex grid text-xs items-center xl:my-0 my-2">
                    <div className='px-2 f'>Filter Price :</div>
                    <input
                        type="number"
                        className="flex xl:w-40  w-full h-10 border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-2 text-xs focus:outline-none"
                        placeholder="Min Price"
                        value={minPrice}
                        min={0}
                        onChange={handleMinPriceChange}
                    />
                </div>
                <div className="xl:mx-4">
                    <input
                        type="number"
                        className="flex xl:w-40 w-full  h-10  border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-2 text-xs focus:outline-none"
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