import React, { useEffect, useRef, useState } from "react";
import carto from '@carto/carto-vl'
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

carto.setDefaultAuth({
    username: 'ramiroaznar',
    apiKey: 'default_public'
})

const styles = {
    width: "100%",
    minHeight: 500
  };

const Map = ({ data }) => {

    console.log(data)
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

  useEffect(() => {
    console.log('useEffect',data)
    if (data && data.features) {
  
      const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: carto.basemaps.voyager,
          center: [-3, 40],
          zoom: 2
        });
        
        const source = new carto.source.GeoJSON(data);
    
        const viz = new carto.Viz();
  
        const layer = new carto.Layer('layer', source, viz);
        layer.addTo(map, 'watername_ocean');

        map.on("load", () => {
          setMap(map);
          map.resize();
        });
      };
      if (!map) initializeMap({ setMap, mapContainer });
    }

  }, [data]);


    return <div ref={el => (mapContainer.current = el)} style={styles} />;
  
    
};

export default Map;
