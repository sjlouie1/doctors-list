import React, { Component } from "react";
import "../dist/style.css";
import DoctorProfile from "./DoctorProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DoctorsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.doctors)
    return (
      <div className="list-container">
        {this.props.doctors.map((doctor, i) => {
            return (
              <div
                key={i}
                className="doctor-card"
                // onClick={() => this.props.selectDoctor(i)}
                 onClick={() => this.props.onClick(i)}
              >
                <br />
                <div>
                  <img
                    className="doctor-photo"
                    src={doctor.profile.image_url}
                  />
                </div>
                <br />
                <div className="doc-description">
                  <p className="titleText">{` ${doctor.profile.first_name} ${
                    doctor.profile.last_name
                  } ${doctor.profile.title}`}</p>
                </div>
                <br />
                <div>
                  <FontAwesomeIcon icon={"briefcase-medical"} />
                  {doctor.specialties.map((specialty, i) => {
                    return (
                      <div key={i} className="titleText">
                        <span>{specialty.name}</span>
                        <br />
                      </div>
                    );
                  })}
                </div>
                <br />
                {/* <DoctorProfile
                  open={this.props.open}
                  onClose={this.props.onClose}
                  doctors={this.props.doctors}
                  selectedDoctor={this.props.selectedDoctor}
                  // homePage={this.homePage}
                /> */}
              </div>
            );
        })}
      </div>
    );
  }
}

export default DoctorsList;
