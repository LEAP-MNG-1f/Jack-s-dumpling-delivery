"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export default function Deliverypage() {
  const arr = Array.from({ length: 14 }, (_, index) => ({
    name: "appartment",
    index: index + 1,
  }));
  console.log(arr);

  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

      if (!apiKey) {
        console.log("google map error");

        return;
      }
      try {
        const loader = new Loader({
          apiKey,
          version: "weekly",
        });
        const { Map } = await loader.importLibrary("maps");

        const mapOptions = {
          center: {
            lat: 47.91996922842304,
            lng: 106.91756534492119,
          },
          zoom: 15,
        };
        if (mapRef.current && !mapInstance.current) {
          mapInstance.current = new Map(mapRef.current, mapOptions);
        }
      } catch (error) {
        console.log("map error", error);
      }
    };
    initMap();
  }, []);

  return (
    <div className="w-screen flex flex-col  items-center justify-center gap-8 pt-20">
      <div className="container max-w-screen-xl flex flex-col  items-center justify-center ">
        <div className="w-full flex flex-col items-center justify-center  gap-2">
          <div className=" w-full flex justify-between">
            <div className="flex flex-col gap-4">
              <Typography variant="h4" className="italic">
                Delivery zone
              </Typography>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 border-green-600 text-center">
                    zone 1
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {arr.map((bair, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 border"
                        >
                          <div>{bair.name}</div>
                          <div>{bair.index}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 border-green-600 text-center">
                    zone 2
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {arr.map((bair, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 border"
                        >
                          <div>{bair.name}</div>
                          <div>{bair.index}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={mapRef}
              className="w-1/2 h-[616px] border-2 border-black"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
