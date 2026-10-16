"use client";

import { useMemo, useState } from "react";
import africaData from "@/app/data/africa-countries.json";

type Position = [number, number];
type PolygonCoordinates = Position[][];
type CountryGeometry =
  | { type: "Polygon"; coordinates: PolygonCoordinates }
  | { type: "MultiPolygon"; coordinates: PolygonCoordinates[] };
type Country = {
  type: "Feature";
  properties: { name: string; adm0A3: string };
  geometry: CountryGeometry;
};

const countries = africaData.features as Country[];
const mapColors = ["#91734e", "#746c4c", "#a17b4e", "#79634d", "#665d40", "#8b7048", "#887052"];
const mapBounds = { west: -25.5, east: 52, south: -37, north: 38 };

function colorForCountry(code: string) {
  const hash = [...code].reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
  return mapColors[hash % mapColors.length];
}

function project([longitude, latitude]: Position): Position {
  const scaleY = 4.72;
  const scaleX = 5.15;
  return [57 + (longitude - mapBounds.west) * scaleX, 18 + (mapBounds.north - latitude) * scaleY];
}

function ringToPath(ring: Position[]) {
  return ring.map((point, index) => {
    const [x, y] = project(point);
    return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ") + " Z";
}

function countryToPath(geometry: CountryGeometry) {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons.flatMap((polygon) => polygon.map(ringToPath)).join(" ");
}

export default function InteractiveAfricaMap() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const pathData = useMemo(() => countries.map((country) => ({ country, d: countryToPath(country.geometry) })), []);
  const selectedCountry = countries.find((country) => country.properties.adm0A3 === selectedCode) ?? null;

  function activate(country: Country) {
    setSelectedCode(country.properties.adm0A3);
    setActiveCountry(country);
  }

  return (
    <div className="interactive-africa-map">
      <div className={`africa-map-tooltip${activeCountry ? " is-visible" : ""}`} role="tooltip" aria-live="polite">
        {activeCountry?.properties.name ?? ""}
      </div>
      <svg className="africa-map" viewBox="40 5 430 380" role="group" aria-labelledby="africa-map-title africa-map-description">
        <title id="africa-map-title">Interactive map of African countries</title>
        <desc id="africa-map-description">Choose a country to select it. Country boundaries are from Natural Earth 1:50m Admin 0 country data.</desc>
        {pathData.map(({ country, d }) => {
          const { name, adm0A3 } = country.properties;
          const selected = selectedCode === adm0A3;
          const active = activeCountry?.properties.adm0A3 === adm0A3;
          return (
            <path
              key={adm0A3}
              className={`africa-country${active ? " is-active" : ""}${selected ? " is-selected" : ""}`}
              d={d}
              fill={colorForCountry(adm0A3)}
              role="button"
              tabIndex={0}
              aria-label={`${name}, Natural Earth country identifier ${adm0A3}`}
              aria-pressed={selected}
              onPointerEnter={(event) => { if (event.pointerType !== "touch") setActiveCountry(country); }}
              onPointerLeave={(event) => { if (event.pointerType !== "touch") setActiveCountry(null); }}
              onFocus={() => setActiveCountry(country)}
              onBlur={() => setActiveCountry(null)}
              onClick={() => activate(country)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  activate(country);
                }
              }}
            />
          );
        })}
      </svg>
      <div className="map-selection" aria-live="polite">
        <span>{selectedCountry ? "Selected country" : "Explore the map"}</span>
        <strong>{selectedCountry ? selectedCountry.properties.name : "Tap or click a country"}</strong>
      </div>
    </div>
  );
}
