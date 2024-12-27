"use client";

import Image from "next/image";
import DefaultProductImage from "@/assets/Images/DefaultProductImage.webp";
import { useState } from "react";
import GetIcon from "@/utils/GetIcon/GetIcon";

const ProductCard = ({ product }) => {
  const [productImage, setProductImage] = useState(
    product.images.length > 0 ? product.images[0] : DefaultProductImage
  );
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setProductImage(DefaultProductImage);
  };
  console.log(product);
  return (
    <div className="m-2">
      <div className="relative flex justify-center w-full h-[200px] bg-[#ebe6e6] rounded-lg p-2">
        {isLoading && (
          <div className="absolute top-1/3 bg-gray-100">
            <GetIcon name="LoadingIcon" className="w-10 h-10" />
          </div>
        )}
        <Image
            src={productImage}
            alt={product.title}
            width={200}
            height={200}
            className={`object-contain flex justify-center transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            blurDataURL="data:image/png;base64,...base64placeholder..."
            onLoad={handleLoad}
            onError={handleError}
            unoptimized 
          />
      </div>
      <div>{product.title}</div>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductCard;
