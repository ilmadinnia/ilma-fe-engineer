/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import Image from "next/image";
import Profile from '@assets/images/profile.png';

function AdminInfo(): React.ReactElement {
    return (
        <>
            <div className="bg-white text-black mx-4 py-4 font-customFont">
                <div className="flex items-center">
                    <div className="rounded-full shadow-md mx-2">
                        <Image
                            src={Profile}
                            alt="Profile"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div>
                        <div className="font-semibold text-sm">Ilma Dinnia Alghani</div>
                        <div className="text-xs text-gray-600">Super Admin</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminInfo;
