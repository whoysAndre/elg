'use client'

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface Props{
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}


export const QuantitySelector = ({quantity,onQuantityChange}:Props) => {
  
  const increaseQuantity = () => onQuantityChange(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  
  return (
    <div className="flex">
      <button onClick={decreaseQuantity}>
        <IoRemoveCircleOutline size={30}/>
      </button>
      <span className="w-20 mx-3 px-5 py-1 bg-gray-200 text-center rounded-md font-bold">{quantity}</span>
      <button onClick= {increaseQuantity}>
        <IoAddCircleOutline size={30}/>
      </button>
    </div>
  )
}