import { useEffect, useState } from "react";
import "ol/ol.css";
import olMap from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import olView from "ol/View";
import Overlay from "ol/Overlay";
import styles from "./mapview.module.css";
import * as $ from "jquery";
import * as olProj from "ol/proj";

import { connect } from "react-redux";

let ServerUrl = process.env.REACT_APP_DESTINATION_URL;
// let token = process.env.AUTHENTICATION_TOKEN;
let measureTooltipElement;
let measureTooltip;

const Map = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let view = new olView({
      center: props.center,
      zoom: props.zoom,
      projection: "EPSG:3857",
    });
    let map = new olMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map",
      view: view,
    });

    var myHeaders = new Headers();

    myHeaders.append("Authorization", "Bearer " + props.accesstoken);
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
          let marker = new Overlay({
            position: coords,
            positioning: "center-center",
            element: document.getElementById(obj.country_id),
            stopEvent: false,
          });
          map.addOverlay(marker);
          return [];
        });
        measureTooltipElement = document.createElement("div");
        measureTooltipElement.className = "ol-tooltip ol-tooltip-measure";
        measureTooltip = new Overlay({
          element: measureTooltipElement,
          offset: [0, -15],
          positioning: "bottom-center",
          stopEvent: false,
          insertFirst: false,
        });

        map.addOverlay(measureTooltip);
      });
  }, []);

  const onclickcountry = (e) => {
    let selectedCountry = e.target.id;
    let plantList;

    var myHeaders = new Headers();
    myHeaders.append("Authorization","Bearer " + props.accesstoken);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(ServerUrl + "/api/masterData/getPlants", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        plantList = json.filter(
          (obj) => parseInt(obj.country_id) === parseInt(selectedCountry)
        );

        console.log(plantList);
        let CountryCoord = countries.filter(
          (obj) => parseInt(obj.country_id) === parseInt(selectedCountry)
        )[0];
        let location = [
          CountryCoord.country_coordinates_longitude,
          CountryCoord.country_coordinates_latitude,
        ];
        let coords = olProj.fromLonLat(location, "EPSG:3857");
        measureTooltipElement.className = styles.measureTooltipClass;
        measureTooltipElement.innerHTML = null;
        measureTooltipElement.innerHTML +=
          "<div>" +
          "<div id=PopupData>" +
          "<div id=plantHeader>Plants Available:</div> " +
          "<div id=spacer></div>" +
          "<span id=closebar>x</span>" +
          "</div>" +
          "<table id=tablePlant>" +
          "<tr>" +
          "<th>S.No</th>" +
          "<th>Plant Name</th>" +
          "<th>View Link</th>" +
          "</tr>" +
          plantList.map((obj, i) => {
            return (
              "<tr>" +
              "<td>" +
              (i + 1) +
              "</td>" +
              "<td>" +
              obj.plant_name +
              "</td>" +
              "<td id=viewPlantLink>View</td>" +
              "</tr>"
            );
          }) +
          "</table>" +
          "</div>";

        document.getElementById("plantHeader").className = styles.plantHeader;
        document.getElementById("tablePlant").className = styles.tablePlant;
        document.getElementById("PopupData").className = styles.PopupData;
        document.getElementById("spacer").className = styles.spacer;
        document.getElementById("closebar").className = styles.closebar;
        $("#tablePlant").on("click", "tr", (e) => {
          window.location.href = `#/VideoView`;
        })
        document.getElementById("viewPlantLink").onclick = () => {
          window.location.href = `#/VideoView`;
        };

        measureTooltip.setPosition(coords);
        document.getElementById("closebar").onclick = () => {
          measureTooltip.setPosition(undefined);
        };
      });
  };

  return (
    <>
      {/* <div id="map" class="map"></div> */}
      <div id="map" className={styles.mapol}></div>
      {countries.map((obj, i) => {
        return (
          <div
            key={i}
            id={obj.country_id}
            className={styles.countrypointer}
            onClick={onclickcountry}
          ></div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return { ...state.userinfo };
};

export default connect(mapStateToProps)(Map)
