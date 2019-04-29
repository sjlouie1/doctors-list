import React, { Component } from "react";

class DoctorsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const containerStyle = {
      height: "auto",
      width: "100vw",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    };
    const doctorProfile = {
      display: "inline-flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "7em",
      height: "auto",
      margin: "10px 20px"
    };
    const titleText = {
      fontWeight: 'bold'
    };
    return (
      <div style={containerStyle}>
        {this.props.doctors.map((doctor, i) => {
          return (
            <div key={i} style={doctorProfile}>
              <br />
              <img
                src={doctor.profile.image_url}
                onClick={() => this.props.selectDoctor(i)}
              />
              <br />
              <div>
              Doctor name:
              <p style={titleText}>{` ${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.profile.title}`}</p>
              </div>
              <div>
                Specialty:
                {doctor.specialties.map((specialty, i) => {
                  return (
                    <div key={i} style={titleText}>
                      <span>{specialty.name}</span>
                      <br />
                    </div>
                  );
                })}
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DoctorsList;
