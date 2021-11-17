import { useEffect, useState } from "react";
import "ol/ol.css";
import olMap from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import olView from "ol/View";
import Overlay from "ol/Overlay";
import styles from "./mapview.module.css";
// import {fromLonLat} from 'ol/proj';
import * as olProj from "ol/proj";

let ServerUrl = process.env.REACT_APP_DESTINATION_URL;
let token = process.env.AUTHENTICATION_TOKEN;

const Map = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let view = new olView({
      center: [-180, 0],
      zoom: 0,
      projection: "EPSG:3857",
    });
    const map = new olMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map",
      view: view,
    });

    var myHeaders = new Headers();

    myHeaders.append("Authorization", token);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(ServerUrl + "/api/masterData/getCountries", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setCountries(json);
        json.map((obj) => {
          let location = [
            obj.country_coordinates_longitude,
            obj.country_coordinates_latitude,
          ];
          let coords = olProj.fromLonLat(location, "EPSG:3857");
          console.log(coords);
          let marker = new Overlay({
            position: coords,
            positioning: "center-center",
            element: document.getElementById("country_" + obj.country_id),
            stopEvent: false,
          });
          map.addOverlay(marker);
          return [];
        });
      });
  }, []);

  const onclickcountry = (e) => {
    window.location.href = `#/VideoView`;
    console.log(e.target.id);
  };

  return (
    <>
      <div id="map" class="map"></div>
      {countries.map((obj, i) => {
        return (
          <div
            key={i}
            id={"country_" + obj.country_id}
            className={styles.countrypointer}
            onClick={onclickcountry}
          ></div>
        );
      })}
    </>
  );
};

export default Map;
