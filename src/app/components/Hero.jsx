import React from 'react';
import hero from '../../assets/hero-bg.jpg';
import Image from 'next/image';
import headphones from '../../assets/headphones-audio-listen.png'
import Link from 'next/link';
const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 items-center py-10'>
            {/* left side */}
            <div className='text-center md:text-start'>
                <h1 className="text-5xl font-bold">Welcome to <span className='text-primary '>Gadget World</span></h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <Link href={'/products'}><button className="btn btn-secondary rounded-xl">See Products</button></Link>
            </div>

            {/* right side */}
            <div>
                <Image
                    src={headphones}
                    width={500}
                    height={100}
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
};

export default Hero;