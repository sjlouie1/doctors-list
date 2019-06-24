import React, { Component } from "react";
import "../dist/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DoctorsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-container">
        {this.props.doctors.map((doctor, i) => {
          if (
            !doctor.profile.image_url.includes("general_doctor_male") &&
            !doctor.profile.image_url.includes("general_doctor_female")
          ) {
            return (
              <div
                key={i}
                className="doctor-card"
                onClick={() => this.props.selectDoctor(i)}
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
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default DoctorsList;
