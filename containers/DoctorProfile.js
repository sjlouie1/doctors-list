import React, { Component } from "react";
import SimilarDoctors from "./SimilarDoctors";

class DoctorProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleText = {
      fontWeight: 'bold'
    };
    const backButton = {
      backgroundColor: '#e91e63',
      color: 'white',
      border: '2px solid #e91e63',
      borderRadius: '5px',
      padding: '10px'

    };
    return (
      <div>
        {<img src={this.props.selectedDoctor.profile.image_url} />}
        <br />
        <div style={titleText}>
        {this.props.selectedDoctor.profile.first_name}{" "}
        {this.props.selectedDoctor.profile.last_name}{" "}
        {this.props.selectedDoctor.profile.title}
        </div>
        <br />
        
        Specialties:
        {this.props.selectedDoctor.specialties.map((specialty, i) => {
          return (
            <div key={i}>
              <span style={titleText}>{specialty.name}</span>
              <br />
            </div>
          );
        })}
        <br/>
        <br/>
        Doctors with similar specialties:
        <SimilarDoctors doctors={this.props.doctors} selectedDoctor={this.props.selectedDoctor}/>
        <br />
        <button style={backButton} onClick={this.props.homePage}>BACK TO LIST</button>
      </div>
    );
  }
}

export default DoctorProfile;
