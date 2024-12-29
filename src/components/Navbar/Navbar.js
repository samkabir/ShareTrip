"use client";

import { useCartContext } from "@/context/CartContext";
import GetIcon from "@/utils/GetIcon/GetIcon";

const Navbar = () => {
  const { totalItems, totalPrice } = useCartContext();

  return (
    <div className="h-[60px] bg-[#0f172a] text-white col-span-12">
      <div className="customContainer flex items-center h-full">
        <div className="customGridRange relative flex justify-end items-center h-full group">
          <div className="relative">
            <GetIcon name="CartIcon" className="w-10 h-10" />
            {totalItems > 0 && (
              <div className="absolute flex top-0 right-0 px-[3px] bg-red-500 rounded-full">
                <span className="text-xs font-murecho font-bold text-white">
                  {totalItems}
                </span>
              </div>
            )}
          </div>
          {totalPrice > 0 && (
            <div className="hidden group-hover:flex items-center absolute p-2 bg-STGrey rounded-lg top-[62px] -right-10  z-50">
              Total Price : <GetIcon name="TakaIcon" className="w-5 h-5" />{" "}
              {totalPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
