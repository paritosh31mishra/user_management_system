import React from 'react';
import Modal from 'react-modal';
import Details from './details';
import {  useState } from "react";

const Modalcontrol = (user) => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
    
   const setModalIsOpenToTrue =() =>{
    setModalIsOpen(true)
   }

   const setModalIsOpenToFalse =() =>{
    setModalIsOpen(false)
   }

   return(
    <>
      <Modal isOpen={modalIsOpen}>
         <button onClick={setModalIsOpenToFalse}>x</button>
          <Details userid = {user.id} />
      </Modal>
    </>
   )
}

export default Modalcontrol;