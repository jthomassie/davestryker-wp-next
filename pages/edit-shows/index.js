// https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
// pages/api/shows/[_id].js

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//
const EditShow = () => {
  //
  let show = {
    date1: "June 3 at 7:00 pm / 9:30 pm",
    date2: "",
    lastdate: "2023-06-03",
    venue: "Birdland NYC",
    website: "http://davestryker.com",
    address1: "315 W 44th St #5402",
    address2: "New York, NY",
    phone: "212-581-3080",
    group: "Dave Stryker Orchestra",
    musician1: "Dave Stryker - guitar",
    musician2: "Bob Mintzer - tenor sax",
    musician3: "Jared Gold - organ",
    musician4: "McClenty Hunter - drums",
    musician5: "",
    musician6: "",
  };

  //
  const [date1, setDate1] = useState(show.date1);
  const [date2, setDate2] = useState(show.date2);
  const [lastdate, setLastdate] = useState(show.lastdate);
  const [venue, setVenue] = useState(show.venue);
  const [website, setWebsite] = useState(show.website);
  const [address1, setAddress1] = useState(show.address1);
  const [address2, setAddress2] = useState(show.address2);
  const [phone, setPhone] = useState(show.phone);
  const [group, setGroup] = useState(show.group);
  const [musician1, setMusician1] = useState(show.musician1);
  const [musician2, setMusician2] = useState(show.musician2);
  const [musician3, setMusician3] = useState(show.musician3);
  const [musician4, setMusician4] = useState(show.musician4);
  const [musician5, setMusician5] = useState(show.musician5);
  const [musician6, setMusician6] = useState(show.musician6);
  //
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  //
  const handleShow = async (e) => {
    e.preventDefault();
    // reset error and message
    setMessage("");
    setError("");
    // fields check
    if (
      !date1 ||
      !lastdate ||
      !venue ||
      !website ||
      !address1 ||
      !address2 ||
      !phone ||
      !group ||
      !musician1 ||
      !musician2 ||
      !musician3
    )
      return setError("Required fields are empty!");

    // show structure
    let editshow = {
      date1,
      date2,
      lastdate,
      venue,
      website,
      address1,
      address2,
      phone,
      group,
      musician1,
      musician2,
      musician3,
      musician4,
      musician5,
      musician6,
    };
    console.log("EDIT SHOW", editshow);
    // save the show
    let response = await fetch("/api/shows", {
      method: "POST",
      body: JSON.stringify(editshow),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      console.log("SUCESS", data);
      // reset the fields
      setDate1("");
      setDate2("");
      setLastdate("");
      setVenue("");
      setWebsite("");
      setAddress1("");
      setAddress2("");
      setPhone("");
      setGroup("");
      setMusician1("");
      setMusician2("");
      setMusician3("");
      setMusician4("");
      setMusician5("");
      setMusician6("");
      // set the message
      return setMessage(data.message);
    } else {
      // set the error
      console.log("ERROR", data);
      return setError(data.message);
    }
  };

  //
  return (
    <>
      <div className="white-base pb-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 pt-6 pb-9">
              <h2>Edit show</h2>
              <Form onSubmit={handleShow}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formDate1"
                  >
                    <Form.Label>Date 1 (required)</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={date1}
                      onChange={(e) => setDate1(e.target.value)}
                    />
                    <Form.Text id="date1" className="text-muted">
                      Ex.: Jan. 1 at 7:30 pm / 9:30 pm
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formDate2"
                  >
                    <Form.Label>Date 2</Form.Label>
                    <Form.Control
                      type="text"
                      value={date2}
                      onChange={(e) => setDate2(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: Jan. 1 at 7:30 pm / 9:30 pm
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formLastdate"
                  >
                    <Form.Label>Last date (required)</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={lastdate}
                      onChange={(e) => setLastdate(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: 2023-01-30 (YYYY-MM-DD)
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      Must be 10 characters long!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formVenue"
                  >
                    <Form.Label>Venue (required)</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: Birdland NYC
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formWebsite"
                  >
                    <Form.Label>Website (required)</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
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
                    controlId="formAddress1"
                  >
                    <Form.Label>Venue Address 1</Form.Label>
                    <Form.Control
                      type="text"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: 123 First Street
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-3"
                    controlId="formAddress2"
                  >
                    <Form.Label>Venue Address 2</Form.Label>
                    <Form.Control
                      type="text"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: New York, NY
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formPhone"
                  >
                    <Form.Label>Venue Phone</Form.Label>
                    <Form.Control
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: 999-999-9999
                    </Form.Text>
                  </Form.Group>
                </Row>

                <Form.Group
                  as={Col}
                  md="12"
                  className="mb-1"
                  controlId="formGroup"
                >
                  <Form.Label>Group (required)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Ex.: Dave Stryker Trio
                  </Form.Text>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formMusician1"
                  >
                    <Form.Label>Musician 1</Form.Label>
                    <Form.Control
                      type="text"
                      value={musician1}
                      onChange={(e) => setMusician1(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: Dave Stryker - guitar
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formMusician2"
                  >
                    <Form.Label>Musician 2</Form.Label>
                    <Form.Control
                      type="text"
                      value={musician2}
                      onChange={(e) => setMusician2(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: Jared Gold - organ
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formMusician3"
                  >
                    <Form.Label>Musician 3</Form.Label>
                    <Form.Control
                      type="text"
                      value={musician3}
                      onChange={(e) => setMusician3(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: McClenty Hunter - drums
                    </Form.Text>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formMusician4"
                  >
                    <Form.Label>Musician 4</Form.Label>
                    <Form.Control
                      type="text"
                      value={musician4}
                      onChange={(e) => setMusician4(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: Dave Stryker - guitar
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formMusician5"
                  >
                    <Form.Label>Musician 5</Form.Label>
                    <Form.Control
                      value={musician5}
                      placeholder=""
                      onChange={(e) => setMusician5(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: Dave Stryker - guitar
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-1"
                    controlId="formMusician6"
                  >
                    <Form.Label>Musician 6</Form.Label>
                    <Form.Control
                      type="text"
                      value={musician6}
                      onChange={(e) => setMusician6(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Ex.: Dave Stryker - guitar
                    </Form.Text>
                  </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                  Submit edits
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditShow;
