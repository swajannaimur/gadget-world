"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddProduct = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleAddBlog = async (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const imageFile = form.image.files[0];

        const imageData = new FormData();
        imageData.append("image", imageFile);

        const imgbbApiKey = "21681d5486143b90eed2a1c6152d0094";
        const uploadRes = await fetch(
            `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
            {
                method: "POST",
                body: imageData,
            }
        );
        const imgResponse = await uploadRes.json();
        const imageUrl = imgResponse?.data?.url;

        const formData = { name, description, price, image: imageUrl };

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const postResponse = await res.json();
        console.log(postResponse);
        setLoading(false)

        if (postResponse?.insertedId) {
            router.push('/products')
            form.reset();
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                    Add a New Product
                </h2>
                <form onSubmit={handleAddBlog} className="space-y-6">
                    {/* Name */}
                    <fieldset>
                        <legend className="font-semibold text-gray-700 mb-1">
                            Product Name
                        </legend>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter your product name"
                            required
                        />
                    </fieldset>

                    {/* Description */}
                    <fieldset>
                        <legend className="font-semibold text-gray-700 mb-1">
                            Description
                        </legend>
                        <textarea
                            name="description"
                            rows="3"
                            className="textarea textarea-bordered w-full rounded-lg focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter your product description"
                            required
                        />
                    </fieldset>

                    {/* Price */}
                    <fieldset>
                        <legend className="font-semibold text-gray-700 mb-1">
                            Price (BDT)
                        </legend>
                        <input
                            type="number"
                            name="price"
                            className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter your product price"
                            required
                        />
                    </fieldset>

                    {/* Image */}
                    <fieldset>
                        <legend className="font-semibold text-gray-700 mb-1">Image</legend>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="file-input file-input-bordered w-full rounded-lg focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </fieldset>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full py-3 text-lg font-bold rounded-xl shadow-md hover:scale-[1.02] transition-transform"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-xl"></span>
                        ) : (
                            "Add Product"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
