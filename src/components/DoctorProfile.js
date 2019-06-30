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
                  <div>
                    <Tooltip
                      content={this.props.selectedDoctor.profile.bio}
                      customCss={css`
                        white-space: nowrap;
                        display: flex;
                      `}
                    >
                      <div className="doc-bio" className="doc-details">
                        {" "}
                        <FontAwesomeIcon icon={"address-card"} />{" "}
                        <span className="doc-details-txt">Bio</span>
                      </div>
                    </Tooltip>
                  </div>

                  {this.props.selectedDoctor.practices[0].website ? (
                    <div className="doc-website" className="doc-details">
                      <FontAwesomeIcon icon={"window-restore"} />{" "}
                      <a
                        href={this.props.selectedDoctor.practices[0].website}
                        target="_blank"
                      >
                        <span className="doc-details-txt">Website</span>
                      </a>
                    </div>
                  ) : (
                    <div />
                  )}
                  <div
                    className="patient-acceptance-status"
                    className="doc-details"
                  >
                    <FontAwesomeIcon icon={"plus-square"} />{" "}
                    <span className="doc-details-txt">
                      {this.props.selectedDoctor.practices[0]
                        .accepts_new_patients
                        ? "Currently accepting new patients"
                        : "Not accepting new patients"}
                    </span>
                  </div>
                  <div className="insurances">
                    <Tooltip
                      content={this.props.selectedDoctor.insurances.map(
                        plan => {
                          return plan.insurance_plan.name;
                        }
                      )}
                      customCss={css`
                        white-space: nowrap;
                        display: flex;
                      `}
                    >
                      <div className="doc-details">
                        {" "}
                        <FontAwesomeIcon icon={"address-card"} />{" "}
                        <span>Accepted Insurance</span>
                      </div>
                    </Tooltip>
                  </div>
                  <div
                    className="selected-doc-location"
                    className="doc-details"
                  >
                    <FontAwesomeIcon icon={"map-marker-alt"} />{" "}
                    <div className="location-txt" className="doc-details-txt">
                      {this.props.selectedDoctor.practices[0].name}
                      <br />
                      {
                        this.props.selectedDoctor.practices[0].visit_address
                          .street
                      }
                      <br />
                      {
                        this.props.selectedDoctor.practices[0].visit_address
                          .city
                      }
                      ,{" "}
                      {
                        this.props.selectedDoctor.practices[0].visit_address
                          .state
                      }
                      <br />
                      {this.props.selectedDoctor.practices[0].visit_address.zip}
                    </div>
                  </div>
                  <div className="doc-number">
                    <FontAwesomeIcon icon={"phone-alt"} /> (
                    {this.props.selectedDoctor.practices[0].phones[0].number.slice(
                      0,
                      3
                    )}
                    )
                    {this.props.selectedDoctor.practices[0].phones[0].number.slice(
                      3,
                      6
                    )}
                    -
                    {this.props.selectedDoctor.practices[0].phones[0].number.slice(
                      6,
                      10
                    )}
                  </div>
                </div>
              </div>
            </div>
            <span>Doctors with similar specialties: </span>
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
