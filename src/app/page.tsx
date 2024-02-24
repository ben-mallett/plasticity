"use client"

import ImageCard from "@/components/ImageCard";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/samplebuild.loader.js",
    dataUrl: "/build/samplebuild.data",
    frameworkUrl: "/build/samplebuild.framework.js",
    codeUrl: "/build/samplebuild.wasm",
  })
  return (
    <main className="">
        <ImageCard/>
    </main>
  );
}
