import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorsList = props => {
  console.log(props.doctors);
  const searchTypes = ["Name", "Specialty"],
    gender = ["Both", "Male", "Female"];
  return (
    <div id="doctors-list-container">
      <div className="input-container">
        <form>
          <div className="inner-input-container">
            <input
              id="input-bar"
              name="input"
              type="text"
              value={props.search.input}
              onChange={props.handleInput}
              placeholder="Search..."
            />

            <select id="select-menu" name="type" onChange={props.handleInput}>
              {searchTypes.map(type => (
                <option key={"option-" + type}>{type}</option>
              ))}
            </select>

            <div id="radio-container">
              {gender.map(gender => (
                <label key={"radio-" + gender} className="radio-labels">
                  <input
                    name="gender"
                    type="radio"
                    value={gender}
                    checked={props.search.gender === gender}
                    onChange={props.handleInput}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>

      <div className="list-container">
        {props.search.input === "" &&
          props.completeList.map((doctor, i) => {
            return (
              <div
                key={i}
                className="doctor-card"
                onClick={() => props.onClick(i)}
              >
                <br />
                <div>
                  <img
                    className="doctor-photo"
                    src={doctor.profile.image_url}
                    alt={`${doctor.profile.first_name} ${
                      doctor.profile.last_name
                    }`}
                  />
                </div>
                <br />
                <div className="doc-description-container">
                  <div className="doc-description">
                    <p className="titleText">{` ${doctor.profile.first_name} ${
                      doctor.profile.last_name
                    } ${doctor.profile.title}`}</p>
                  </div>
                  <div>
                    {doctor.specialties.map((specialty, i) => {
                      return (
                        <div
                          key={"doc-specialties-" + i}
                          className="doc-list-specialty"
                        >
                          <span>{specialty.name}</span>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        {props.search.input !== "" &&
          props.doctors.length > 0 &&
          props.doctors.map((doctor, i) => {
            return (
              <div
                key={i}
                className="doctor-card"
                onClick={() => props.onClick(i)}
              >
                <br />
                <div>
                  <img
                    className="doctor-photo"
                    src={doctor.profile.image_url}
                    alt={`${doctor.profile.first_name} ${
                      doctor.profile.last_name
                    }`}
                  />
                </div>
                <div>
                  <div className="doc-name">
                    <p className="titleText">{` ${doctor.profile.first_name} ${
                      doctor.profile.last_name
                    } ${doctor.profile.title}`}</p>
                  </div>
                  <br />
                  <div>
                    {/* <FontAwesomeIcon icon={"briefcase-medical"}/> */}
                    {doctor.specialties.map((specialty, i) => {
                      return (
                        <div key={"doc-specialty-" + i} >
                          <span>{specialty.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <br />
              </div>
            );
          })}
        {props.search.input !== "" && props.doctors.length === 0 && (
          <h1>No doctors matching the current criteria...</h1>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
