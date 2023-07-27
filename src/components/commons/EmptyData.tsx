/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

import Image from "next/image";
import Empty from '@assets/images/empty-images.png';

// Empty data component
const EmptyDataComponent = () => (
    <div className='flex items-center flex-col'>
        <Image src={Empty} width={100} height={100} alt="" />
        <div className='text-md font-customFont'>No Available Data</div>
    </div>
);

export default EmptyDataComponent;
