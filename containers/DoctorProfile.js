import React, { Component } from "react";
import SimilarDoctors from "./SimilarDoctors";
import '../dist/style.css';

class DoctorProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
        {<img src={this.props.selectedDoctor.profile.image_url} />}
        <br />
        <div className="titleText">
        {this.props.selectedDoctor.profile.first_name}{" "}
        {this.props.selectedDoctor.profile.last_name}{" "}
        {this.props.selectedDoctor.profile.title}
        </div>
        <br />
        
        Specialties:
        {this.props.selectedDoctor.specialties.map((specialty, i) => {
          return (
            <div key={i}>
              <span className="titleText">{specialty.name}</span>
              <br />
            </div>
          );
        })}
        <br/>
        <br/>
        Doctors with similar specialties:
        <SimilarDoctors doctors={this.props.doctors} selectedDoctor={this.props.selectedDoctor}/>
        <br />
        <button className="backButton" onClick={this.props.homePage}>BACK TO LIST</button>
      </div>
    );
  }
}

export default DoctorProfile;
