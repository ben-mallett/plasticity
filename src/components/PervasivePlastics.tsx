"use client"

import Image from "next/image";

export default function Explanation() {

    return (
        <div className="w-full h-screen flex flex-row justify-between items-center">
            <div className="w-full h-full col-span-2 flex flex-col ">
                <h1 className="w-4/5 col-span-2 text-black text-6xl m-20">Plastic pollution poses significant harm to ecosystems everywhere</h1>
                <p className="w-4/5 h-3/5 border-4 border-black text-4xl mx-20 p-7 text-justify">
                    Every year ~20 million tonnes of plastic pollution makes its way into ecosystems around the world. 
                    From terrestrial environments to the deep ocean, both macro and micro plastics pose significant harm to the ecosystems they end up in. 
                    Plastic pollution impacts climate mitigation, food production, and environmental health. 
                    Though universal, plastic pollution largely affects marine ecosystems and creates persistent hazards that disrupt natural processes and biodiversity. 
                    In order to meaningfully address this issue we must explore its sources and its prevalence across diverse ecosystems from bustling coastlines to remote habitats.
                </p>
            </div>
            <div className="w-1/3">
                <Image
                    src="/plasticBottles.jpeg"
                    alt="Your Image"
                    width={300}
                    height={300}
                    objectFit="contain"
                    style={{ 
                        transform: 'rotate(90deg)',
                        scale: 2.5,
                    }}
                />
            </div>
        </div>
    );
}