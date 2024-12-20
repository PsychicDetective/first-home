import React from 'react'
import Image from 'next/image';

function About() {
  return (
    <div className="flex gap-[100px]">
        <div className="flex-1 flex flex-col gap-[50px]">
            <h2 className="text-[var(--btn)]">About Agency</h2>
            <h1 className="text-[54px]">We create digital ideas that are bigger, bolder, braver and better.</h1>
            <p className="text-[20px] font-light">
                We create digital ideas that are bigger, bolder, braver and better. We
                believe in good ideas flexibility and precision. We’re world’s best consulting & finance solution provider.
            </p>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[10px]">
                    <h1 className="text-btn">10 K+</h1>
                    <p>Year of experience</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <h1 className="text-btn">10 K+</h1>
                    <p>Year of experience</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <h1>10 K+ </h1>
                    <p>Year of experience</p>
                </div>
            </div>
        </div>
        <div className="flex-1 relative">
            <Image src="/about.png" alt="About Image" fill className="object-contain" />
        </div>
    </div>
);
}

export default About