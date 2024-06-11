import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartCards from "../components/CartCards";
import { useSelector } from "react-redux";

export function Cart() {
    const { ShoppingApp } = useSelector((state) => state)
    console.log(ShoppingApp)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        setTotalAmount(ShoppingApp.reduce((acc, curr) => acc + curr.price, 0))
    }, [ShoppingApp])

    // let totalAmount = (ShoppingApp) => {
    //     let amount = 0

    //     ShoppingApp.forEach(element => {
    //         amount += element.price
    //     });

    //     return amount
    // }

    return (
        <div className="w-full max-w-[400px] md:max-w-[1080px] mx-auto py-5 px-2">
            {
                ShoppingApp.length > 0 ?

                    (
                        <div className="flex flex-col md:flex-row gap-16">
                            <CartCards ShoppingApp={ShoppingApp} />

                            <div className="flex flex-col items-start py-10 justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-green-800 text-xl font-bold">YOUR CART</span>
                                    <span className="text-green-700 text-5xl font-bold mb-5">SUMMARY</span>
                                    <span className="text-green-900 text-lg font-bold">{`Total Items: ${ShoppingApp.length}`}</span>
                                </div>

                                <div className="space-y-4">
                                    <span className="text-green-900 text-xl font-bold">{`Total Amount: $ ${totalAmount}`}</span>
                                    <button
                                        className="w-full uppercase px-8 py-3 border-2 border-green-600 rounded-lg bg-green-600 text-white font-bold hover:bg-white hover:text-green-600 transition-all duration-500"
                                    >Checkout Now</button>
                                </div>
                            </div>

                        </div>
                    ) :
                    (
                        <div className="w-full min-h-[70vh] h-full flex flex-col gap-10 items-center justify-center overflow-y-hidden">
                            <h1 className="text-xl font-bold select-none">Your Cart is empty!</h1>

                            <NavLink to="/shoppingapp">
                                <button
                                    className="uppercase px-8 py-3 border-2 border-green-600 rounded-lg bg-green-600 text-white font-bold hover:bg-white hover:text-green-600 transition-all duration-500"
                                >Shop Now</button>
                            </NavLink>
                        </div>
                    )


            }

        </div>
    )
}