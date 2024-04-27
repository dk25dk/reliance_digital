import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function Ac() {
    const [products, setProducts] = useState([]) // Rename getCategory to products

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${products}"}`, {
                    headers: {
                        projectId: '0io9zoi91tt1'
                    }
                })
                setProducts(res.data) // Update state with array of products
                console.log("Ac Data ");
                console.log(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, []) // Fetch data on component mount

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 w-full">
                {products.map((product) => (
                    <div
                        key={product.brand}
                        className="w-56 h-auto bg-transparent rounded-lg p-2 ml-2  cursor-pointer transform transition duration-300  text-ellipsis overflow-hidden max-h-[504px] "
                    >
                        <img
                            className="relative  top-1 hover:text-bubble-gum cursor-pointer"
                            src={product.displayImage}
                            alt="productImage"
                        />

                        <h3 className="hover:text-red-600 px-[10px] mb-[10px] text-blue-600 cursor-pointer text-md">
                            {product.name}
                        </h3>

                        <div>
                            <p className="opacity-40  text-sm font-bold text-black">
                                offer price : ₹ {product.price}
                            </p>
                        </div>
                        <p className="px-[10px] ">
                            MRP:{" "}
                            <span className="line-through">
                                &#8377;
                                {Math.round(
                                    product.price + (product.price / 100) * 22
                                )}
                            </span>{" "}
                            (Inclusive of all taxes)
                        </p>
                        <p>
                            You Save: 22% (&#8377;
                            {Math.round((product.price / 100) * 22)})
                        </p>

                        <div>
                            {/* <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        /> */}
                            {product.ratings}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
