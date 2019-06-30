import React, { Component } from "react";

class SimilarDoctors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filteredDoctors = this.props.doctors.filter(doctor => {
      if (doctor.specialties.length > 0) {
        return (
          doctor.profile.last_name !==
            this.props.selectedDoctor.profile.last_name &&
          doctor.specialties[0].name ===
            this.props.selectedDoctor.specialties[0].name
        );
      }
    });

    return (
      <div className="similar-docs-container">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, i, collection) =>
            !doctor.profile.image_url.includes("general_doctor_male") &&
            !doctor.profile.image_url.includes("general_doctor_female") ? (
              <div key={i}>
                {/* <img src={doctor.profile.image_url} className="similar-doc-img" />
                <br /> */}
                
                {doctor.profile.first_name} {doctor.profile.last_name}{" "}
                {doctor.profile.title}  
               
                
              </div>
            ) : (
              <div />
            )
          )
        ) : (
          <div>none</div>
        )}
      </div>
    );
  }
}

export default SimilarDoctors;
