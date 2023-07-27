/**
 * @author Ilma Dinnia Alghani<ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */
import Image from "next/image";
import Logo from '@assets/images/logo.png';
import Link from "next/link";

function Header(): React.ReactElement {
  return (
    <header>
      <div className="h-20 fixed top-0 w-full bg-purple-700">
        <div className="flex h-20 place-items-center justify-between">
          <Link href="/">
            <div className="mx-8">
              <Image
                src={Logo}
                alt="Logo"
                width={125}
                height={60}
              />
            </div>
          </Link>
          <div className="align-right mr-10">
            <span>Ilma Dinnia Alghani</span>
          </div>
        </div>
      </div >
    </header >
  );
}

export default Header;
