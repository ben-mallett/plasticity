"use client"


import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, 
} from './ui/carousel';

const polluters = [
    {
        title: "'22 Top Private Polluters",
        subtitle: "These corporations are cumulatively accountable for over 3,224,000 annual tons of plastic polution.",
        content: (
            <ul>
                <li>Coca Cola</li>
                <li>Pepsi Co</li>
                <li>Nestle</li>
                <li>Unilever</li>
                <li>Mondelez International</li>
                <li>Mars</li>
                <li>Proctor & Gamble</li>
                <li>Philip Moris International</li>
                <li>Danone</li>
                <li>Ferrero Group</li>
            </ul>
        )
    },
    {
        title: "'22 Top Country Polluters",
        subtitle: "These countries are cumulatively accountable for over 3,200,000 annual kilograms of plastic polution.",
        content: (
            <ul>
                <li>India</li>
                <li>China</li>
                <li>Indonesia</li>
                <li>Brazil</li>
                <li>Thailand</li>
                <li>Mexico</li>
                <li>Egypt</li>
                <li>United States</li>
                <li>Japan</li>
                <li>United Kingdom</li>
            </ul>
        )
    },
    {
        title: "Labuan Bajo, Indonesia",
        subtitle: "Annually, Indonesia discharges approximately 346.6 kilotons of waste into the ocean, with Labuan Bajo emerging as a significant contributor to the South Pacific Garbage Patch",
        content: (
            <Image
                src = "/indo.jpeg"
                alt = "Image of Labuan Bajo"
                width="400"
                height="400"
            />
        )
    },
]

const polluted = [
    {
        title: "Kuta Beach, Bali",
        subtitle: "During winter, strong winds and currents bring thousands of pounds of debris to a beach leading to species die off and eventually the formation the Indian Ocean Garbage Patch",
        content: (
            <Image
                src = "/kuta.jpg"
                alt = "Image of Kuta Beach"
                width="400"
                height="400"
            />
        )
    },
    {
        title: "Seal Beach, USA",
        subtitle: "Seal Beach sits at the mouth of the San Gabriel River, which channels runoff water from 50 cities in the Los Angeles river basin. The Coastal Commission reports that 80% of the trash entering the North Pacific originates from the San Gabriel River.",
        content: (
            <Image
                src = "/seal.jpeg"
                alt = "Image of Seal Beach"
                width="400"
                height="400"
            />
        )
    },
    {
        title: "The Five Major Garbage Patches",
        subtitle: "Garbage patches are created by gyres -- large whirlpools -- that concentrate debris forming distinct patches. The Earth harbors five major gyres: one in the Indian Ocean, two in the Atlantic Ocean, and two in the Pacific Ocean. Coincidentally, each has a garbage patch.",
        content: (
            <Image
                src = "/gbp.webp"
                alt = "Image of trash trawler"
                width="400"
                height="400"
            />
        )
    },
    {
        title: "Mantanza River, Argentina",
        subtitle: "Approximately 15,000 industries are believed to be polluting into the river. It is considered one of the most polluted waterways in Latin America and has a high lead concentration.",
        content: (
            <Image
                src = "/mantanza.jpg"
                alt = "Image of beach town"
                width="400"
                height="400"
            />
        )
    },
]

export default function ImageCard() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-screen mt-20">
            <div className="flex flex-col gap-8 w-1/2 h-4/5 m-5">
                <h3 className="text-black text-6xl">Polluter</h3>
                <div className="w-full h-full border-4 border-black">
                    <div className="w-full h-full flex justify-center items-center">
                        <Carousel className="w-4/5">
                            <CarouselContent>
                                {polluters.map((polluter, index) => (
                                    <CarouselItem key={index} className="flex justify-center items-center">
                                        <CardContent className="flex flex-col items-start justify-between gap-2">
                                            <div>
                                                <CardTitle>{polluter.title}</CardTitle>
                                                <CardDescription>{polluter.subtitle}</CardDescription>
                                            </div>
                                            <div className="self-center flex justify-center items-center mt-6">
                                                {polluter.content}
                                            </div>
                                        </CardContent>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="border-2 border-black"/>
                            <CarouselNext className="border-2 border-black"/>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-1/2 h-4/5 m-5">
                <h3 className="text-black text-6xl">Polluted</h3>
                <div className="w-full h-full border-4 border-black">
                    <div className="w-full h-full flex justify-center items-center">
                        <Carousel className="w-full w-4/5">
                            <CarouselContent>
                                {polluted.map((polluted, index) => (
                                    <CarouselItem key={index} className="flex justify-center items-center">
                                        <CardContent className="flex flex-col items-start justify-between gap-2">
                                            <div>
                                                <CardTitle>{polluted.title}</CardTitle>
                                                <CardDescription>{polluted.subtitle}</CardDescription>
                                            </div>
                                            <div className="self-center flex justify-center items-center mt-6">
                                                {polluted.content}
                                            </div>
                                        </CardContent>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="border-2 border-black"/>
                            <CarouselNext className="border-2 border-black"/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
};