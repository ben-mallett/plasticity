"use client"

import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";

function Earth() {
    const [microplasticsData, setMicroplaticsData] = useState([]);

    useEffect(() => {
        fetch("/datasets/marine_microplastics.csv")
            .then((res) => res.text())
            .then((csv) => d3.csvParse(csv))
            .then(setMicroplaticsData);
    }, []);

    useEffect(() => {
        console.log(microplasticsData);
    }, [microplasticsData]);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Globe
                width="1536" // Set width to 100% of the parent
                height="864" // Set height to 100% of the parent
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                pointsData={microplasticsData}
                pointLabel={"name"}
                pointLat={(d: any) => d.Latitude}
                pointLng={(d: any) => d.Longitude}
                pointAltitude={(d: any) => d.Measurement / 100000}
            />
        </div>
    );
}

export default Earth;