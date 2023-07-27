/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import React, { useState } from 'react';
import Link from 'next/link';

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

type CartTableProps = {
    carts: IProductCartParams[];
    currentPage: number;
    itemsPerPage: number;
    users: { [key: number]: IUser }; // Pass the users as a prop
};

const CartTable: React.FC<CartTableProps> = ({ carts, currentPage, itemsPerPage, users }) => {
    const calculateItemNumber = (index: number) => {
        return (currentPage - 1) * itemsPerPage + index + 1;
    };

    return (
        <div className="text-black sm:w-100 xl:overflow-hidden overflow-scroll ">
            <table className="w-full table-auto">
                {/* Table header */}
                <thead className="bg-gray-100 p-8 text-xs">
                    <tr>
                        <th className="p-4 text-center font-semibold">No</th>
                        <th className="p-4 text-left font-semibold">User Name</th>
                        <th className="p-4 text-left font-semibold">Total Product</th>
                        <th className="p-4 text-left font-semibold">Total</th>
                        <th className="p-4 text-left font-semibold">Total Discount</th>
                        <th></th>
                    </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-xs capitalize">
                    {carts.map((cart, cartIndex) => (
                        <tr className="border-b-2" key={cartIndex}>
                            <td className="px-4 text-center">{calculateItemNumber(cartIndex)}</td>
                            <td className="p-4">{users[cart.userId]?.username || 'Unknown User'}</td>
                            <td className="p-4">
                                {cart.products?.length} Items
                            </td>
                            <td className="p-4">${cart.total}</td>
                            <td className="p-4">${cart.discountedTotal}</td>
                            <td className="p-4">
                                <Link
                                    href={{
                                        pathname: `/cart/${cart.id}`,
                                        query: { userId: cart.userId },
                                    }}
                                >
                                    <div className="h-[32px] w-[116px] hover:bg-purple-500 bg-purple-700 rounded-md items-center flex justify-center text-white">
                                        Detail
                                    </div>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default CartTable;
