import Image from "next/image";
import { MagnifyingGlassIcon, Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <div>
      <div className="bg-[#ffcd00] p-4 md:p-3">
        <div className="flex justify-between items-center md:justify-center">
          <div className="md:hidden size-6 self-center">
            <Bars3Icon />
          </div>
          <div>
            <Image alt="logo" src={"/main-logo.png"} height="220" width="220" />
          </div>

          <div>
            <div className="flex items-center gap-3 md:absolute md:right-[50px] md:mt-1">
              <button className="nav-buttons hidden md:block">Log In</button>
              <button className="nav-buttons hidden md:block">Cart (2)</button>
              <div className="flex items-center gap-3 ">
                <MagnifyingGlassIcon className="size-6" />
                <ShoppingBagIcon className="size-6 md:hidden" />
              </div>
            </div>
          </div>
        </div>

        <div className="nav-buttons hidden md:block">
          <ul className="flex justify-center gap-4 pt-5 pb-3">
            <li>Home</li>
            <li>Shop</li>
            <li>Store Ordering</li>
            <li>Corporates Ordering</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;