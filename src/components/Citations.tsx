import { Link } from "lucide-react"
const citations = [
    {
        name: "name",
        url: "url"
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
    },
    {
        name: "",
        url: ""
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