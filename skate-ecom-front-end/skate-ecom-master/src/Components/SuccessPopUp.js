import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {Button} from "reactstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function SuccessPopUp({message, isOpen, navigation}){
    const[modal, setModal] = useState(true);
    const navigate = useNavigate();
    console.log("success pip up called", isOpen, "Modal is", modal);

    function toggle(){
        setModal(!modal);
    }

    const handleCloseModal = ()=>{
        setModal(false);
        navigate(navigation);
    }

    useEffect(()=>{
        toggle(isOpen);
    }, [isOpen] )

    return(
        <div>
            <Modal isOpen={modal}>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleCloseModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default SuccessPopUp;