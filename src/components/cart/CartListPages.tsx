/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

import React, { useCallback, useEffect, useState } from 'react';
import EmptyDataComponent from '../commons/EmptyData';
import LoadingComponent from '../commons/Loading';
import CartTable from './CartTable';
import Pagination from '../commons/Pagination';


type IProductsParams = {
  id?: number;
  title?: string;
  quantity?: number;
  price?: number;
  discountPercentage?: number;
  discountedPrice?: number;
};

type IProductCartParams = {
  id?: number;
  products?: IProductsParams[];
  total: number;
  discountedTotal: number;
  userId: number;
};

type IUser = {
  id?: number;
  username?: string;
};

type Response = {
  carts: IProductCartParams[];
  total: number;
  skip: number;
  limit: number;
};

const CartListPage = () => {
  const [data, setData] = useState<IProductCartParams[]>([]);
  const [users, setUsers] = useState<{ [key: number]: IUser }>({});
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchCartData = useCallback(async (page: number) => {
    try {
      const skip = (page - 1) * itemsPerPage;
      const response = await fetch(`https://dummyjson.com/carts?skip=${skip}&limit=${itemsPerPage}`);
      const jsonData: Response = await response.json();
      setData(jsonData.carts);
      setTotal(jsonData.total);

      const usersData: { [key: number]: IUser } = {};
      await Promise.all(
        jsonData.carts.map(async (cart) => {
          const userData = await fetchUserData(cart.userId);
          usersData[cart.userId] = userData;
        })
      );
      setUsers(usersData);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of error
    }
  }, [itemsPerPage]);

  const fetchUserData = async (userId: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const userData: IUser = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return {};
    }
  };

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
    setLoading(true);
  };

  useEffect(() => {
    fetchCartData(currentPage);
  }, [fetchCartData, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setLoading(true);
  };

  useEffect(() => {
    fetchCartData(currentPage);
  }, [fetchCartData, currentPage]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (!data || data.length === 0) {
    return <EmptyDataComponent />;
  }

  return (
    <div className="bg-white xl:m-8 xl:w-10/12 xl:mt-32 xl:shadow-md xl:rounded-xl text-black sm:w-100 ">
      <div className="xl:m-8 p-4 font-semibold">
        <h2>Cart List Page</h2>
      </div>
      <CartTable carts={data} currentPage={currentPage} itemsPerPage={itemsPerPage} users={users} />
      {/* Pagination */}
      <div className="flex justify-between my-4 items-center px-4 text-xs font-customFont">
        <div>
          Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(total, currentPage * itemsPerPage)} of {total} Carts
        </div>
        <div className="xl:flex grid items-center">
          {/* Pagination component */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(total / itemsPerPage)}
            handlePageChange={handlePageChange}
          />
          <div className="justify-around">
            {/* Dropdown to select items per page */}
            <label htmlFor="itemsPerPage" className="px-4">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-2 py-1 border rounded-md"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListPage;
