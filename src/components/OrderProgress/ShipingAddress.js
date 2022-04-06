import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ShipingAddress = (props) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const onSubmit = (values) => {
    onNextHandler();
  };

  const formik = useFormik({
    initialValues: {
      firstName: props.savedValues.firstName,
      lastName: props.savedValues.lastName,
      address: props.savedValues.address,
      phone: props.savedValues.phone,
      email: props.savedValues.email,
      city: props.savedValues.city,
      postcode: props.savedValues.postcode,
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  const onNextHandler = () => {
    console.table(formik.values);
    props.onNext({
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      address: formik.values.address,
      phone: formik.values.phone,
      email: formik.values.email,
      city: formik.values.city,
      postcode: formik.values.postcode,
    });
  };
  return (
    <React.Fragment>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              error={formik.errors.firstName ?? false}
              fluid
              label="First name"
              placeholder="First name"
              onChange={formik.handleChange}
              value={formik.values.fName}
              id="firstName"
              type="text"
              name="firstName"
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={formik.handleChange}
              value={formik.values.lName}
              id="lastName"
              type="text"
              name="lName"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Address *"
              placeholder="Address *"
              onChange={formik.handleChange}
              value={formik.values.address}
              id="address"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Phone/Mobile *"
              placeholder="Phone/Mobile *"
              onChange={formik.handleChange}
              value={formik.values.phone}
              type="number"
              id="phone"
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="City/Town *"
              placeholder="City/Town *"
              onChange={formik.handleChange}
              value={formik.values.city}
              id="city"
            />
            <Form.Input
              fluid
              label="Postcode"
              placeholder="Postcode"
              onChange={formik.handleChange}
              value={formik.values.postcode}
              type="number"
              id="postcode"
            />
          </Form.Group>
          <Button
            type="submit"
            positive
            content="Next"
            icon="right arrow"
            labelPosition="right"
            visibility={props.onNext == undefined ? "hidden" : "visible"}
          />
        </Form>
        <footer></footer>
      </div>
    </React.Fragment>
  );
};

export default ShipingAddress;
