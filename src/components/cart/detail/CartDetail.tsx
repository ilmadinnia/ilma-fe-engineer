/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import React, { useEffect, useState } from 'react';

type IProductsParams = {
    id?: number;
    title?: string;
    quantity?: number;
    price?: number;
    discountPercentage?: number;
    discountedPrice?: number;

};

export interface IProductCartParams {
    products: IProductsParams[];
    total: number;
    userId: number;
    totalProducts: number;
    id: number;

}
// Interface for user data
export interface IUser {
    id?: number;
    username?: string;
}


const CartDetail: React.FC<IProductCartParams> = ({ id, products, totalProducts, total, userId }) => {
    const [user, setUser] = useState<IUser | null>(null);

    // Fetch user data based on the userId
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/users/${userId}`);
                const userData: IUser = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    return (
        <div className="bg-white xl:mt-32 xl:m-8 xl:p-8 xl:w-9/12 capitalize xl:shadow-md xl:rounded-xl text-black font-customFont">
            <h2 className="font-semibold text-md xl:p-4 py-8 px-2">Detail Product</h2>
            <div className='py-2 font-semibold text-purple-800 xl:px-4 px-2'>Cart {id}</div>
            <div className='flex flex-wrap text-sm bg-purple-100 p-4 m-2 border'>
                <div className='w-1/2 py-2'>{user && (
                    <div>
                        <span className='font-semibold'>User Name:</span>
                        <span> {user.username}</span>
                    </div>
                )}
                </div>
                <div className='w-1/2 py-2'>
                    <span className='font-semibold'># of Items : </span>
                    <span>{totalProducts}</span>
                </div>
                <div className='w-1/2 py-2'>
                    <span className='font-semibold'>Total Amount :</span>
                    <span>${total}</span>
                </div>

            </div>

            <div className='overflow-scroll xl:overflow-hidden'>
                {/* Table */}
                <table className="w-full table-auto mt-4">
                    <thead className="bg-gray-100 p-8 text-xs">
                        <tr>
                            <th className="p-4 text-left font-semibold">Product Name</th>
                            <th className="p-4 text-left font-semibold">Quantity</th>
                            <th className="p-4 text-left font-semibold">Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs capitalize">
                        {products?.map((product, index) => (
                            <tr className="border-b-2" key={index}>
                                <td className="p-4">{product.title}</td>
                                <td className="p-4">{product.quantity}</td>
                                <td className="p-4">${product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CartDetail;
