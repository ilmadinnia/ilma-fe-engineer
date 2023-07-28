"use client"

/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import React, { useCallback, useEffect, useState } from 'react';
import ProductTable from './ProductTable';
import ProductSearch from './ProductSearch';
import Pagination from '../commons/Pagination';


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

/**
 * props any
 * this is for Product List Page
 * @author Ilma Dinnia Alghani <ilma.alghani@gmail.com>
 * @param  props
 * @returns {React.ReactFragment}
 */

const ProductList = () => {
  const [datas, setData] = useState<IProductListParams[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandSearchQuery, setBrandSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<IProductListParams[]>([]);


  const fetchData = useCallback(async (page: number) => {
    try {
      const searchURL = `https://dummyjson.com/products/search?q=${searchQuery}&brand=${brandSearchQuery}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${selectedCategory}&skip=${(page - 1) * itemsPerPage}&limit=${itemsPerPage}`;
      const response = await fetch(searchURL);
      const jsonData: Response = await response.json();

      setProducts(jsonData.products);
      setTotal(jsonData.total);

      const isEmpty = jsonData.products.length === 0;
      setIsDataEmpty(isEmpty);

      setCurrentPage(prevCurrentPage =>
        Math.min(prevCurrentPage, Math.ceil(jsonData.total / itemsPerPage))
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [searchQuery, brandSearchQuery, minPrice, maxPrice, selectedCategory, itemsPerPage]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData(1);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  const filteredData = products.filter((product) => {
    const { title, brand, category, price } = product;
    const lowerSearchQuery = searchQuery.toLowerCase();
    const lowerBrandSearchQuery = brandSearchQuery.toLowerCase();

    const brandMatches = brand?.toLowerCase().includes(lowerBrandSearchQuery);
    const generalMatches =
      title?.toLowerCase().includes(lowerSearchQuery) ||
      category?.toLowerCase().includes(lowerSearchQuery);
    const productPrice = price || 0;
    const priceInRange = productPrice >= minPrice && productPrice <= maxPrice;
    const categoryMatches = selectedCategory === "" || category === selectedCategory;

    return brandMatches && generalMatches && priceInRange && categoryMatches;
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData(page);
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  const totalPages = Math.ceil(total / itemsPerPage);
  const calculateItemNumber = (index: number) => {
    return (currentPage - 1) * itemsPerPage + index + 1;
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(event.target.value);
    setMinPrice(newMinPrice);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Number(event.target.value);
    setMaxPrice(newMaxPrice);
  };

  return (
    <div className="bg-white xl:m-8 xl:mt-32 xl:w-10/12 xl:shadow-md xl:rounded-xl text-black  m-0">
      <div className='xl:m-8 font-semibold xl:py-4 p-4'>
        <h2>Product List Page</h2>
      </div>

      {/* ProductSearch component */}
      <ProductSearch
        searchQuery={searchQuery}
        brandSearchQuery={brandSearchQuery}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setSearchQuery={setSearchQuery}
        setBrandSearchQuery={setBrandSearchQuery}
        handleMinPriceChange={handleMinPriceChange} // Add this prop
        handleMaxPriceChange={handleMaxPriceChange} // Add this prop
      />

      <div className='font-semibold mx-8 my-4 text-sm '>
        <h1> {total} Products</h1>
      </div>

      {/* ProductTable component */}
      <div className='xl:overflow-hidden overflow-scroll m-4'>
        <ProductTable
          products={filteredData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>


      {/* Pagination */}
      <div className="xl:flex grid justify-between my-4 items-center px-4 text-xs font-customFont">
        <div>
          Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(total, currentPage * itemsPerPage)} of {total} products
        </div>

        <div className="flex items-center ">
          {/* Pagination component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange} // Pass the handlePageChange function to the Pagination component
          />

          <div className="justify-around xl:py-0 py-2 xl:flex grid">
            {/* Dropdown to select items per page */}
            <label htmlFor="itemsPerPage" className='xl:px-4 px:0'>Items per page:</label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-2 py-1 border rounded-md"
            >
              <option value={10}>10</option>
              <option value={30}>30</option>
              <option value={100}>100</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
