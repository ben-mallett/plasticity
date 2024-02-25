"use client"


import Image from 'next/image'
import { Card, CardHeader, CardTitle } from './ui/card';

type ImageProps = {
   src: string;
}
export default function ImageCard(props: ImageProps) {


 return (
   <div className="h-full w-full flex flex-col justify-between items-center bg-gray-700">


       <Card className="w-1/2 h-1/2 opacity-80">
           <CardHeader>
               <CardTitle>
                   The Five Major Garbage Patches
               </CardTitle>
           </CardHeader>
           <Image
            src = "/GPmap_2010_NOAAMDP.jpg"
            alt = "Map of ocean gyres"
            width="400"
            height="400"
           />
           <text>
           Garbage patches are extensive zones in the ocean where marine debris, including litter and fishing gear, accumulates. They are created by swirling ocean currents known as "gyres," acting like large whirlpools that draw objects inward. These currents concentrate debris, often at the center of the gyre, forming distinct "patches."
The Earth harbors five major gyres: one in the Indian Ocean, two in the Atlantic Ocean, and two in the Pacific Ocean. Each gyre contains garbage patches of different sizes, serving as alarming indicators of oceanic pollution. Below are some of the largest contributors to these ocean garbage patches.
           </text>
       </Card>

       <Card className="w-1/2 h-1/2 opacity-80">
           <CardHeader>
               <CardTitle>
                   Kuta Beach, Bali
               </CardTitle>
           </CardHeader>
           <Image
            src = "/antarafoto-jelang-pergantian-tahun-baru-pantai-kuta-311220-nhw-1.jpg"
            alt = "Map of ocean gyres"
            width="400"
            height="400"
           />
           <text>
           During winter, strong winds and currents bring thousands of pounds of debris to a beach, eventually forming the Indian Ocean Garbage Patch. This accumulation of garbage has overrun the beach, attracting attention not for its beauty but for the massive amount of trash. The beach's poor condition has led to a significant decline in marine life populations, with many species dying off.
           </text>
       </Card>

       <Card className="w-1/2 h-1/2 opacity-80">
           <CardHeader>
               <CardTitle>
                   Seal Beach, USA
               </CardTitle>
           </CardHeader>
           <Image
            src = "/download.jpeg"
            alt = "Map of ocean gyres"
            width="400"
            height="400"
           />
           <text>
           Seal Beach sits at the mouth of the San Gabriel River, which channels runoff water from 50 cities in the Los Angeles river basin. Storms and flooding cause the river to carry accumulated garbage from these cities straight into the North Pacific Ocean. The Coastal Commission reports that 80% of the trash entering the North Pacific originates from the San Gabriel River.
           </text>
       </Card>


       <Card className="w-1/2 h-1/2 opacity-80">
           <CardHeader>
               <CardTitle>
                   Labuan Bajo, Indonesia
               </CardTitle>
           </CardHeader>
           <Image
            src = "/images.jpeg"
            alt = "Map of ocean gyres"
            width="400"
            height="400"
           />
           <text>
           Annually, Indonesia discharges approximately 346.6 kilotons of waste into the ocean, with Labuan Bajo emerging as a significant contributor to the South Pacific Garbage Patch. Poor waste management practices and detrimental human behaviors have transformed Labuan Bajo into a town encircled by hazardous waste, ultimately funneling into the South Pacific.
           </text>
       </Card>

       <Card className="w-1/2 h-1/2 opacity-80">
           <CardHeader>
               <CardTitle>
                   Mantanza River, Argentina
               </CardTitle>
           </CardHeader>
           <Image
            src = "/Matanza-Riachuelo-Plastic-Rivers.jpg"
            alt = "Map of ocean gyres"
            width="400"
            height="400"
           />
           <text>
            Approximately 15,000 industries are believed to be polluting into the river. It is considered one of the most polluted waterways in Latin America and has a high lead concentration.
           </text>
       </Card>

       


       


       
   </div>
 );
}



