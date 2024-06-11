import React from "react";
import CartCard from "./CartCard";
// import { useSelector } from "react-redux";

const CartCards = ({ShoppingApp}) => {

    // const { ShoppingApp } = useSelector((state) => state)

    return (
        <div className="w-full max-w-[600px] mx-auto py-5 px-2 flex flex-col gap-20">
            {
                ShoppingApp.map((item, index) => {
                    return <CartCard key={item.id} item={item} itemIndex={index} />
                })
            }
        </div>
    )
}

export default CartCards