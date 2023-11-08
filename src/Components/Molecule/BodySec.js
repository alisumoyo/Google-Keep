// Importing necessary dependencies and components
"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Icon from "../Atom/Icon";
import Style from "../Molecule/Molecule.css"; // Assuming this is the stylesheet for styling
import Pin from "../../../Assets/pushpin.svg";
import Reminder from "../../../Assets/person.svg";
import AddCollab from "../../.././Assets/keep.png";
import Drawing from "../../../Assets/palette_.svg";
import Pic from "../../../Assets/image.svg";
import archive from "../../../Assets/archive.svg";
import More from "../../../Assets/more.svg";
import Undo from "../../../Assets/undo.svg";
import Redo from "../../../Assets/redo.svg";
import delet from "../../../Assets/delete.svg";
import InputIcons from "../Atom/InputIcons";
import BodyIcons from "../Atom/BodyIcons.js";
import { onAuthStateChanged , auth , onSnapshot , doc } from "@/firebase/firebaseconfig";
import { userContext } from "../Context/ContextProvider";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/firebase/firebaseconfig";

// Functional component for the main body section of the note-taking app
const BodySec = () => {
  // State variables to manage notes, title, and text
  const user= useContext[userContext]
  console.log("awrr" , user)
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  // const [user, setUser] = useState("");
  // useEffect to load notes from local storage on component mount
  
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Event handler for title input change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  
  //   useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user.role, user.email)
  //       onSnapshot(doc(firestore, "users", user.uid), (doc) => {
  //         if (doc.exists) {
  //           const data = { ...doc.data(), userId: user.uid };

  //           setUser(data);
  //         }
  //       });
  //     } else {
  //       console.log("user logout...");
  //     }
  //   });
  // }, []);


  // Event handler for text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };


  const handleEditNote = (index) => {
    const noteToEdit = notes[index];
    setTitle(noteToEdit.title);
    setText(noteToEdit.text);
    setEditIndex(index);
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[editIndex] = { title, text };
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setTitle("");
    setText("");
    setEditIndex(null);
    setEditMode(false);
  };

console.log("aaau" , user)
  // Event handler for closing a note
 const userNotesCollection = collection(firestore , "notes")

  // const handleCloseClick = async () => {
  //   if  (user && (title && text)) {
  //     console.log(user   , 'aaaw')
  //     try {
  //       const noteData = {
  //         timestamp: new Date(),
  //         ownerid: user.uid,
  //         title,
  //         content,
  //         //  include userId here since it's in the collection
  //       };

  //       const noteRef = await addDoc(userNotesCollection, noteData);
  //       console.log("Note added with ID: ", noteRef.id);
  //     } catch (error) {
  //       console.error("Error adding note: ", error);
  //     }


  //   }
  // };

    const handleCloseClick = async () => {
    if ( title && text) {
      // Creating a new note object and updating the notes state
      const newNote = { title, text };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
      setTitle("");
      setText("");

      // Saving notes to local storage
      // const noteRef = await addDoc(userNotesCollection);
        console.log("Note added with ID: ");
      // localStorage.setItem("notes", JSON.stringify(newNotes));
    if(user){
      addDoc(collection(firestore, 'notes'), {title, text , userid:user.uid})
    }
  }

  };

  // JSX structure for the body section of the note-taking app
  return (
    <div className="body-part">
      <div className="body-innerpart">
        {/* Input section for note title */}
        <div className="body-first-input">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <Image className="pin-icon" src={Pin} />
        </div>

        {/* Input section for note text */}
        <div className="second-input">
          <input
            type="text"
            placeholder="Text a note"
            value={text}
            onChange={handleTextChange}
          />
        </div>

        {/* Icons section for additional actions */}
        <div className="bodyicons-part">
          <div className="bodyicon-img">
            {/* BodyIcons component for each icon */}
            <Image src={Reminder} />
            <Image src={Drawing} />
           <Image src={More} />
           <Image src={Undo} />
           <Image src={Redo} /> 
          </div>
          {/* Close button for closing the current note */}
          <button onClick={handleCloseClick}>Close</button>
        </div>
      </div>

      {/* Displaying the list of notes */}
      <div className="notes">
        {notes.map((note, index) => (
         <div className="note-list" key={index}>
         <h3>{note.title}</h3>
         <p>{note.text}</p>
         <div className="note-pics">
           <Image src={archive} />
           <Image src={Pic} />
           <Image
             src={Drawing}
             onClick={() => handleEditNote(index)}
           />
           <Image src={delet} onClick={() => handleDeleteNote(index)} />
           <Image src={More} />
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the BodySec component as the default export
export default BodySec
