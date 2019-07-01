import React from "react";
import Modal from "react-responsive-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimilarDoctors from "./SimilarDoctors";

const DoctorProfile = props => {

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        animationDuration={500}
        closeOnOverlayClick={true}
        closeIconSize={15}
        center
      >
        <div className="modal-info-container">
          <div className="selected-doc-container">
            <img
              src={props.selectedDoctor.profile.image_url}
              className="selected-doctor-photo"
              alt={`${props.selectedDoctor.profile.first_name} ${props.selectedDoctor.profile.last_name}`}
            />

            <div className="selected-doc-des-container">
              <div className="selected-doc-des">
                <div className="doc-profile-txt">
                  {`${props.selectedDoctor.profile.first_name} ${props.selectedDoctor.profile.last_name} ${props.selectedDoctor.profile.title}`}
                </div>
                <div className="doc-specialty">
                  {props.selectedDoctor.specialties.map(
                    (specialty, i) => {
                      return (
                        <div key={i}>
                          <span className="sub-text">{specialty.name}</span>
                        </div>
                      );
                    }
                  )}
                </div>
                <br/>

                <div className="doc-bio doc-details">
                  <div className="profile-icons">
                    <FontAwesomeIcon
                      icon={"address-card"}/>
                  </div>
                  <a data-tip data-for="profile-bio"
                     data-event="click focus"
                     className="doc-details-txt profile-tooltip">Bio</a>
                </div>

                {props.selectedDoctor.practices[0].website ? (
                  <div className="doc-website doc-details">
                    <div className="profile-icons">
                      <FontAwesomeIcon
                        icon={"window-restore"}/>
                    </div>
                    <a
                      href={props.selectedDoctor.practices[0].website}
                      target="_blank"
                    >
                      <span className="doc-details-txt">Website</span>
                    </a>
                  </div>
                ) : (
                  <div/>
                )}
                <div
                  className="patient-acceptance-status doc-details"
                >
                  <div className="profile-icons">
                    <FontAwesomeIcon
                      icon={"plus-square"}/>
                  </div>
                  <span className="doc-details-txt">
                      {props.selectedDoctor.practices[0]
                        .accepts_new_patients
                        ? "Currently accepting new patients"
                        : "Not accepting new patients"}
                    </span>
                </div>
                  <div className="doc-details">
                    <div className="profile-icons">
                      <FontAwesomeIcon
                        icon={"address-card"}/>
                    </div>
                    <a data-tip data-for="profile-insurance"
                       data-event="click focus"
                       className="doc-details-txt profile-tooltip">Accepted Insurance</a>
                  </div>
                <div
                  className="selected-doc-location doc-details"
                >
                  <div className="profile-icons">
                    <FontAwesomeIcon
                      icon={"map-marker-alt"}/>
                  </div>
                  <div className="location-txt doc-details-txt">
                    {props.selectedDoctor.practices[0].name}
                    <br/>
                    {
                      props.selectedDoctor.practices[0].visit_address
                        .street
                    }
                    <br/>
                    {
                      props.selectedDoctor.practices[0].visit_address
                        .city
                    }
                    ,
                    {
                      props.selectedDoctor.practices[0].visit_address
                        .state
                    }
                    <br/>
                    {props.selectedDoctor.practices[0].visit_address.zip}
                  </div>
                </div>
                <div className="doc-number doc-details">
                  <div className="profile-icons">
                    <FontAwesomeIcon
                      icon={"phone-alt"}/>
                  </div>
                  <span className="location-txt doc-details-txt">
                    (
                    {props.selectedDoctor.practices[0].phones[0].number.slice(
                      0,
                      3
                    )}
                    )
                    {props.selectedDoctor.practices[0].phones[0].number.slice(
                      3,
                      6
                    )}
                    -
                    {props.selectedDoctor.practices[0].phones[0].number.slice(
                      6,
                      10
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span>Doctors with similar specialties: </span>
          <SimilarDoctors
            doctors={props.doctors}
            selectedDoctor={props.selectedDoctor}
          />
          <br/>
        </div>
      </Modal>
    </div>
  );
};

export default DoctorProfile;
