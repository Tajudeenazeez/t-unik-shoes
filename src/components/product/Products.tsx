import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "store";
import { Gallery } from "components/images";
import { incrementProduct, decrementProduct } from "./productCountSlice";


const Products = () => {
  const count = useSelector((state:RootState) => state.counterProduct.value);
  const dispatch = useDispatch()
  
  const initialState = Gallery.image1
  // const {pic } = useState< any >(initialState)
  const index = [Gallery.image1, Gallery.image2, Gallery.image3, Gallery.image4]

  return (
    <div>
      <div className="flex flex-row">
        <div>
          <img
            className="w-2/3 ml-14 my-8"
            src={Gallery.image1}
            alt="product"
          />
        </div>

        <div className="w-half my-8 mr-14">
          <h5 className="text-orange-600 text-xs py-2">sneakers company</h5>
          <h2 className="font-bold capitalize text-2xl py-2">
            fall limited edition sneakers
          </h2>
          <p className="text-xs text-gray-600">
            These low profile sneakers are your perfect casual wear comparison.
            Featuring a durable rubber outer solo, they'll withstand everything
            the weather can offer.
          </p>
          <span className="font-bold text-md mr-2">$125.00</span>
          <span className="text-orange-500  text-xs">50%</span>
          <p className="text-gray-400 text-xs">$250.00</p>
          <div>
            <span className="mr-2" onClick={() => dispatch(decrementProduct())}>-</span>
            <span className="text-xs">{count}</span>
            <span className="ml-2" onClick={() => dispatch(incrementProduct())}>+</span>
            <button className="bg-orange-600 text-white font-bold  w-[100px] h-[35px] mx-2 text-xs border-rounded-2">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-column w-[80px] h-[80px] ml-[40px] mb-[10px]">
        <img className="m-2" src={index[0]} alt = 'product1'/>
        <img className="m-2" src={index[1]} alt = 'product2'/>
        <img className="m-2" src={index[2]} alt = 'product3'/>
        <img className="m-2" src={index[3]} alt = 'product4'/>
      </div>
    </div>
  );
};

export default Products;
