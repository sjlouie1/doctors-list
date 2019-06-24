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
      show: false,
      doctors: [],
      doctor: {},
      isLoading: false
    };
  }

  showModal = index => {
    const selectedDoctor = this.state.doctors[index];
    this.setState({
      doctor: selectedDoctor,
      show: true
    });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // selectDoctor = index => {
  //   const selectedDoctor = this.state.doctors[index];
  //   this.setState({
  //     doctor: selectedDoctor,
  //     view: "doctorDetail"
  //   });
  // };

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
        <div className="loader">
          <BeatLoader
            sizeUnit={"px"}
            size={50}
            color={"#123abc"}
            loading={this.state.isLoading}
          />
          {/* only renders Loading component if isLoading is true */}
          {!this.state.isLoading && (
            <div className="main">
              {/*className main will only load if isLoading is false */}
              <Menu />
              <DoctorsList
                doctors={this.state.doctors}
                selectDoctor={this.showModal}
              />
            </div>
          )}
        </div>
        {/* <Modal show={this.state.show} handleClose={this.hideModal}> */}
        <DoctorProfile
          show={this.state.show}
          handleClose={this.hideModal}
          doctors={this.state.doctors}
          selectedDoctor={this.state.doctor}
          homePage={this.homePage}
          show={this.state.show}
        />
        {/* </Modal> */}

        {/* ) */}
      </div>
    );
  }
}
