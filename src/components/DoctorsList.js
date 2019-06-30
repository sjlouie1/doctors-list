import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DocListButton, DocListInput } from "./styles";

class DoctorsList extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   input: '',
    //   type: 'Name',
    //   gender: 'Both'
    // };
  }

  render() {
    console.log(this.props.doctors)
    const searchTypes = ['Name', 'Specialty'],
      gender = ['Both', 'Male', 'Female'];
    return (
      <div id="doctors-list-container">
        <div className="input-container">
          <form onSubmit={this.props.handleSubmit}>
            <div className="inner-input-container">

              <input
                id="input-bar"
                name="input"
                type='text'
                value={this.props.search.input}
                onChange={this.props.handleInput}
                placeholder="Search..."
              />

              <select
                id="select-menu"
                name="type"
                onChange={this.props.handleInput}>
                {
                  searchTypes.map((type) =>
                    <option key={'option-' + type}>{type}</option>
                  )
                }
              </select>

              <div id="radio-container">
                {
                  gender.map(gender =>
                    <label
                      key={"radio-" + gender}
                      className="radio-labels">
                      <input
                        name="gender"
                        type="radio"
                        value={gender}
                        checked={this.props.search.gender === gender}
                        onChange={this.props.handleInput}
                        // disabled={this.props.search.type === 'Specialty'}
                      />
                      {gender}
                    </label>
                  )
                }
              </div>

              <button
                id="input-button"
                type="submit">
                Submit
              </button>

            </div>
          </form>
        </div>

        <div className="list-container">
          {
            this.props.search.input === "" &&
            this.props.completeList.map((doctor, i) => {
              return (
                <div
                  key={i}
                  className="doctor-card"
                  // onClick={() => this.props.selectDoctor(i)}
                  onClick={() => this.props.onClick(i)}
                >
                  <br/>
                  <div>
                    <img
                      className="doctor-photo"
                      src={doctor.profile.image_url}
                    />
                  </div>
                  <br/>
                  <div className="doc-description">
                    <p className="titleText">{` ${doctor.profile.first_name} ${
                      doctor.profile.last_name
                      } ${doctor.profile.title}`}</p>
                  </div>
                  <br/>
                  <div>
                    <FontAwesomeIcon icon={"briefcase-medical"}/>
                    {doctor.specialties.map((specialty, i) => {
                      return (
                        <div key={i} className="titleText">
                          <span>{specialty.name}</span>
                          <br/>
                        </div>
                      );
                    })}
                  </div>
                  <br/>
                </div>
              );
            })
          }
          {
            this.props.search.input !== "" && this.props.doctors.length > 0 &&
            this.props.doctors.map((doctor, i) => {
              return (
                <div
                  key={i}
                  className="doctor-card"
                  // onClick={() => this.props.selectDoctor(i)}
                  onClick={() => this.props.onClick(i)}
                >
                  <br/>
                  <div>
                    <img
                      className="doctor-photo"
                      src={doctor.profile.image_url}
                    />
                  </div>
                  <br/>
                  <div className="doc-description">
                    <p className="titleText">{` ${doctor.profile.first_name} ${
                      doctor.profile.last_name
                      } ${doctor.profile.title}`}</p>
                  </div>
                  <br/>
                  <div>
                    <FontAwesomeIcon icon={"briefcase-medical"}/>
                    {doctor.specialties.map((specialty, i) => {
                      return (
                        <div key={i} className="titleText">
                          <span>{specialty.name}</span>
                          <br/>
                        </div>
                      );
                    })}
                  </div>
                  <br/>
                </div>
              );
            })
          }
          {
            this.props.search.input !== "" && this.props.doctors.length === 0 &&
            <h1>
              No doctors matching the criteria of "{this.props.search.type}"
            </h1>
          }
        </div>
      </div>
    );
  }
}

export default DoctorsList;
