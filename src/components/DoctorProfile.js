import React, { Component } from "react";
import SimilarDoctors from "./SimilarDoctors";
import { css } from "styled-components";

import Modal from "react-responsive-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "react-simple-tooltip";

class DoctorProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          open={this.props.open}
          onClose={this.props.onClose}
          animationDuration={500}
          closeOnOverlayClick={true}
          closeIconSize={15}
          center
        >
          <div className="modal-info-container">
            <div className="selected-doc-container">
              <img
                src={this.props.selectedDoctor.profile.image_url}
                className="selected-doctor-photo"
              />

              <div className="selected-doc-des-container">
                <div className="selected-doc-des">
                  <div className="doc-profile-txt">
                    {this.props.selectedDoctor.profile.first_name}{" "}
                    {this.props.selectedDoctor.profile.last_name}{" "}
                    {this.props.selectedDoctor.profile.title}
                  </div>
                  <div className="doc-specialty">
                    {this.props.selectedDoctor.specialties.map(
                      (specialty, i) => {
                        return (
                          <div key={i}>
                            {/* <FontAwesomeIcon icon={"briefcase-medical"} />{" "} */}
                            <span className="sub-text"> {specialty.name} </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <br />
                  <Tooltip
                    content={this.props.selectedDoctor.profile.bio}
                    customCss={css`
                      white-space: nowrap;
                      display: flex;
                    `}
                  >
                    <div>
                      {" "}
                      <FontAwesomeIcon icon={"address-card"} /> <span>Bio</span>
                    </div>
                  </Tooltip>
                  {this.props.selectedDoctor.practices[0].website ? (
                    <div className="doc-website">
                      <FontAwesomeIcon icon={"window-restore"} />{" "}
                      <a href={this.props.selectedDoctor.practices[0].website}>
                        Website
                      </a>
                    </div>
                  ) : (
                    <div />
                  )}
                  <div className="patient-acceptance-status">
                  <FontAwesomeIcon icon={"plus-square"} /> 
                  {" "}
                    {this.props.selectedDoctor.practices[0].accepts_new_patients
                      ? "currently accepting new patients"
                      : "not accepting new patients"}
                  </div>
                  <div className="selected-doc-location">
                    <FontAwesomeIcon icon={"map-marker-alt"} />{" "}
                    {this.props.selectedDoctor.practices[0].name}
                    <br />
                    {
                      this.props.selectedDoctor.practices[0].visit_address
                        .street
                    }
                    <br />
                    {
                      this.props.selectedDoctor.practices[0].visit_address.city
                    },{" "}
                    {this.props.selectedDoctor.practices[0].visit_address.state}
                    <br />
                    {this.props.selectedDoctor.practices[0].visit_address.zip}
                  </div>
                </div>
              </div>
            </div>
            Doctors with similar specialties:
            <SimilarDoctors
              doctors={this.props.doctors}
              selectedDoctor={this.props.selectedDoctor}
            />
            <br />
          </div>
        </Modal>
      </div>
    );
  }
}

export default DoctorProfile;
