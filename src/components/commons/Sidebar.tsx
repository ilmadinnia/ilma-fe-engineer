/**
 * Global Sidebar Components for Server Components "app" folder
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

import Image from "next/image"
import DashboardIcon from '@assets/images/black-dashboard.png';
import ProductsICon from '@assets/images/black-products.png';
import CartIcon from '@assets/images/black-cart.png';
import Link from "next/link";
import AdminInfo from "./AdminInfo";

function Sidebar(): React.ReactElement {

  return (
    <>
      <div className="xl:h-screen shadow-md bg-white xl:w-64 w-full font-customFont">
        <AdminInfo />
        <Link className="flex border border-transparent hover:bg-purple-100 cursor-pointer border-b-gray-200 py-4 px-8 " href="/">
          <div>
            <Image
              src={DashboardIcon}
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
          <div className="text-black mx-4 text-xs">
            <span>Dashboard</span>
          </div>
        </Link>
        <Link className="flex border border-transparent hover:bg-purple-100 cursor-pointer border-b-gray-200 py-4 px-8 " href="/products" >
          <div>
            <Image
              src={ProductsICon}
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
          <div className="text-black mx-4 text-xs">
            <span>Product</span>
          </div>
        </Link>
        <Link className="flex border border-transparent hover:bg-purple-100 cursor-pointer border-b-gray-200 py-4 px-8 " href="/cart">
          <div>
            <Image
              src={CartIcon}
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
          <div className="text-black mx-4 text-xs">
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
