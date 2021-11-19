import React, { Component } from "react";
import styles from "./Filters.module.css";
import c3 from "c3";
import "c3/c3.css";
import { connect } from "react-redux";

let ServerUrl = process.env.REACT_APP_DESTINATION_URL;
// let token = process.env.AUTHENTICATION_TOKEN;

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

    myHeaders.append("Authorization",  "Bearer " + this.props.accesstoken);
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

  onApply = () =>{
    window.location.href = `#/VideoView`;
  }

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
          <label>Select Oil Field</label>
          <select id="plantfilter" className={styles.dropdown}>
            {this.state.plants.map((obj, i) => (
              <option key={i} value={obj.plant_id + "_" + obj.country_id}>
                {obj.plant_name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div className={styles.parentDiv}>
        <div className={styles.applyButton} onClick={this.onApply}>Apply</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state.userinfo };
};

export default connect(mapStateToProps)(Filters)

