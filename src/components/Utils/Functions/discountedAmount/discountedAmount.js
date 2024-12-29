"use client";

export default function discountedAmount(price, discount) {
    return ((price * discount) / 100).toFixed(2);
}