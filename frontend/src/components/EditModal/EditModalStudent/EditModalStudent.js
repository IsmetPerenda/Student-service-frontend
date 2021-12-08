import React, { useState,useEffect } from "react";
import "./EditModalStudent.css";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function EditModalMovie(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [ime, setIme] = useState(props.ime);
  const [prezime, setPrezime] = useState(props.prezime);
  const [godina, setGodina] = useState(props.godina);
  const [brojIndeksa, setBrojIndeksa] = useState(props.brojIndeksa);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
function saveEditedData(){
  return axios.post(`https://localhost:5001/api/student/edit_student` + props.studentId, {ime : ime, prezime : prezime,godina : godina, brojIndeksa : brojIndeksa}).then((response) => {
    console.log(response.data);

    if (response.status === 200) {
    alert("You have successfully edited student");
    }


  })   .catch(function (error) {
    console.log(error.toJSON());
  });
 
}


const handleSave = () => {


    
}
//if(!show) {return null;}
  return (
    <div className="App">
      <button onClick={toggleModal}>Edit</button>
 
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
  
          Ime:
          <input
            name="ime"
            type="text"
            value={ime}
            onChange={e => setIme(e.target.value)}
            required />
            
       
        
        
          Prezime:
          <input
            name="prezime"
            type="text"
            value={prezime}
            onChange={e => setPrezime(e.target.value)}
            required
             />
        
      
          Godina: 
          <input
            name="godina"
            type="text"
            value={godina}
            onChange={e => setGodina(e.target.value)}
            required
             />
    
        

          Broj indeksa:
          <input
            name="brojIndeksa"
            type="text"
            value={brojIndeksa}
            onChange={e => setBrojIndeksa(e.target.value)}
            required
             /> 
         <button onClick={saveEditedData}>Save</button>  
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}