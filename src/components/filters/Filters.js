import React, { Component } from "react";
import styles from "./Filters.module.css";

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
        <div className={styles.filter}>
          <label>Country: </label>
          <select
            id="countryfilter"
            className={styles.dropdown}
            onChange={this.onClickCountry}
          >
            {/* {this.state.countries.map((obj, i) => (
              <option key={i} value={obj.country_id}>
                {obj.country_name}
              </option>
            ))} */}
            <option>option1</option>
          </select>
        </div>
        <div className={styles.filter}>
          <label>Plant: </label>
          <select id="plantfilter" className={styles.dropdown}>
            {/* {this.state.plants.map((obj, i) => (
              <option key={i} value={obj.plant_id + "_" + obj.country_id}>
                {obj.plant_name}
              </option>
            ))} */}
            <option>option1</option>
          </select>
        </div>
        <br />
        <div className={styles.filteredlist}>
          <label>Assets: </label>
          <div>Plant 1</div>
          <div>Plant 2</div>
          <div>Plant 3</div>
        </div>
      </div>
    );
  }
}

export default Filters;
