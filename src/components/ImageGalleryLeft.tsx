"use client"

import Image from "next/image"
import { CardTitle } from "./ui/card"
import { CardDescription } from "./ui/card"

export default function ImageGalleryLeft() {
    return (
        <div className="w-full h-screen grid grid-cols-3 gap-5 justify-center items-center">
            <div className="col-start-2 row-start-2">
                <div className="col-start-2 row-start-2 gap-2 flex flex-col justify-center items-center">
                    <Image
                        src="/fish.jpeg"
                        alt="image of fish"
                        width={400}
                        height={300}
                    />
                    <CardTitle>Fish</CardTitle>
                    <CardDescription>Fish in the North Pacific ingets 12,000 to 24,000 tons of plastic each year</CardDescription>
                </div>
            </div>
            <div className="col-start-3 row-start-3">
                <div className="col-start-2 row-start-2 gap-2 flex flex-col justify-center items-center">
                    <Image
                        src="/shark.jpeg"
                        alt="image of shark"
                        width={400}
                        height={300}
                    />
                    <CardTitle>Apex Predators</CardTitle>
                    <CardDescription>Biomagnification means that those at the top of the food chain have more to fear</CardDescription>
                </div>
            </div>
            <div className="col-start-1 row-start-1">
            <div className="col-start-2 row-start-2 gap-2 flex flex-col justify-center items-center">
                    <Image
                        src="/seaturtle.jpeg"
                        alt="image of sea turtle"
                        width={400}
                        height={300}
                    />
                    <CardTitle>Sea Turtles</CardTitle>
                    <CardDescription>Sea Turtles are notorious for mistaking plastic for jellyfish</CardDescription>
                </div>
            </div>
        </div>
    )
}