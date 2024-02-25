"use client";

// @ts-ignore
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";
import "jsvectormap/dist/css/jsvectormap.css";
import { useEffect } from "react";
import Heading2 from "./heading2";

const NetworkMap = () => {
  useEffect(() => {
    const map = new jsVectorMap({
      selector: "#map",
      map: "world",
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
          fill: "#B860AC",
          fontSize: "1.575rem",
          fontFamily: "Inter",
          background: "red",
          padding: "10rem",
        },
      },
      // Other configuration options for jsvectormap
      markers: [
        {
          name: "Egypt",
          coords: [26.8206, 30.8025],
        },
        {
          name: "United Kingdom",
          coords: [55.3781, 3.436],
        },
        {
          name: "United States",
          coords: [37.0902, -95.7129],
        },
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
      map.destroy();
    };
  }, []);
  return (
    <div className="flex py-16 px-[6.5rem] flex-col justify-center items-center gap-2 bg-dark-green">
      <div className="flex flex-col items-center gap-8">
        <Heading2
          text="Map of Current Members/Clubs/Nodes"
          className="text-center"
        />
        <div id="map" style={{ width: "77rem", height: "42rem" }}></div>
      </div>
    </div>
  );
};

export default NetworkMap;
