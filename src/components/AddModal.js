import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const AddModal = ({
  show,
  handleClose,
  handleShow,
  doctorName,
  setAppointment,
  appointment,
}) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setAppointment([
      ...appointment,
      {
        id: appointment.length + 1,
        patient: patientName,
        day: date,
        consulted: false,
        doctor: doctorName,
      },
    ]);
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {doctorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Day&time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Enter email"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="btn btn-success"
              >
                Save
              </Button>
              <Button
                variant="primary"
                className="btn btn-danger mx-2"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
