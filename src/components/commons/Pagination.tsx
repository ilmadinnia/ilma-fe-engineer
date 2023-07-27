/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import React from 'react';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
    const maxPageButtons = 5;
    // Calculate the range of pages to display
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    // Adjust the range if it reaches the edges
    const totalAdjPages = maxPageButtons - (endPage - startPage + 1);
    if (totalAdjPages > 0) {
        if (startPage === 1) {
            endPage = Math.min(totalPages, endPage + totalAdjPages);
        } else if (endPage === totalPages) {
            startPage = Math.max(1, startPage - totalAdjPages);
        }
    }

    // Create an array of page numbers to display within the range
    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <div className="flex justify-center mt-2">
            {currentPage > 1 && (
                <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-2 mx-1 border">
                    &lt;
                </button>
            )}
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 mx-1 border ${currentPage === page ? 'bg-purple-200' : ''}`}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-2 mx-1 border">
                    &gt;
                </button>
            )}
        </div>
    );
};

export default Pagination;
