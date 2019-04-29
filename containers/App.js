import React, { Component } from "react";
import DoctorsList from "./DoctorsList";
import DoctorProfile from "./DoctorProfile";

const resource_url =
  "https://api.betterdoctor.com/2016-03-01/doctors?location=ca&user_location=37.773%2C-122.413&skip=0&limit=50&user_key=1540b0816889c1455a1ddb998fe7801f"
export default class App extends Component {
  constructor() {
		super();
		
    this.state = {
			view: "homepage",
			doctors: [],
			doctor: {}
    };
	}
	
	selectDoctor = (index) => {
		const selectedDoctor = this.state.doctors[index];
		this.setState({
			doctor: selectedDoctor,
			view: 'doctorDetail'
		})
	};

	homePage = () => {
		this.setState({view:"homepage"})
	}

  componentDidMount() {
    fetch(resource_url)
      .then(data => data.json())
      .then(data => {
        this.setState({ doctors: data.data });
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  render() {
		return (
			<div>
				{this.state.view === "homepage" ?
					<div>
							<DoctorsList doctors={this.state.doctors} selectDoctor={this.selectDoctor}/>
					</div>
					:
					<DoctorProfile doctors={this.state.doctors} selectedDoctor={this.state.doctor} homePage={this.homePage}/>
				}
			</div>
		)
  }
}
