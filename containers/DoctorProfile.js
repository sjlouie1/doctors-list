import React, { Component } from "react";
import SimilarDoctors from "./SimilarDoctors";

class DoctorProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {<img src={this.props.selectedDoctor.profile.image_url} />}
        <br />
        {this.props.selectedDoctor.profile.first_name}{" "}
        {this.props.selectedDoctor.profile.last_name}{" "}
        {this.props.selectedDoctor.profile.title}
        <br />
        Specialties:
        {this.props.selectedDoctor.specialties.map((specialty, i) => {
          return (
            <div key={i}>
              <span>{specialty.name}</span>
              <br />
            </div>
          );
        })}
        <br/>
        <br/>
        Doctors with similar specialties:
        <SimilarDoctors doctors={this.props.doctors} selectedDoctor={this.props.selectedDoctor}/>
        <br />
        <button onClick={this.props.homePage}>back to list</button>
      </div>
    );
  }
}

export default DoctorProfile;
