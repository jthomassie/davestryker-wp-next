// components/mailchimp-form.js

// http://eepurl.com/ikkKjz
// https://davestryker.us8.list-manage.com/subscribe/post" method="POST">

import { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MAILCHIMP_U = process.env.NEXT_PUBLIC_MAILCHIMP_U;
const MAILCHIMP_ID = process.env.NEXT_PUBLIC_MAILCHIMP_ID;

const CustomForm = ({ status, message, onValidated }) => {
  //
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    setEmail(e.target.email.value);
    setFirstName(e.target.firstName.value);
    setLastName(e.target.lastName.value);
    //
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };
  //
  const setEmailHandler = (val) => {
    setEmail(val);
  };
  const setFirstNameHandler = (val) => {
    setFirstName(val);
  };
  const setLastNameHandler = (val) => {
    setLastName(val);
  };
  const setModalOpenHandler = (val) => {
    setModalOpen(val);
  };
  //
  useEffect(() => {
    if (status === "success") clearFields();
    if (modalOpen && status === "success") clearFields();
  }, [status, modalOpen]);
  //
  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <div className="col">
        {modalOpen == false && (
          <div className="mb-3 p-4 pt-3 border-white">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-lg mb-2">
                {status === "success"
                  ? "Success!"
                  : "Subscribe to my newsletter"}
              </div>
              {status === "sending" && <h5 className="">Sending...</h5>}
              {status === "error" && (
                <div
                  className="form-sm"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <div
                  className="form-sm"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status !== "success" ? (
                <div className="">
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      className="mb-2"
                      controlId="email"
                    >
                      <Form.Label>Email (required)</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(e) => setEmailHandler(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      className="mb-2"
                      controlId="firstName"
                    >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => setFirstNameHandler(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      className="mb-2"
                      controlId="lastName"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => setLastNameHandler(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <div className="row justify-content-center">
                    <div className="col col-md-6 col-lg-4">
                      <div className="d-grid">
                        <Button
                          className=""
                          variant="outline-primary"
                          type="submit"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* close button appears if form was successfully sent */}
              {status === "success" ? (
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-3"
                    onClick={() => setModalOpenHandler(true)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <Form.Control
                  required
                  type="submit"
                  value={[email, firstName, lastName]}
                  placeholder=""
                  className="d-none"
                />
              )}
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

//
const MailchimpForm = (props) => {
  const url = `https://davestryker.us8.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}`;
  //
  return (
    <div className="mb-5">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
