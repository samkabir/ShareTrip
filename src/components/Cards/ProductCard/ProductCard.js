import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}) => {
    console.log(product)
  return (
    <div className='border rounded-xl p-2'>
        <Image src={product.images[0]} alt={product.title} width={300} height={300} blurDataURL="data:image/png;base64,...base64placeholder..." />
    </div>
  )
}

export default ProductCard