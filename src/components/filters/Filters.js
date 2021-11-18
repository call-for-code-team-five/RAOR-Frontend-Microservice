import React, { Component } from "react";
import styles from "./Filters.module.css";
import c3 from "c3";
import "c3/c3.css";

let ServerUrl = process.env.REACT_APP_DESTINATION_URL;
let token = process.env.AUTHENTICATION_TOKEN;

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      plants: [],
      plantList: [],
    };
  }
  componentDidMount = () => {
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
        this.setState({
          countries: json,
        });
      });

    fetch(ServerUrl + "/api/masterData/getPlants", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          plants: json,
          plantList: json,
        });
      });

    c3.generate({
      bindto: "#BulkStockAlerts",
      size: {
        height: 200,
        width: 300,
      },
      data: {
        columns: [
          ["Abu Dabi", 1],
          ["Saudi Arabia", 6],
          ["Kuwait", 4],
          ["Iran", 4],
          ["Iraq", 7],
        ],
        type: "donut",

        // labels: true,
      },
      color: {
        pattern: ["#ede88c", "#93F0E6", "#9C82D4", "#8cc1ed", "#FF9A91"],
      },
      donut: {
        width: 20,
        title: "Plants (%)",
      },
      legend: { show: false },
    });
  };

  onClickCountry = (e) => {
    let selectedCountry = e.target.value;

    let PlantList = this.state.plantList.filter(
      (obj) => parseInt(obj.country_id) === parseInt(selectedCountry)
    );

    this.setState({
      plants: PlantList,
    });
  };

  render() {
    return (
      <div className={styles.filterspane}>
        <div className={styles.filtersHeading}>Filters</div>
        <div className={styles.filter}>
          <label>Select Country</label>
          <select
            id="countryfilter"
            className={styles.dropdown}
            onChange={this.onClickCountry}
          >
            {this.state.countries.map((obj, i) => (
              <option key={i} value={obj.country_id}>
                {obj.country_name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filter}>
          <label>Select Plant</label>
          <select id="plantfilter" className={styles.dropdown}>
            {this.state.plants.map((obj, i) => (
              <option key={i} value={obj.plant_id + "_" + obj.country_id}>
                {obj.plant_name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div id="BulkStockAlerts"></div>
      </div>
    );
  }
}

export default Filters;
