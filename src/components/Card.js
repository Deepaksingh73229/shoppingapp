import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clickAdd, clickRemove } from "../redux/ShoppingSlice"

export function Card({ item }) {
    const title = `${item.title.substring(0, 15)}...`
    const description = `${item.description.substring(0, 85)}...`

    // Import from slice redux
    const {ShoppingApp} = useSelector((state) => state)
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(clickAdd(item))
    }

    const removeItem = () => {
        dispatch(clickRemove(item.id))
    }

    return (
        <div className="px-5 py-8 w-full space-y-6 border rounded-xl shadow-2xl group hover:scale-110 transition-all duration-500">
            <h3 className="text-sm md:text-base font-bold">{title}</h3>
            <p className="text-xs md:text-sm text-clip">{description}</p>

            <div className="w-full mx-auto max-h-[90px] md:max-h-[150px] h-full">
                <img src={item.image} alt={`Product No ${item.id}`} className="mx-auto h-full aspect-square"></img>
            </div>

            <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 justify-center md:justify-between items-start md:items-center">
                <span className="text-green-500 text-sm font-semibold">{`$ ${item.price}`}</span>

                {
                    ShoppingApp.some((p) => p.id === item.id) ?
                        (
                            <button onClick={removeItem}
                                className="w-full md:w-[57%] border-2 border-black rounded-lg px-2 py-1 text-sm uppercase group-hover:bg-slate-900 group-hover:text-white transition-all duration-200"
                            >Remove Item</button>
                        ) :
                        (
                            <button onClick={addItem}
                                className="w-full md:w-[57%] border-2 border-black rounded-lg px-2 py-1 text-sm uppercase group-hover:bg-slate-900 group-hover:text-white transition-all duration-200"
                            >Add to Cart</button>
                        )
                }

            </div>
        </div>
    )
}