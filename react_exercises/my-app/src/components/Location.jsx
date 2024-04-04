import React from "react";
import useCurrentLocation from "./useCurrentLocation";

export default function Location() {
  const { location, loading, error } = useCurrentLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!location) {
    return <div>No location data available.</div>;
  }

  return (
    <div>
      Latitude: {location.latitude}, Longitude: {location.longitude}
    </div>
  );
}
