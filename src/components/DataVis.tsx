"use client"

import Earth from "./Earth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function DataVis() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Build.loader.js",
        dataUrl: "/Build.data",
        frameworkUrl: "/Build.framework.js",
        codeUrl: "/Build.wasm",
    })

    return (
        <div className="w-full h-full p-2 flex flex-col justify-start gap-2">
            <h3 className="text-black text-6xl p-2">Explore Ocean Microplastics</h3>
            <h4 className="text-black text-xl p-2">Experience NOAA's <a href="https://www.ncei.noaa.gov/products/microplastics" className="underline">Marine Microplastics Dataset</a>, a dataset containing thousands microplastic concentrations sampled from all over the globe. </h4>
            <Tabs defaultValue="datavis">  
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
                    <div className="w-full h-screen border-2 border-black p-2 flex justify-center items-center">
                        <Unity unityProvider={unityProvider} style={{width: "1536px", height: "864px"}}/>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}