"use client";

import { useState } from "react";

// @ts-ignore
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";
import "jsvectormap/dist/css/jsvectormap.css";
import { useEffect } from "react";
import Heading2 from "../heading2";
import style from "./map.module.css";

const NetworkMap = () => {
  useEffect(() => {
    const map = new jsVectorMap({
      selector: "#map",
      map: "world",
      zoomMax: 1, // Set the maximum zoom level to 1 to disable zooming
      zoomButtons: false, // Disable zoom buttons
      markerStyle: {
        initial: {
          image: "/marker.svg",
          width: "1.5rem", // Set the width of the marker image
          height: "1.5rem",
        },
        hover: {
          "stroke-width": 2,
        },
        selected: {
          fill: "yellow",
        },
      },

      markerLabelStyle: {
        initial: {
          // Add CSS properties here
          fill: "#000",
          fontSize: "0.875rem",
          fontFamily: "Inter",
        },
      },
      // Other configuration options for jsvectormap
      markers: [
        {
          name: "UK",
          coords: [55.3781, 3.436],
        },
        {
          name: "United States",
          coords: [37.0902, -95.7129],
        },
        { name: "Canada", coords: [45.4215, -75.6994] },
        { name: "Japan", coords: [35.6895, 139.6917] },
        { name: "Mexico", coords: [19.4326, -99.1332] },
        { name: "Italy", coords: [41.9028, 12.4964] },
        { name: "Brazil", coords: [-15.7801, -47.9292] },
        { name: "Spain", coords: [40.4168, -3.7038] },
        { name: "Australia", coords: [-35.2809, 149.13] },
        { name: "Ghana", coords: [5.6037, -0.187] },
        { name: "South Korea", coords: [37.5665, 126.978] },
        { name: "Taiwan", coords: [25.033, 121.5654] },
      ],
      labels: {
        markers: {
          // Starting from jsvectormap v1.2 the render function receives
          // the marker object as a first parameter and index as the second.
          // @ts-ignore
          render(marker, index) {
            return marker.name || marker.labelName || "Not available";
          },
        },
      },
    });

    // Clean up the map instance when the component is unmounted
    return () => {
      //   map && map.destroy();
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 776;

      console.log("I think this is mobile", isMobileDevice, window.innerWidth); // Adjust the threshold as needed
      setIsMobile(isMobileDevice);
    };

    // Initial check on mount
    checkMobile();

    // Attach a resize event listener to update the state if the viewport changes
    window.addEventListener("resize", checkMobile);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="flex py-8 lg:py-16 px-4 lg:px-[6.5rem] flex-col justify-center items-center gap-2 w-full">
      <div className="flex flex-col items-center gap-8 w-full">
        <Heading2 text="Map of Our Nodes" className="text-center" />
        <div className={style["map-container"]}>
          <div id="map" className={style["jvmap-smart"]}></div>
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
