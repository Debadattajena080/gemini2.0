import React, { useState, useEffect } from "react";

function GeolocationComponent() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [placeName, setPlaceName] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    const reverseGeocode = async () => {
      if (latitude && longitude) {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBJ2_fCqm9GpzD-2Hkzj95QwW4gawMui7o`
          );
          const data = await response.json();
          if (data.status === "OK") {
            setPlaceName(data.results[5].formatted_address);
          } else {
            setError("Reverse geocoding failed");
          }
        } catch (error) {
          setError("Error fetching data");
        }
      }
    };

    reverseGeocode();
  }, [latitude, longitude]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {latitude && longitude && (
        <p>
          {placeName && (
            <p className="flex items-center font-semibold">
              <span className=" text-xl mr-1">•</span>{" "}
              <span className="text-xs">{placeName}</span>
            </p>
          )}
        </p>
      )}
    </div>
  );
}

export default GeolocationComponent;
