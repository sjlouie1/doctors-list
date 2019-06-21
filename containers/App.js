import React, { Component } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import DoctorsList from "./DoctorsList";
import DoctorProfile from "./DoctorProfile";
import Menu from "./Menu";

const resource_url =
  "https://api.betterdoctor.com/2016-03-01/doctors?location=ca&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=1540b0816889c1455a1ddb998fe7801f";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      view: "homepage",
      doctors: [],
      doctor: {},
      isLoading: false
    };
  }

  selectDoctor = index => {
    const selectedDoctor = this.state.doctors[index];
    this.setState({
      doctor: selectedDoctor,
      view: "doctorDetail"
    });
  };

  homePage = () => {
    this.setState({ view: "homepage" });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(resource_url)
      .then(data => data.json())
      .then(data => {
        this.setState({ doctors: data.data, isLoading: false });
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.view === "homepage" ? (
          <div>
            <BeatLoader
              // css={override}
              sizeUnit={"px"}
              size={50}
              color={"#123abc"}
              loading={this.state.isLoading}
            />
            {/* only renders Loading component if isLoading is true */}
            <div className="main">
              <Menu />
              <DoctorsList
                doctors={this.state.doctors}
                selectDoctor={this.selectDoctor}
              />
            </div>
          </div>
        ) : (
          <DoctorProfile
            doctors={this.state.doctors}
            selectedDoctor={this.state.doctor}
            homePage={this.homePage}
          />
        )}
      </div>
    );
  }
}
