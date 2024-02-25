"use client"

import ImageCard from "@/components/ImageCard";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Button } from "@/components/ui/button"
import Lander from "@/components/Lander";
import Explanation from "@/components/Explanation";
import DataVis from "@/components/DataVis";

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/samplebuild.loader.js",
    dataUrl: "/build/samplebuild.data",
    frameworkUrl: "/build/samplebuild.framework.js",
    codeUrl: "/build/samplebuild.wasm",
  })
  return (
    <main className="flex flex-col bg-white">
        <Lander/>
        <Explanation/>
        <ImageCard src="vercel.svg"/>
        <DataVis/>

    </main>
  );
}
