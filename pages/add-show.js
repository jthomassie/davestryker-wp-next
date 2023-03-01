// https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
// pages/add-show.js

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useRouter } from "next/router";

//
const AddShow = () => {
  //
  const router = useRouter();
  // let show = decodeURI(router.query.show);
  // let id = decodeURI(router.query.id);
  // let v = decodeURI(router.query.v);

  let rQid = decodeURI(router.query.id);
  let rQdate1 = decodeURI(router.query.date1);
  let rQdate2 = decodeURI(router.query.date2);
  let rQlastdate = decodeURI(router.query.lastdate);
  let rQvenue = decodeURI(router.query.venue);
  let rQwebsite = decodeURI(router.query.website);
  let rQaddress1 = decodeURI(router.query.address1);
  let rQaddress2 = decodeURI(router.query.address2);
  let rQphone = decodeURI(router.query.phone);
  let rQgroup = decodeURI(router.query.group);
  let rQmusician1 = decodeURI(router.query.musician1);
  let rQmusician2 = decodeURI(router.query.musician2);
  let rQmusician3 = decodeURI(router.query.musician3);
  let rQmusician4 = decodeURI(router.query.musician4);
  let rQmusician5 = decodeURI(router.query.musician5);
  let rQmusician6 = decodeURI(router.query.musician6);
  //
  const [id, setid] = useState(rQid);
  const [date1, setDate1] = useState(rQdate1);
  const [date2, setDate2] = useState(rQdate2);
  const [lastdate, setLastdate] = useState(rQlastdate);
  const [venue, setVenue] = useState(rQvenue);
  const [website, setWebsite] = useState(rQwebsite);
  const [address1, setAddress1] = useState(rQaddress1);
  const [address2, setAddress2] = useState(rQaddress2);
  const [phone, setPhone] = useState(rQphone);
  const [group, setGroup] = useState(rQgroup);
  const [musician1, setMusician1] = useState(rQmusician1);
  const [musician2, setMusician2] = useState(rQmusician2);
  const [musician3, setMusician3] = useState(rQmusician3);
  const [musician4, setMusician4] = useState(rQmusician4);
  const [musician5, setMusician5] = useState(rQmusician5);
  const [musician6, setMusician6] = useState(rQmusician6);
  //
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  //
  const handleShow = async (e) => {
    e.preventDefault();
    // reset error and message
    setMessage("");
    setError("");
    // check fields
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

    //
    let show = {
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
    // save the show
    let response = await fetch("/api/shows", {
      method: "POST",
      body: JSON.stringify(show),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset all fields
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
      // reload page
      return router.push("/all-shows");
    } else {
      // set error
      return setError(data.message);
    }
  };

  //
  return (
    <>
      <div className="white-base pb-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 py-9">
              <h2>Add show</h2>
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
                  Add show
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShow;
