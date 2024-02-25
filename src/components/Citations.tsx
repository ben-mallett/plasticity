import { Link } from "lucide-react"
const citations = [
    {
        name: "National Oceanic and Atmospheric Administration",
        url: "https://www.ncei.noaa.gov/products/microplastics"
    },
    {
        name: "National Oceanic and Atmospheric Administration",
        url: "https://marinedebris.noaa.gov/discover-marine-debris/garbage-patches"},
    {
        name: "Nature Communications",
        url: "https://www.nature.com/articles/s41467-022-33334-5"
    },
    {
        name: "United Nations Enviorment Programme",
        url: "https://www.unep.org/plastic-pollution"
    },
    {
        name: "United Nations Enviorment Programme",
        url: "https://leap.unep.org/en/content/basic-page/plastics-pollution-toolkit-about"        
    },
    {
        name: "Fauna & Flora",
        url: "https://www.fauna-flora.org/explained/how-does-plastic-pollution-affect-marine-life/"
    },
    {
        name: "World Wildlife Fund",
        url: "https://www.worldwildlife.org/stories/what-do-sea-turtles-eat-unfortunately-plastic-bags"
    },
    {
        name: "Science Daily",
        url: "https://www.sciencedaily.com/releases/2021/08/210820111045.htm"
    },
    {
        name: "Center for Biological Diversity",
        url: "https://www.biologicaldiversity.org/campaigns/ocean_plastics/"
    },
    {
        name: "Science.org",
        url: "https://www.science.org/content/article/plastic-trash-making-coral-reefs-sick"
    },
]

export default function Citations() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center m-60">
            <h1 className="text-black text-6xl text-center">Citations</h1>
            {
                citations.map((citation) => {
                    return (
                        <a className="flex gap-2 justify-center items-center" href={citation.url}>
                            <Link/>
                            <h4 className="text-black text-xl text-center">{citation.name}</h4>
                            | 
                            <h4 className="text-black text-xl text-center underline">{citation.url}</h4>
                        </a>
                    )
                })
            }
        </div>
    )
}