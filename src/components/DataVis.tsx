"use client"

import Earth from "./Earth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function DataVis() {

    return (
        <div className="w-full h-full p-2 flex flex-col justify-start gap-2">
            <h3 className="text-black text-6xl p-2">Explore Ocean Microplastics</h3>
            <h4 className="text-black text-4xl p-2">Below are two interactive data experiences for NOAA's </h4>
            <Tabs className="w-full rounded-none p-2" defaultValue="datavis">
                <TabsList className="w-full rounded-none">
                    <TabsTrigger className="w-1/2 rounded-none m-2 border-2 border-black" value="datavis">Visualization</TabsTrigger>
                    <TabsTrigger className="w-1/2 rounded-none m-2 border-2 border-black" value="game">Game</TabsTrigger>
                </TabsList>
                <TabsContent value="datavis" className="p-2">
                    <div className="w-full h-screen border-2 border-black">
                        <Earth/>
                    </div>
                </TabsContent>
                <TabsContent value="game" className="p-2">
                    <div className="w-full h-screen border-2 border-black p-2">
                        GAME
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}