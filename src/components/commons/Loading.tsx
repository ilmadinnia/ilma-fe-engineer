/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

import LoadingImages from '@assets/images/Loading.png';
import Image from "next/image";
// Loading component
const LoadingComponent = () => (
    <div className="grid justify-center content-center bg-white m-8 w-10/12 shadow-md rounded-xl text-black sm:w-100">
        <Image src={LoadingImages} width={100} height={300} alt="" />
        <div className="p-4 text-center font-semibold text-purple-700">Loading...</div>
    </div>
);

export default LoadingComponent;