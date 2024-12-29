"use client";

import { useCartContext } from "@/context/CartContext";
import GetIcon from "@/utils/GetIcon/GetIcon"


const Navbar = () => {
  const { cart, totalItems, removeItem} = useCartContext();

  return (
    <div className='h-[60px] bg-[#0f172a] text-white col-span-12'>
        <div className='customContainer flex items-center h-full'>
            <div className='customGridRange flex justify-end items-center h-full'>
                <div className="relative">
                  <GetIcon name='CartIcon' className="w-10 h-10"  />
                  {totalItems>0 && (<div className="absolute flex top-0 right-0 px-[3px] bg-red-500 rounded-full"><span className='text-xs font-murecho font-bold text-white'>{totalItems}</span></div>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar