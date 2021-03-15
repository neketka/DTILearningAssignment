import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDy7LO6-Ha-gogQ22AaiGynHXpfdb2WkJw",
  authDomain: "vue-example-project-d14fd.firebaseapp.com",
  projectId: "vue-example-project-d14fd",
  storageBucket: "vue-example-project-d14fd.appspot.com",
  messagingSenderId: "681396363241",
  appId: "1:681396363241:web:3ddb9648f34c1bbb6b7578",
  measurementId: "G-XQW78DKD7E",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app: any;

const init = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit("setUser", user);
  } else {
    store.commit("setUser", null);
  }

  init();
});
