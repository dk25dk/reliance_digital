// import React, { useEffect, useState } from "react";
// // import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// // import Rating from "@mui/material/Rating";

// const Product = [
//     {
//         proImg:
//             "https://www.reliancedigital.in/medias/Bajaj-Air-Cooler-494338771-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTA2M3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDI1LzEwMTA4NzA2MDk1MTM0LmpwZ3xlOWZmZGI4ZDZiZDZhNjAzYWY3NjA1MjBlMGVlMzAzM2EzNTNhOTMxZTI2YzY5MDQ0ZjRhMDE4MmRhZTg2Y2Y2",
//         discountTag: "Get Iron Free & 7.5% Discount",
//         brandName: "Bajaj Shield Series Elevate 65 Desert Air Cooler",

//         ofPrice: " 10,999.00",
//         mrpPrice: "18,999.00",
//     },
//     {
//         proImg:
//             "https://www.reliancedigital.in/medias/Havells-Celia-I-Air-Coolers-491391933-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDk5Lzg5NjI4NTM3OTc5MTguanBnfGY0NDEwNDkwZjE0ZjE2YmQ4MWYxMmVkYzk1NmJkNjVhMzYzNzgyYTFjODA5ZDE1OWY4ZjRkYjI3ZTcyZjZkOTU",
//         discountTag: "Get Iron Free & 2.5% Discount",
//         brandName: "Havells Celia Series Elevate 65 Desert Air Cooler",

//         ofPrice: " 12,999.00",
//         mrpPrice: "12,999.00",
//     },
//     {
//         proImg:
//             "https://www.reliancedigital.in/medias/Bajaj-Air-Cooler-494338771-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTA2M3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDI1LzEwMTA4NzA2MDk1MTM0LmpwZ3xlOWZmZGI4ZDZiZDZhNjAzYWY3NjA1MjBlMGVlMzAzM2EzNTNhOTMxZTI2YzY5MDQ0ZjRhMDE4MmRhZTg2Y2Y2",
//         discountTag: "Get Iron Free & 7.5% Discount",
//         brandName: "Bajaj Shield Series Elevate 65 Desert Air Cooler",

//         ofPrice: " 10,999.00",
//         mrpPrice: "18,999.00",
//     },
//     {
//         proImg:
//             "https://www.reliancedigital.in/medias/Havells-Celia-I-Air-Coolers-491391933-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDk5Lzg5NjI4NTM3OTc5MTguanBnfGY0NDEwNDkwZjE0ZjE2YmQ4MWYxMmVkYzk1NmJkNjVhMzYzNzgyYTFjODA5ZDE1OWY4ZjRkYjI3ZTcyZjZkOTU",
//         discountTag: "Get Iron Free & 2.5% Discount",
//         brandName: "Havells Celia Series Elevate 65 Desert Air Cooler",

//         ofPrice: " 12,999.00",
//         mrpPrice: "12,999.00",
//     },
//     {
//         proImg:
//             "https://www.reliancedigital.in/medias/Bajaj-Air-Cooler-494338771-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTA2M3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDI1LzEwMTA4NzA2MDk1MTM0LmpwZ3xlOWZmZGI4ZDZiZDZhNjAzYWY3NjA1MjBlMGVlMzAzM2EzNTNhOTMxZTI2YzY5MDQ0ZjRhMDE4MmRhZTg2Y2Y2",
//         discountTag: "Get Iron Free & 7.5% Discount",
//         brandName: "Bajaj Shield Series Elevate 65 Desert Air Cooler",

//         ofPrice: " 10,999.00",
//         mrpPrice: "18,999.00",
//     },
//     {
//         proImg:
//             "https://www.reliancedigital.in/medias/Havells-Celia-I-Air-Coolers-491391933-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDk5Lzg5NjI4NTM3OTc5MTguanBnfGY0NDEwNDkwZjE0ZjE2YmQ4MWYxMmVkYzk1NmJkNjVhMzYzNzgyYTFjODA5ZDE1OWY4ZjRkYjI3ZTcyZjZkOTU",
//         discountTag: "Get Iron Free & 2.5% Discount",
//         brandName: "Havells Celia Series Elevate 65 Desert Air Cooler",

//         ofPrice: " 12,999.00",
//         mrpPrice: "12,999.00",
//     },
// ];

// export const Test = () => {
//     const [dealOfTheDay, setDealOfTheDay] = useState(Product);

//     return (
//         <div className="w-full">
//             <h2 className="text-center">Deal of the Day</h2>

//             <div className="flex flex-wrap justify-center gap-2">
                
//                         <div
//                             key={product.brand}
//                             className="border-2 rounded-md w-[240px] flex flex-col justify-center p-2  "
//                         >
//                             <img
//                                 className="relative w-[200px] top-1 hover:text-bubble-gum cursor-pointer"
//                                 src={product.proImg}
//                                 alt="productImage"
//                             />

//                             <h3 className="hover:text-bubble-gum px-[10px] mb-[10px] text-red-600 cursor-pointer text-md">
//                                 {product.brandName}
//                             </h3>

//                             <div>
//                                 <p className="opacity-40  text-sm font-bold text-black">
//                                     offer price : ₹ {product.mrpPrice}
//                                 </p>
//                             </div>
//                             <p className="px-[10px]">
//                                 MRP : <b className="line-through ">₹{product.mrpPrice}</b>
//                             </p>

//                             <div>
//                                 {/* <Rating
//                                     name="simple-controlled"
//                                 //   value={value}
//                                 //   onChange={(event, newValue) => {
//                                 //     setValue(newValue);
//                                 //   }}
//                                 /> */}
//                                 {product.ratings}
//                             </div>
//                         </div>
                   
//             </div>
//         </div>
//     );
// };