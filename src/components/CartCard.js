import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clickRemove } from "../redux/ShoppingSlice";

const CartCard = ({item}) => {
    const dispatch = useDispatch()
    const description = `${item.description.substring(0, 200)}...`

    const removeCart = () => {
        dispatch(clickRemove(item.id))
    }

    return (
        <div className="w-full flex gap-10">
            <img src={item.image} alt={`Product No ${item.id}`} className="w-[150px] md:w-[200px] aspect-square"></img>

            <div className="w-full flex flex-col gap-5">
                <h1 className="text-xl text-purple-900 font-bold">{item.title}</h1>
                <p className="text-sm font-mono font-semibold">{description}</p>

                <div className="w-full flex justify-between items-center">
                    <span className="text-lg font-bold">{`$ ${item.price}`}</span>

                    <button onClick={removeCart} className="border p-4 rounded-full bg-red-200">
                        <MdDelete className="flex scale-150 text-red-800"/>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default CartCard