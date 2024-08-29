import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-[#fff6df] pt-2 pb-2">
        <h4 className="text-[#7e4015] ">All prices are tax inclusive</h4>
      </div>

      <div className="bg-[#ffcd00] p-3">
        <div className="flex justify-center">
          <div>
            <Image alt="logo" src={"/main-logo.png"} height="220" width="220" />
          </div>

          <div className="flex items-center gap-3 absolute right-[50px] mt-1">
            <button className="nav-buttons">Log In</button>
            <button className="nav-buttons">Cart (2)</button>
            <MagnifyingGlassIcon className="size-6" />
          </div>
        </div>

        <div className="nav-buttons">
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

/*uppercase font-bold text-[13px] tracking-wider */
