import React from 'react';
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Gadget World</h2>
                    <p className="mt-2 text-sm">
                        Explore the latest gadgets and tech at the best prices.  
                        Trusted by thousands of customers worldwide.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="hover:text-blue-500"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-gray-100"><FaGithub size={20} /></a>
                        <a href="#" className="hover:text-red-500"><FaGoogle size={20} /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram size={20} /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h6 className="text-lg font-semibold text-white mb-3">Services</h6>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-indigo-400">Product Warranty</Link></li>
                        <li><Link href="#" className="hover:text-indigo-400">Fast Delivery</Link></li>
                        <li><Link href="#" className="hover:text-indigo-400">24/7 Support</Link></li>
                        <li><Link href="#" className="hover:text-indigo-400">Custom Orders</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-lg font-semibold text-white mb-3">Company</h6>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-indigo-400">Contact</Link></li>
                        <li><Link href="/jobs" className="hover:text-indigo-400">Careers</Link></li>
                        <li><Link href="/blog" className="hover:text-indigo-400">Blog</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h6 className="text-lg font-semibold text-white mb-3">Legal</h6>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/terms" className="hover:text-indigo-400">Terms of Use</Link></li>
                        <li><Link href="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
                        <li><Link href="/cookies" className="hover:text-indigo-400">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Gadget World. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
