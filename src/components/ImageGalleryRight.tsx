"use client"

import Image from "next/image"
import { CardDescription, CardTitle } from "./ui/card"

export default function ImageGalleryRight() {
    return (
        <div className="w-full h-screen grid grid-cols-3 gap-5 justify-center items-center">
            <div className="col-start-3 flex flex-col justify-center items-center gap-2">
                <Image
                    src="/whales.jpeg"
                    alt="image of blue whales"
                    width={400}
                    height={300}
                />
                <CardTitle>Blue Whales</CardTitle>
                <CardDescription>Blue Krill whales ingest ~10,000,000 pieces of microplastic a day</CardDescription>
            </div>
            <div className="col-start-2 row-start-2 gap-2 flex flex-col justify-center items-center">
                <Image
                    src="/coral.jpeg"
                    alt="image of coral"
                    width={400}
                    height={300}
                >

                </Image>
                <CardTitle>Coral</CardTitle>
                <CardDescription>The presence of plastic in Corals increases disease risk to 89%</CardDescription>
            </div>
            <div className="row-start-3 gap-2 flex flex-col justify-center items-center">
                <Image
                    src="/seabird.jpeg"
                    alt="Image of sea bird"
                    width={400}
                    height={300}
                >

                </Image>
                <CardTitle>Sea Birds</CardTitle>
                <CardDescription>Sea birds are often found feeding bits of plastic to their young</CardDescription>
            </div>
        </div>
    )
};