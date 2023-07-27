/**
 * Pagination libs based on
 * https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
 * https://github.com/mayankshubham/react-pagination/tree/master/src
 */
import { useMemo } from 'react';


/**
 * Show dots character on pagination
 * @author Ilma Dinnia Alghani <ilma.alghani@gmail.com>
 * @var    string
 */
export const DOTS: string = '...';

/**
 * Show pagination range
 * @author Ilma Dinnia Alghani <ilma.alghani@gmail.com>
 * @param   {number} start <input start of pagination page>
 * @param   {number} end <input end of pagination page>
 * @returns {Array}
 */
const range = (start: number, end: number): any[] => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
