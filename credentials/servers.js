import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGvwqW84GmsUfNS2DjPwN0d5nlYvGB7Hc",
  authDomain: "ibox.gt",
  databaseURL: "https://iboxshops.firebaseio.com",
  projectId: "iboxshops",
  storageBucket: "iboxshops.appspot.com",
  messagingSenderId: "947837339959",
  appId: "1:947837339959:web:7f6c331d8b066ad1a132b2",
  measurementId: "G-8CDH8Z2YXB"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase;
