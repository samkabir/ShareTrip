"use client";

import Image from "next/image";
import DefaultProductImage from "@/assets/Images/DefaultProductImage.webp";
import { useEffect, useState } from "react";
import GetIcon from "@/utils/GetIcon/GetIcon";
import discountedPrice from "@/components/Utils/Functions/discountedPrice/discountedPrice";
import discountedAmount from "@/components/Utils/Functions/discountedAmount/discountedAmount";
import STButton from "@/components/Utils/Components/Buttons/STButton/STButton";
import { useCartContext } from "@/context/CartContext";
import { useFavourite } from "@/context/FavouriteContext";

const ProductCard = ({ product }) => {
  const { cart, addItem, removeItem, updateItemQuantity } = useCartContext();
  const { fav, addOrRemItem } = useFavourite();

  const [productImage, setProductImage] = useState(
    product?.images?.length > 0 ? product?.images[0] : DefaultProductImage
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isInCart, setIsInCart] = useState(null);
  const [isFav, setIsFav] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setProductImage(DefaultProductImage);
  };

  useEffect(() => {
    setIsInCart(
      cart.find((cartItem) => cartItem.item.id === product.id) || null
    );
    setIsFav(fav.find((favItem) => favItem.item.id === product.id) || null);
  }, [cart, fav]);

  console.log(fav);
  return (
    <div className="m-1 p-1 cursor-pointer rounded-lg hover:shadow-xl transition-transform duration-500 transform hover:scale-[1.02] group">
      <div className="relative flex justify-center w-full h-[200px] bg-STImageGrey group-hover:bg-black/30 rounded-lg p-2">
        {isLoading && (
          <div className="absolute top-1/3">
            <GetIcon name="LoadingIcon" className="w-10 h-10" />
          </div>
        )}
        {product?.discountPercentage > 0 && (
          <>
            <div className="absolute flex top-4 -left-[4px]">
              <div className="flex items-center bg-STOrange text-xs font-normal text-white font-murecho p-[2px] rounded-tl-md pl-2">
                - <GetIcon name="TakaIcon" className="w-5 h-5" />
                {discountedAmount(product?.price, product?.discountPercentage)}
              </div>
              <GetIcon
                name="ProductTailIcon"
                className="w-full h-full -ml-[1px]"
              />
            </div>
            <div className="absolute top-10 -left-[4px]">
              <GetIcon name="ProductConnectorIcon" className="w-16 h-16" />
            </div>
          </>
        )}

        <div
          className="absolute top-1 right-1 hover:bg-black/50 rounded-full p-2"
          onClick={() => addOrRemItem(product)}
        >
          <GetIcon
            name={isFav ? "HeartFilledIcon" : "HeartIcon"}
            className="w-6 h-6 text-white"
          />
        </div>

        <Image
          src={productImage}
          alt={product?.title}
          width={200}
          height={200}
          className={`object-contain flex justify-center transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          blurDataURL="data:image/png;base64,...base64placeholder..."
          onLoad={handleLoad}
          onError={handleError}
          // unoptimized
        />

        {isInCart ? (
          <div className="absolute bottom-0 transform -translate-y-2 select-none">
            <div className="flex flex-col font-murecho transition-transform duration-1000 transform gap-1">
              <STButton
                text={`${isInCart?.quantity} Added in Cart`}
                textStyles="text-sm text-white font-medium"
                styles="flex p-1 border-2 rounded-lg bg-STGreen transition-transform duration-1000 transform"
                iconLeft="TrashIcon"
                iconLeftStyles="w-5 h-5 text-white mr-1 p-[1px] font-bold hover:bg-black hover:text-white rounded-xl flex justify-center items-center"
                iconRight="PlusIcon"
                iconRightStyles="w-5 h-5 text-white ml-1 font-bold hover:bg-black hover:text-white rounded-xl flex justify-center items-center"
                onClickIconRight={() => updateItemQuantity(product?.id)}
                onClickIconLeft={() => removeItem(product?.id)}
              />
              <STButton
                text="Quick View"
                textStyles="text-sm text-white font-medium"
                styles="flex justify-center p-1 border-2 rounded-lg backdrop-blur-sm hover:bg-black transition-transform duration-1000 transform"
                iconLeft="QuickViewIcon"
                iconLeftStyles="w-5 h-5 text-white pr-1 font-bold"
              />
            </div>
          </div>
        ) : (
          <div className="absolute bottom-0 transform -translate-y-2 select-none">
            <div className="hidden group-hover:flex flex-col justify-center items-center font-murecho transition-transform duration-1000 transform gap-1">
              <STButton
                text="Add To Cart"
                textStyles="text-sm text-white font-medium"
                styles="flex p-1 border-2 rounded-lg backdrop-blur-sm hover:bg-black transition-transform duration-1000 transform"
                iconLeft="AddToCartIcon"
                iconLeftStyles="w-5 h-5 text-white pr-1 font-bold"
                onClick={() => addItem(product, 1)}
              />
              <STButton
                text="Quick View"
                textStyles="text-sm text-white font-medium"
                styles="flex justify-center p-1 border-2 rounded-lg backdrop-blur-sm hover:bg-black transition-transform duration-1000 transform"
                iconLeft="QuickViewIcon"
                iconLeftStyles="w-5 h-5 text-white pr-1 font-bold"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-1">
        <div className="text-sm font-normal text-STGrey font-murecho">
          ShareTrip
        </div>
        <div className="text-base font-medium font-murecho">
          {product?.title}
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex text-xl font-semibold text-STBlue font-murecho">
            <GetIcon name="TakaIcon" className="w-7 h-7" />
            {product?.discountPercentage > 0
              ? discountedPrice(product?.price, product?.discountPercentage)
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
    </div>
  );
};

export default ProductCard;
