import React from "react";

const SimilarDoctors = props => {

  const filteredDoctors = props.doctors.filter(doctor => {
    if (doctor.specialties.length > 0) {
      return (
        doctor.profile.last_name !==
        props.selectedDoctor.profile.last_name &&
        doctor.specialties[0].name ===
        props.selectedDoctor.specialties[0].name
      );
    }
  });

  return (
    <div className="similar-docs-container">
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map((doctor, i) =>
          !doctor.profile.image_url.includes("general_doctor_male") &&
          !doctor.profile.image_url.includes("general_doctor_female") ? (
            <div key={'similar-docs-' + i} className="similar-docs">
              {doctor.profile.first_name} {doctor.profile.last_name}{" "}
              {doctor.profile.title}
            </div>
          ) : (
            <div/>
          )
        )
      ) : (
        <div>None</div>
      )}
    </div>
  );
};

export default SimilarDoctors;
