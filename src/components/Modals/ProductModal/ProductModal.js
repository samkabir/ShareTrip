"use client";

import STButton from "@/components/Utils/Components/Buttons/STButton/STButton";
import discountedPrice from "@/components/Utils/Functions/discountedPrice/discountedPrice";
import { useCartContext } from "@/context/CartContext";
import GetIcon from "@/utils/GetIcon/GetIcon";
import { Modal } from "@mui/material";
import Image from "next/image";

const ProductModal = ({
  modalOpen = false,
  handleClose,
  product,
  productImage,
  isInCart,
}) => {
  const { cart, addItem, removeItem, updateItemQuantity } = useCartContext();
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-[15%] left-[20%] bg-white p-3 rounded-lg w-3/5 h-4/5 overflow-y-auto">
          <div className="flex justify-between items-center px-3 py-2 border-b-2">
            <div className="text-xl font-semibold text-black font-murecho">
              {product?.title}
            </div>
            <div className="cursor-pointer " onClick={handleClose}>
              <GetIcon
                name="CrossIcon"
                className="w-7 h-7 text-black hover:text-red-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2 h-[80%]">
            <div className="flex justify-center items-center border-r-2">
              <Image
                src={productImage}
                alt={product?.title}
                width={200}
                height={200}
                className={`object-contain flex justify-center transition-opacity duration-300`}
                blurDataURL="data:image/png;base64,...base64placeholder..."
                loading="lazy"
                priority={false}
              />
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-semibold text-STBlue font-murecho">
                  {product?.title}
                </div>
                <div className="flex gap-3 items-center">
                  <div className="flex text-xl font-semibold text-STBlue font-murecho">
                    <GetIcon name="TakaIcon" className="w-7 h-7" />
                    {product?.discountPercentage > 0
                      ? discountedPrice(
                          product?.price,
                          product?.discountPercentage
                        )
                      : product?.price}
                  </div>
                  {product?.discountPercentage > 0 && (
                    <div className="flex items-center text-sm font-normal text-STGrey font-murecho relative">
                      <span className="absolute w-full h-[1px] bg-STGrey top-1/2 transform -translate-y-1/2" />
                      <GetIcon name="TakaIcon" className="w-5 h-5" />
                      {product?.price}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-sm font-normal text-STGrey font-murecho">
                {product?.description}
              </div>
              <div className="flex gap-3 mt-3">
                <div className="text-sm font-normal text-STGrey font-murecho flex gap-2 items-center">
                  Rating:{" "}
                  <div className="flex gap-2 bg-STImageGrey text-black py-1 px-2 border border-black rounded-full">
                    <GetIcon
                      name="StarIcon"
                      className="w-5 h-5 text-STOrange"
                    />
                    <div className="">{product?.rating}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="text-sm font-normal text-STGrey font-murecho">
                  Brand:{" "}
                  <span className="bg-STImageGrey text-black py-[1px] px-2 border border-black rounded-full">
                    {product?.brand}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="text-sm font-normal text-STGrey font-murecho">
                  Availability:{" "}
                  <span className="bg-STImageGrey text-black py-[1px] px-2 border border-black rounded-full">
                    {product?.availabilityStatus}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="text-sm font-normal text-STGrey font-murecho">
                  Return Policy:{" "}
                  <span className="bg-STImageGrey text-black py-[1px] px-2 border border-black rounded-full">
                    {product?.returnPolicy}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="text-sm font-normal text-STGrey font-murecho">
                  Shipping Policy:{" "}
                  <span className="bg-STImageGrey text-black py-[1px] px-2 border border-black rounded-full">
                    {product?.shippingInformation}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="text-sm font-normal text-STGrey font-murecho">
                  Tags:{" "}
                  {product?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-STImageGrey text-black py-[1px] px-2 border border-black rounded-full mr-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                {isInCart ? (
                  <div className="select-none">
                    <div className="flex flex-col font-murecho transition-transform duration-1000 transform gap-1">
                      <STButton
                        text={`${isInCart?.quantity} Added in Cart`}
                        textStyles="text-xl text-white font-medium"
                        styles="flex p-1 border-2 rounded-lg flex justify-between bg-STGreen transition-transform duration-1000 transform"
                        iconLeft="TrashIcon"
                        iconLeftStyles="w-7 h-7 cursor-pointer text-white mr-1 p-[1px] font-bold hover:bg-black hover:text-white rounded-xl flex justify-center items-center"
                        iconRight="PlusIcon"
                        iconRightStyles="w-7 h-7 cursor-pointer text-white ml-1 font-bold hover:bg-black hover:text-white rounded-xl flex justify-center items-center"
                        onClickIconRight={() => updateItemQuantity(product?.id)}
                        onClickIconLeft={() => removeItem(product?.id)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="select-none">
                    <div className="w-full font-murecho transition-transform duration-1000 transform gap-1">
                      <STButton
                        text="Add To Cart"
                        textStyles="text-xl text-white font-medium"
                        styles="flex p-1 border-2 rounded-lg cursor-pointer flex justify-center backdrop-blur-sm hover:bg-black bg-STGrey opacity-50 transition-transform duration-1000 transform"
                        iconLeft="AddToCartIcon"
                        iconLeftStyles="w-7 h-7 text-white pr-1 font-bold"
                        onClick={() => addItem(product, 1)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
