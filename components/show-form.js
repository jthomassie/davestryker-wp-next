// components/show-form.js

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ShowForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formLastDate">
        <Form.Label>Last Date</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
          Ex.: 2023,01,01 (YYYY,MM,DD)
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDateTimes1">
        <Form.Label>Date Times 1</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
          Ex.: Jan. 1 at 7:30 pm / 9:30 pm
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDateTimes2">
        <Form.Label>Date Times 2</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">
          Ex.: Jan. 1 at 7:30 pm / 9:30 pm
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVenue">
        <Form.Label>Venue</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Birdland NYC</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVenueURL">
        <Form.Label>Venue URL</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: https://birdland.com</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVenueAddress1">
        <Form.Label>Venue Address 1</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: 123 First Street</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVenueAddress2">
        <Form.Label>Venue Address 2</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: New York, NY</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formVenuePhone">
        <Form.Label>Venue Phone</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: 999-999-9999</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroup">
        <Form.Label>Group</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker Trio</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMusician1">
        <Form.Label>Musician 1</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker - guitar</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMusician2">
        <Form.Label>Musician 2</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker - guitar</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMusician3">
        <Form.Label>Musician 3</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker - guitar</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMusician4">
        <Form.Label>Musician 4</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker - guitar</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMusician5">
        <Form.Label>Musician 5</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker - guitar</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMusician6">
        <Form.Label>Musician 6</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted">Ex.: Dave Stryker - guitar</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ShowForm;
