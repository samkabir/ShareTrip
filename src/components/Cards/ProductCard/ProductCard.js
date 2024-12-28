"use client";

import Image from "next/image";
import DefaultProductImage from "@/assets/Images/DefaultProductImage.webp";
import { useState } from "react";
import GetIcon from "@/utils/GetIcon/GetIcon";
import discountedPrice from "@/components/Utils/Functions/discountedPrice/discountedPrice";
import discountedAmount from "@/components/Utils/Functions/discountedAmount/discountedAmount";

const ProductCard = ({ product }) => {
  const [productImage, setProductImage] = useState(
    product?.images?.length > 0 ? product?.images[0] : DefaultProductImage
  );
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setProductImage(DefaultProductImage);
  };
  return (
    <div className="m-1 p-1 cursor-pointer rounded-lg hover:shadow-xl transition-transform duration-500 transform hover:scale-[1.02]">
      <div className="relative flex w-full h-[200px] bg-[#ebe6e6] rounded-lg p-2">
        {isLoading && (
          <div className="absolute top-1/3">
            <GetIcon name="LoadingIcon" className="w-10 h-10" />
          </div>
        )}
        {product?.discountPercentage > 0 && (
          <>
            <div className="absolute flex top-4 -left-[4px]">
              <div className="flex items-center bg-STOrange text-xs font-normal text-white font-murecho p-[2px] rounded-tl-md">
                - <GetIcon name="TakaIcon" className="w-5 h-5" />
                {discountedAmount(product?.price, product?.discountPercentage)}
              </div>
              <GetIcon name="ProductTailIcon" className="w-full h-full" />
            </div>
            <div className="absolute top-10 -left-[4px]">
              <GetIcon name="ProductConnectorIcon" className="w-16 h-16" />
            </div>
          </>
        )}

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
