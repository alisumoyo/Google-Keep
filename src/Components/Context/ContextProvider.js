import React, { createContext, useContext, useState, useEffect } from "react";
import {  auth, firestore } from "../../firebase/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user , "rtrt")
        onSnapshot(doc(firestore, "users", user.uid), (doc) => {
          if (doc.exists) {
            const data = { ...doc.data(), userId: user.uid };

            setUser(data);
          }
        });
      } else {
        console.log("user logout...");
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}








// import React ,  {createContext , useState , useEffect} from "react";
// import {onAuthStateChanged , auth , collection , firestore , onSnapshot , doc ,where , query } from "../../firebase/firebaseconfig"
// import { DocumentSnapshot } from "firebase/firestore";

// export const userContext = createContext();

// const userFromfirestore = ( {children}) => {
//  const [users , setUsers] = useState('');
//  const [notes , setNotes] = useState([]);
 
 
 
// //  useEffect(() =>{
// //      onAuthStateChanged(auth , (user) =>{
// //          if(user){
// //        console.log("aaaaaa", user)

// //     const userRef = doc(firestore , 'users' , user.uid);
// //     onSnapshot(userRef, (docSnapshot)=>{
// //         if(docSnapshot.exists()){
// //             const userData = docSnapshot.data();
// // console.log(userData)
// //             setUsers(userData);
// //         }
// //         else{
// //             console.log("user document not found")
// //         }
// //     })
// //    }
// //    })
// //   }, []);



// useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(user)
//         onSnapshot(doc(db, "users", user.uid), (doc) => {
//           if (doc.exists) {
//             const data = { ...doc.data(), userId: user.uid };

//             setUsers(data);
//           }
//         });
//       } else {
//         console.log("user logout...");
//       }
//     });
//   }, []);

//   useEffect (() => {
//     if(users ) {
//         const notesRef = collection(firestore , "notes");
//         const q = query(notesRef , where("ownId" , "=" , users.uid));

//         onSnapshot(q , (querySnapshot) => {
//             const c = [];
//             querySnapshot.forEach((doc) => {
//                 c.push({...doc.data(), id: doc.id });
//             })
//             setNotes(c)
//         });
//     }
//   }, [users]);


//   useEffect (() => {
//     if(users.role === "admin"){
//         const notesRef = collection(firestore , "notes");
//         const q = query(notesRef);

//         onSnapshot(q , (querySnapshot) => {
//             const c = [];
//             querySnapshot.forEach((doc) =>{
//                 c.push({...doc.data(), id:doc.id });
//                 console.log(c);
//             });
//             setNotes(c);
//         });
//     }
//   },[users]);
//   return(
//     <userContext.Provider value={{users , setUsers , notes }}>
//         {children}
//     </userContext.Provider>
//   );
// };

// export default userFromfirestore;