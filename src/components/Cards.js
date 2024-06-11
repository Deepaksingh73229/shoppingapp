import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { products } from "../data";
import Spinner from "../Spinner";

export function Cards() {

    const url = "https://fakestoreapi.com/products"
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(false)

    async function fetchData() {
        setloading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setProduct(data)
        }
        catch (err) {
            console.log("Error while fetching shopping data!")
            setProduct([])
        }
        setloading(false)
    }

    useEffect(() => {
        fetchData()
        // setloading(true)
        // setProduct(products)
        // setloading(false)
    }, [])

    return (
        <div className="w-full max-w-[400px] md:max-w-[1080px] mx-auto py-8 px-2">
            {
                loading ?
                    (<Spinner />) :
                    products.length === 0 ?
                        (<h1 className="text-2xl font-bold text-center text-orange-700 select-none">Sorry, there is no product 😐</h1>) :
                        (<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-5">
                            {
                                product.map((item) => {
                                    return <Card key={item.id} item={item} />
                                })
                            }
                        </div>)
            }
        </div>
    )
}