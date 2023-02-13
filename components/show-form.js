// components/show-form.js

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ShowForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date1: e.target.formDateTimes1.value,
      date2: e.target.formDateTimes2.value,
      lastdate: e.target.formLastDate.value,
      venue: e.target.formVenue.value,
      website: e.target.formVenueURL.value,
      address1: e.target.formVenueAddress1.value,
      address2: e.target.formVenueAddress2.value,
      phone: e.target.formVenuePhone.value,
      group: e.target.formGroup.value,
      musician1: e.target.formMusician1.value,
      musician2: e.target.formMusician2.value,
      musician3: e.target.formMusician3.value,
      musician4: e.target.formMusician4.value,
      musician5: e.target.formMusician5.value,
      musician6: e.target.formMusician6.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    const form = e.target;
    console.log("JSONdata", JSONdata);
    console.log("data", data);
    //if (form.checkValidity() === false) {
    // e.stopPropagation();
    //}
    // setValidated(true);
  };
  //
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" className="mb-1" controlId="formDateTimes1">
          <Form.Label>Date Times 1 (required)</Form.Label>
          <Form.Control required type="text" placeholder="" />
          <Form.Text id="date1" className="text-muted">
            Ex.: Jan. 1 at 7:30 pm / 9:30 pm
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formDateTimes2">
          <Form.Label>Date Times 2</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: Jan. 1 at 7:30 pm / 9:30 pm
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formLastDate">
          <Form.Label>Last Date (required)</Form.Label>
          <Form.Control required type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: 2023-01-30 (YYYY-MM-DD)
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Must be 10 characters long!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" className="mb-1" controlId="formVenue">
          <Form.Label>Venue (required)</Form.Label>
          <Form.Control required type="text" placeholder="" />
          <Form.Text className="text-muted">Ex.: Birdland NYC</Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formVenueURL">
          <Form.Label>Venue URL (required)</Form.Label>
          <Form.Control required type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: https://birdland.com
          </Form.Text>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group
          as={Col}
          md="4"
          className="mb-3"
          controlId="formVenueAddress1"
        >
          <Form.Label>Venue Address 1</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">Ex.: 123 First Street</Form.Text>
        </Form.Group>

        <Form.Group
          as={Col}
          md="4"
          className="mb-3"
          controlId="formVenueAddress2"
        >
          <Form.Label>Venue Address 2</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">Ex.: New York, NY</Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formVenuePhone">
          <Form.Label>Venue Phone</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">Ex.: 999-999-9999</Form.Text>
        </Form.Group>
      </Row>

      <Form.Group as={Col} md="12" className="mb-1" controlId="formGroup">
        <Form.Label>Group (required)</Form.Label>
        <Form.Control required type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker Trio</Form.Text>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" className="mb-1" controlId="formMusician1">
          <Form.Label>Musician 1</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: Dave Stryker - guitar
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formMusician2">
          <Form.Label>Musician 2</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">Ex.: Jared Gold - organ</Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formMusician3">
          <Form.Label>Musician 3</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: McClenty Hunter - drums
          </Form.Text>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" className="mb-1" controlId="formMusician4">
          <Form.Label>Musician 4</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: Dave Stryker - guitar
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formMusician5">
          <Form.Label>Musician 5</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: Dave Stryker - guitar
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-1" controlId="formMusician6">
          <Form.Label>Musician 6</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            Ex.: Dave Stryker - guitar
          </Form.Text>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ShowForm;
