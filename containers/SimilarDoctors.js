import React, { Component } from "react";

class SimilarDoctors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filteredDoctors = this.props.doctors.filter(doctor => {
      return (
        doctor.profile.last_name !==
          this.props.selectedDoctor.profile.last_name &&
        doctor.specialties[0].name ===
          this.props.selectedDoctor.specialties[0].name
      );
    });

    return (
      <div>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, i, collection) => (
            <div key={i}>
              <img src={doctor.profile.image_url} />
              {doctor.profile.first_name} {doctor.profile.last_name}{" "}
              {doctor.profile.title}
            </div>
          ))
        ) : (
          <div>none</div>
        )}
      </div>
    );
  }
}

export default SimilarDoctors;
