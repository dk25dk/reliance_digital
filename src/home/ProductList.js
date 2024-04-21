

import React from 'react'
import { SingleProductCart } from './SingleProductCart'
export function ProductList({ productL }) {
    console.log("I am a product list");
    console.log(productL);
    return (
        <>
            <div className="flex flex-wrap justify-center gap-2 w-full">
                {productL.map((product) => (
                    <SingleProductCart key={product.name} singlePro={product} />
                ))}

            </div>
        </>

    )
}
