/**
 * Interface and Type Utilities for app/products
 */
import React from 'react';

/**
 * Interface ProductFiltersInit
 * @author Ilma Dinnia Alghani <ilma.alghani@gmail.com>
 */
export type ProductFiltersInit = {
  category?: any[] | null | undefined;
  location?: any[] | null | undefined;
  rating?: any[] | null | undefined;
  soldby?: any[] | null | undefined;
};
