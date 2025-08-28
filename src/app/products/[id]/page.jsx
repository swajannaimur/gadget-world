"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <Loading></Loading>
    }

    return (
        <div className="p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">
            <button
                onClick={() => router.back()}
                className="mb-6 text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-2 font-medium"
            >
                ← Back
            </button>

            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8 md:gap-12 overflow-hidden">
                
                {product.image && (
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-96 object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}

                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{product.name}</h1>
                        <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                        <p className="text-indigo-600 font-bold text-3xl mb-6">
                            ৳ {product.price}
                        </p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}
