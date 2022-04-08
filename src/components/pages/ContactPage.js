import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { PageHead } from "../modules/displayModules";
import { contactHead } from "../siteData/siteData";
import "./pages.css";

const postContactData = async (contactData) => {
  console.log(`postContactData receives: ` + JSON.stringify(contactData));
  const response = await fetch("/postContact", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  const resData = await response.json();
  if (resData.status === "success") {
    alert("Message Sent.");
    this.resetForm();
  } else if (resData.status === "fail") {
    alert("Message failed to send.");
  }
};

function ContactForm(props) {
  const [contactData, setContactData] = useState({});
  const submit = (e) => {
    e.preventDefault();
    props.postContactData(contactData);
  };
  return (
    <div className="contact-form">
      <Form onSubmit={submit}>
        <FormGroup floating>
          <Input id="userName" name="userName" placeholder="Name" type="text" onChange={(e) => setContactData({ ...contactData, userName: e.target.value })} />
          <Label for="userName">Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input id="email" name="email" placeholder="Email" type="email" onChange={(e) => setContactData({ ...contactData, email: e.target.value })} />
          <Label for="email">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input id="phone" name="phone" placeholder="Phone Number" type="text" onChange={(e) => setContactData({ ...contactData, phone: e.target.value })} />
          <Label for="phone">Phone Number</Label>
        </FormGroup>{" "}
        <FormGroup tag="fieldset">
          <legend>Preferred Contact Method</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" id="prefEmail" name="resPref" onChange={(e) => setContactData({ ...contactData, resPref: e.target.id })} />
              Email
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" id="prefPhone" name="resPref" onChange={(e) => setContactData({ ...contactData, resPref: e.target.id })} />
              Phone
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="otherInfo"
            name="otherInfo"
            placeholder="Other Info"
            type="textarea"
            style={{ height: "200px" }}
            onChange={(e) => setContactData({ ...contactData, otherInfo: e.target.value })}
          />
          <Label for="otherInfo">Please provide as much relevant detail as possible about your inquiry.</Label>
        </FormGroup>{" "}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="container">
      <PageHead title={contactHead.title} text={contactHead.text} />
      <ContactForm postContactData={postContactData} />
    </div>
  );
}

export default ContactPage;
