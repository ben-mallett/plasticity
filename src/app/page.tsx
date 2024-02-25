"use client"

import ImageCard from "@/components/ImageCard";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Button } from "@/components/ui/button"

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/samplebuild.loader.js",
    dataUrl: "/build/samplebuild.data",
    frameworkUrl: "/build/samplebuild.framework.js",
    codeUrl: "/build/samplebuild.wasm",
  })
  return (
    <main className="">
        <ImageCard src="vercel.svg"/>
        <Button variant="outline">Button</Button>

    </main>
  );
}
