const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: "AIzaSyAll0T-vTbug0eW_SWH20KtYiCIqXYFcrI",
  authDomain: "emedicalapp-ff3be.firebaseapp.com",
  projectId: "emedicalapp-ff3be",
  storageBucket: "emedicalapp-ff3be.appspot.com",
  messagingSenderId: "837318081990",
  appId: "1:837318081990:web:96ee712d1694f46f9b46c7",
  measurementId: "G-NPDTE0STVT",
};

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
});

module.exports = admin;
