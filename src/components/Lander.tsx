"use client"

import { ArrowDown } from "lucide-react"
import { Button } from './ui/button';

export default function Lander() {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight + 25,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative w-full">
            <video muted loop autoPlay className="object-fill w-full h-full" src="/waterPollution.mov" style={{ zIndex: -1 }}>
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-black bg-opacity-30 rounded-xl p-20 w-full h-full">
                    <div className="pt-40 pb-10 border border-4 flex flex-col justify-center items-center">
                        <h1 className="text-white text-9xl text-center">Our Oceans are F*cked</h1>
                        <Button className="w-20 h-40 mt-40 mb-20 border-4 rounded-full flex justify-center items-center" onClick={handleScrollDown} variant="ghost">
                            <ArrowDown className="w-10 h-10 hover:bg-black rounded-full" color="white"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}



