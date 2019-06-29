import React, { Component } from "react";
import SimilarDoctors from "./SimilarDoctors";
import Modal from "react-responsive-modal";

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
                className="doctor-photo"
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
                            <span className="titleText">{specialty.name}</span>
                          </div>
                        );
                      }
                    )}
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
