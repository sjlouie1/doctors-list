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
      open: false,
      doctors: [],
      doctor: {},
      isLoading: false
    };
  }

  onOpenModal = index => {
    const selectedDoctor = this.state.doctors[index];
    this.setState(
      {
        doctor: selectedDoctor,
        open: true
      },
      () => console.log(this.state.open, " STATE ON OPEN")
    );
  };

  onCloseModal = () => {
    this.setState({ open: false }, () => console.log(this.state.open, "STATE ON CLOSE"));
  };

  homePage = () => {
    this.setState({ view: "homepage" });
  };

  componentDidMount() {
    console.log("hello");
    this.setState({ isLoading: true });
    fetch(resource_url)
      .then(data => data.json())
      .then(data => {
        const filtered = data.data.filter(
          doc =>
            !doc.profile.image_url.includes("general_doctor_male") &&
            !doc.profile.image_url.includes("general_doctor_female")
        );
        this.setState({ doctors: filtered, isLoading: false }, () =>
          console.log(filtered)
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.doctor)
    return (
      <div>
        <div className="loader">
          <BeatLoader
            sizeUnit={"px"}
            size={50}
            color={"#123abc"}
            loading={this.state.isLoading}
          />
          {/* only renders Loading component if isLoading is true */}
          {!this.state.isLoading && this.state.doctors.length > 0 && (
            <div className="main">
              {/*className main will only load if isLoading is false */}
              <Menu />
              <DoctorsList
                doctors={this.state.doctors}
                onClick={this.onOpenModal}
                // open={this.state.open}
                onClose={this.onCloseModal}
                // selectedDoctor={this.state.doctor}
              />
            </div>
          )}
          {this.state.open && <DoctorProfile
                  open={this.state.open}
                  onClose={this.onCloseModal}
                  doctors={this.state.doctors}
                  selectedDoctor={this.state.doctor}
                  // homePage={this.homePage}
                />}
        </div>

        {/* ) */}
      </div>
    );
  }
}
