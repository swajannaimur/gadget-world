"use client";

import Loading from "@/components/Loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("/api/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false)
        };
        fetchProducts();
    }, []);

    if (loading) {
    return <Loading></Loading>
}

    return (
        <div className="p-6  min-h-screen">
            <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
                All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between transform transition hover:scale-105 hover:shadow-2xl">
                        
                        {product.image && (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-contain rounded-xl mb-4"
                            />
                        )}
                        
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                                {product.description.length > 80
                                    ? product.description.slice(0, 80) + "..."
                                    : product.description}
                            </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <p className="font-bold text-indigo-600 text-lg">
                               Price: <span className='text-gray-800 font-semibold'>{product.price} tk</span>
                            </p>
                            <Link href={`/products/${product._id}`}>
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
