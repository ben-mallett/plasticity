"use client"

import Image from 'next/image'
import { Card, CardHeader, CardTitle } from './ui/card';

export default function ImageCard() {
  return (
    <div className="h-screen w-full flex flex-row justify-between items-center bg-black">
        <Image 
            src="vercel.svg"
            alt="random image"
            width="100"
            height="100"
        />
        <Card className="w-1/2 h-1/2 opacity-80">
            <CardHeader>
                <CardTitle>
                    Microplastic information
                </CardTitle>
            </CardHeader>
        </Card>
    </div>
  );
}
