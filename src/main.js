import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faBuilding, faCog, faHandshake, faMagic, faSignOutAlt, faSpinner, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBuilding, faHandshake, faMagic, faBell, faCog, faSpinner, faSignOutAlt, faSearch);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
