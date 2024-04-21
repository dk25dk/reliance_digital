import React, { useState } from "react";
import { Rating } from "@mui/material";

export function SingleProductCart({ singlePro }) {
    const [value, setValue] = useState();
    console.log("single singlePro cart");
    console.log(singlePro);

    return (
        <div className=" flex flex-wrap justify-center gap-2  items-center overflow-x-auto overflow-y-hidden">
            {/* <h2 className="text-center">Deal of the Day</h2> */}



            <div
                key={singlePro.brand}
                className="w-56 h-auto bg-transparent rounded-lg p-2 ml-2  cursor-pointer transform transition duration-300  text-ellipsis overflow-hidden max-h-[504px] "
            >
                <img
                    className="relative  top-1 hover:text-bubble-gum cursor-pointer"
                    src={singlePro.displayImage}
                    alt="singleProImage"
                />

                <h3 className="hover:text-red-600 px-[10px] mb-[10px] text-blue-600 cursor-pointer text-md">
                    {singlePro.name}
                </h3>

                <div>
                    <p className="opacity-40  text-sm font-bold text-black">
                        offer price : ₹ {singlePro.price}
                    </p>
                </div>
                <p className="px-[10px] ">
                    MRP:{" "}
                    <span className="line-through">
                        &#8377;
                        {Math.round(
                            singlePro.price + (singlePro.price / 100) * 22
                        )}
                    </span>{" "}
                    (Inclusive of all taxes)
                </p>
                <p>
                    You Save: 22% (&#8377;
                    {Math.round((singlePro.price / 100) * 22)})
                </p>

                <div>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    {singlePro.ratings}
                </div>
            </div>

        </div>
    )



}