"use client"

import ImageCard from "@/components/ImageCard";
import { Unity, useUnityContext } from "react-unity-webgl";
import Lander from "@/components/Lander";
import Explanation from "@/components/Explanation";
import DataVis from "@/components/DataVis";
import ImageGalleryLeft from "@/components/ImageGalleryLeft";
import ImageGalleryRight from "@/components/ImageGalleryRight";
import Quote from "@/components/Quote";
import Citations from "@/components/Citations";
import Footer from "@/components/Footer";

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
        <ImageGalleryRight/>
        <ImageCard/>
        <ImageGalleryLeft/>
        <DataVis/>
        <div className="flex flex-col justify-center items-center gap-60 m-24">
          <Quote quote="By 2050 plastic will likely outweigh all fish in the sea." attribution="UNESCO"/>
          <Quote quote="Currently, there are aboute 50-75 trillion pieces of plastic and microplastics in the ocean." attribution="UNESCO"/>
          <Quote quote="Water and air, the two essential fluids on which all life depends, have become global garbage cans." attribution="Jacques Yves Cousteau, Oceanographer"/>
        </div>
        <Citations/>
        <Footer/>
    </main>
  );
}
