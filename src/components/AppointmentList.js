import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaTimesCircle } from "react-icons/fa";

const AppointmentList = ({ setAppointment, appointment }) => {
  const deleteHandler = (id) => {
    setAppointment(appointment.filter((apps) => apps.id !== id));
  };

  const consultedHandler = (id) => {
    setAppointment(
      appointment.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2">Appointment List</h3>
      {!appointment.length && (
        <img src="./img/appointment.jpg" alt="" width="300px" />
      )}

      {appointment.map((item) => {
        const { id, patient, doctorName, consulted, day } = item;
        return (
          <div
            key={id}
            className={consulted ? "appointments consulted" : "appointments"}
            onDoubleClick={() => consultedHandler(id)}
          >
            <Row>
              <Col>
                <h4>{patient}</h4>
                <h4>{doctorName}</h4>
              </Col>
              <Col>
                <h5>{new Date(day).toDateString()}</h5>
                <h5>{new Date(day).toLocaleTimeString()}</h5>
              </Col>
              <Col>
                <FaTimesCircle
                  className="text-danger fs-3"
                  onClick={() => deleteHandler(id)}
                />
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default AppointmentList;
