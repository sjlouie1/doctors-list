import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcaseMedical,
  faAddressCard,
  faWindowRestore,
  faMapMarkerAlt,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
import App from "./components/App";
import styles from "./style.css";
library.add(faBriefcaseMedical, faAddressCard, faWindowRestore, faMapMarkerAlt, faPlusSquare);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

// main app
render(App);

// ReactDOM.render(<App />, document.getElementById('app'));

// webpack Hot Module Replacement API
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept("./components/App.js", () => {
    // if you are using harmony modules ({modules:false})
    const NextMain = require("./components/App").default;
    // in all other cases - re-require App manually
    render(NextMain);
  });
  // UNCOMMENT BOTTOM TO CLEAR OUT CHROME DEV TOOLS CONSOLE UPON HOT RELOAD
  // module.hot.addStatusHandler(status => {
  //   if (status === 'prepare') console.clear()
  // })
}
