// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"
// import {getStorage, ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
// import {getAuth} from "firebase/auth"
// import { getPerformance } from "firebase/performance";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// export const firebaseConfig = {
//
// };
// /** 
// *@param {*} uri
// *@param {*} name
// **/
// export const uploadPicture= async(uri, name, onProgress)=>{
//   const fetchResponse = await  fetch(uri);
//   const theBlob = await fetchResponse.blob();
//   const imageRef = ref(getStorage(), `images/${name}`);
//   const uploadTask = uploadBytesResumable(imageRef, theBlob);

//   return new Promise((resolve, reject) => {
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         onProgress && onProgress(progress);
//       },
//       (error) => {
//         // Handle unsuccessful uploads
//         console.log(error);
//         reject(error);
//       },
//       async () => {
//         const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
//         resolve({
//           downloadUrl,
//           metadata: uploadTask.snapshot.metadata,
//         });
//       }
//     );
//   });

  
// }




// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// export const FIREBASE_DB = getFirestore(FIREBASE_APP)
// export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
// export const FIREBASE_PERF = getPerformance(FIREBASE_APP);











