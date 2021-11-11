import { initializeApp } from "firebase/app";

import firebaseConfig from "./firebase.config";

const automantiaAuthantication=()=>{
   
    initializeApp(firebaseConfig)
}

export default automantiaAuthantication;