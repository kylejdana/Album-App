import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyB08BrIfSXJLJNgxKzee0QgrQ82UQw1tMQ",
  authDomain: "album-app-1.firebaseapp.com",
  databaseURL: "https://album-app-1.firebaseio.com",
  projectId: "album-app-1",
  storageBucket: "album-app-1.appspot.com",
  messagingSenderId: "161167990469",
  appId: "1:161167990469:web:9f37a0ea953e2f7fffdaac",
  measurementId: "G-SC5LPG7824"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const storage = firebase.storage();

export function snapshotToArray(snapshot) {
  const updatedArray = [];
  snapshot.forEach(s => {
    const data = s.data();
    data.id = s.id;
    updatedArray.push(data);
  });
  return updatedArray;
}
