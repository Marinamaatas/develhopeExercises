import React, { useState, useEffect } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    function handleLocation(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      setLoading(false);
    }

    function handleError(error) {
      setError(error.message); 
      setLoading(false);
    }

    if (!navigator.geolocation) {
      setError("Geolocation is not available");
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(handleLocation, handleError);
    }

    return () => {
      setLocation(null);
      setLoading(true);
      setError(null);
    };
  }, []); 

  return { location, loading, error };
}
