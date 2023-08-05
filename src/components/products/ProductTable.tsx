// ProductTable.tsx
/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmptyDataComponent from '../commons/EmptyData';
import LoadingComponent from '../commons/Loading';

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
    [key: string]: any;
};

type ProductTableProps = {
    products: IProductListParams[];
    currentPage: number;
    itemsPerPage: number;
};

const ProductTable: React.FC<ProductTableProps> = ({ products, currentPage, itemsPerPage }) => {
    const [sortColumn, setSortColumn] = useState<string>('title');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [loading, setLoading] = useState(true); // Add loading state

    const calculateItemNumber = (currentPage: number, index: number) => {
        return (currentPage - 1) * itemsPerPage + index + 1;
      };
    
    // Sort the products based on the sortColumn and sortOrder
    const sortedProducts = products.slice().sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        if (sortOrder === 'asc') {
            return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        } else {
            return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        }
    });

    const handleSort = (column: string) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [products]);

    return (
        <table className="w-full xl:table-auto">
            {/* Table header */}
            <thead className="bg-gray-100 p-8 text-xs">
                <tr>
                    <th className='px-4'>No</th>
                    <th
                        className="w-1/5 p-4 text-left font-semibold cursor-pointer"
                        onClick={() => handleSort('title')}
                    >
                        Product Name {sortColumn === 'title' && (sortOrder === 'asc' ? '▲' : '▼')}
                    </th>
                    <th
                        className="p-4 text-left font-semibold cursor-pointer"
                        onClick={() => handleSort('brand')}
                    >
                        Brand {sortColumn === 'brand' && (sortOrder === 'asc' ? '▲' : '▼')}
                    </th>
                    <th
                        className="p-4 text-left font-semibold cursor-pointer"
                        onClick={() => handleSort('category')}
                    >
                        Category {sortColumn === 'category' && (sortOrder === 'asc' ? '▲' : '▼')}
                    </th>
                    <th
                        className="p-4 text-left font-semibold cursor-pointer"
                        onClick={() => handleSort('price')}
                    >
                        Price {sortColumn === 'price' && (sortOrder === 'asc' ? '▲' : '▼')}
                    </th>
                    <th
                        className="p-4 text-left font-semibold cursor-pointer"
                        onClick={() => handleSort('stock')}
                    >
                        Stock {sortColumn === 'stock' && (sortOrder === 'asc' ? '▲' : '▼')}
                    </th>
                    <th className="w-1/4 text-left font-semibold"></th>
                </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-xs capitalize">
                {loading ? (
                    <tr className="border b-gray-100 py-4">
                        <td colSpan={7} className="p-4 text-center">
                            <LoadingComponent />
                        </td>
                    </tr>
                ) : products && products.length > 0 ? (
                    sortedProducts.map((product: IProductListParams, index: number) => (
                        <tr className="border-b-2" key={product?.id}>
                            <td className="px-4 text-center">{calculateItemNumber(currentPage, index)}</td>
                            <td className="p-4">
                                <div className='flex items-center'>
                                    <Image className='rounded-md mx-4 max-h-[80px] max-w-[80px] min-h-[80px] object-cover' width={80}
                                        height={80} src={product?.thumbnail ?? ''} alt="" />
                                    <span>{product?.title}</span>
                                </div>
                            </td>
                            <td className="p-4">{product?.brand} </td>
                            <td className="p-4">{product?.category}</td>
                            <td className="p-4">${product?.price}
                            </td>
                            <td className="p-4">{product?.stock}
                            </td>
                            <td className="p-4">
                                <Link
                                    href={{
                                        pathname: `/products/${product?.id}`,
                                    }}
                                >
                                    <div className='h-[32px] w-[116px] hover:bg-purple-500 bg-purple-700 rounded-md items-center flex justify-center text-white'>
                                        Detail
                                    </div>
                                </Link>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className="border b-gray-100 py-4">
                        <td colSpan={7} className="p-4 text-center">
                            <EmptyDataComponent />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default ProductTable;


