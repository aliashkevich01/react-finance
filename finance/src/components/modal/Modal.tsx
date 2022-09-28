import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { ModalPropsInterface } from '../../interfaces';

export default function ModalWindow(props: ModalPropsInterface) {
  const drawList = (arr: Array<string | Array<string>>) => {
    return arr.map((item: string | Array<string>, index) => {
        return typeof item !== 'string' ? 
        <li key={index}>{item.join(', ')}</li> : 
        <li key={index}>{item}</li> ;
    })
  } 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Total info according to your inputs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
            {drawList(props.items)}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Change info</Button>
      </Modal.Footer>
    </Modal>
  )
}
