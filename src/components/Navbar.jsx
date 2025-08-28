"use client"; // needed because we’re using hooks

import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();

    const links = <>
        <li><Link href='/' className='font-semibold transition duration-300 hover:scale-110'>Home</Link></li>
        <li><Link href='/products' className='font-semibold transition duration-300 hover:scale-110'>Products</Link></li>
        <li><Link href='/dashboard/add-product' className='font-semibold transition duration-300 hover:scale-110'>Add Product</Link></li>
    </>;

    return (
        <div className=''>
            <div className="navbar max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <button className='btn'>
                            <img src="https://img.icons8.com/?size=100&id=2169&format=png&color=2563eb" alt="" className='w-10 h-10' />
                            Gadget World
                        </button>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    {session ? (
                        <button
                            onClick={() => signOut()}
                            className='btn btn-secondary rounded-lg transition duration-300 hover:scale-110'
                        >
                            Logout
                        </button>
                    ) : (
                      <Link href={'/login'}>
                        <button className='btn btn-primary rounded-lg transition duration-300 hover:scale-110'>Login</button>
                      </Link>
                    )}



                </div>
            </div>
        </div>
    );
};

export default Navbar;
