/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <h3>
          <img
            src={product.image}
            alt={product.name}
            className="  object-contain h-60 w-full"
          />
        </h3>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className=" text-center">{product.name}</h2>
        </Link>

        <p className="font-bold">${product.price}</p>
        <button
          className="productbutton flex primary-button items-center justify-center w-full"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          <Image
            className="mx-2"
            src="/images/cart.png"
            alt=""
            width="25"
            height="25"
          />
          Add to cart
        </button>
      </div>
    </div>
  );
}
