import GetIcon from "@/utils/GetIcon/GetIcon"


const Navbar = () => {
  return (
    <div className='h-[60px] bg-[#0f172a] text-white col-span-12'>
        <div className='customContainer flex items-center h-full'>
            <div className='customGridRange flex justify-end items-center h-full'>
                <GetIcon name='CartIcon' className="w-10 h-10"  />
            </div>
        </div>
    </div>
  )
}

export default Navbar