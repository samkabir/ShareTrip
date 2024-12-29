"use client";
export default function discountedPrice(price, discount) {
    return (price - (price * discount) / 100).toFixed(2);
    }