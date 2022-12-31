// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import fibaseKey from "./fibaseKey";

export let app: FirebaseApp;

export const initializeFirebase = function () {
  app = initializeApp(fibaseKey)
  return app
}