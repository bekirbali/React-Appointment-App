import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AddModal } from "./AddModal";

const Doctors = ({ doctors, setAppointment, appointment }) => {
  const [show, setShow] = useState(false);
  const [selectedDoctorName, setSelectedDoctorName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setSelectedDoctorName(name);
  };

  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "purple" }}>
        Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((doctor) => {
          const { id, name, img, dep } = doctor;
          return (
            <Col key={id} xs={6} md={4} lg={4}>
              <img
                src={img}
                alt="doctor"
                className="img-thumbnail doctor-img"
                onClick={() => handleShow(name)}
              />
              <h4>{name}</h4>
              <h5>{dep}</h5>
            </Col>
          );
        })}
      </Row>
      <AddModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        doctorName={selectedDoctorName}
        setAppointment={setAppointment}
        appointment={appointment}
      />
    </Container>
  );
};

export default Doctors;
