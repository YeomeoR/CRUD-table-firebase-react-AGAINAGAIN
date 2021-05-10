import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'el-crud-eb3f4.firebaseapp.com',
  databaseURL:
    'https://el-crud-eb3f4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'el-crud-eb3f4',
  storageBucket: 'el-crud-eb3f4.appspot.com',
  messagingSenderId: '255477892735',
  appId: process.env.REACT_APP_APPID,
};
// Initialize Firebase
firebase.initializeApp(config);
// export const db = firebase.firestore();

export default firebase;
