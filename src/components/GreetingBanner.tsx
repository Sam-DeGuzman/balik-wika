import React, { ReactNode } from 'react';
import Image from 'next/image';

interface GreetingBannerProps {
    greetingHeader: ReactNode;
    greetingText: ReactNode;
    imageSrc: string;
    imageAlt: string;
    className?: string;
}

export default function GreetingBanner({
    greetingHeader,
    greetingText,
    imageSrc,
    imageAlt,
    className = '',
}: GreetingBannerProps) {
    return (
        <section
            className={`relative bg-[#9486d8] rounded-3xl box-border flex flex-col lg:flex-row items-start lg:items-stretch pl-6 pr-6 py-8 min-h-[220px] overflow-visible ${className}`}
        >
            <div className='flex-1 z-10 w-full md:pr-8 flex flex-col items-start justify-start'>
                <h1 className='text-2xl md:text-4xl font-bold text-[#e6e6e6] mb-4 leading-tight text-left'>
                    {greetingHeader}
                </h1>
                <p className='text-base md:text-xl text-[#e6e6e6] text-left max-w-[60rem]'>
                    {greetingText}
                </p>
            </div>
            <div className='hidden md:flex z-20'>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={260}
                    height={220}
                    className='hidden lg:block h-65 w-auto object-contain drop-shadow-lg mb-[-40px]'
                />
            </div>
        </section>
    );
}
