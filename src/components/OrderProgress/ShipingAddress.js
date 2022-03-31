import React, {
  Fragment,
  Component,
  useState,
  useEffect,
  useRef,
  useReducer,
} from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { object } from "yup/lib/locale";

/*const fnameActionType = "FNAME_ON_INPUT";
const lnameActionType = "LNAME_ON_INPUT";
const addressActionType = "ADDRESS_ON_INPUT";
const cityActionType = "CITY_ON_INPUT";
const phoneActionType = "PHONE_ON_INPUT";
const emailActionType = "EMAIL_ON_INPUT";
const postcodeActionType = "POSTECODE_ON_INPUT";

const fNameReducer = (state, action) => {
  if (action.type === fnameActionType) {
    return { isValid: true 
      //action.value.length > 1
      , value: action.value };
  }
};

const lNameReducer = (state, action) => {
  if (action.type === lnameActionType) {
    return { isValid: true
       //action.value.length > 1
       , value: action.value };
  }
};

const addressReducer = (state, action) => {
  if (action.type === addressActionType) {
    return { isValid: true 
       //action.value.length > 1
      , value: action.value };
  }
};

const phoneReducer = (state, action) => {
  if (action.type === phoneActionType) {
    return { isValid: true 
      // action.value.length > 1
      , value: action.value };
  }
};

const emailReducer = (state, action) => {
  if (action.type === emailActionType) {
    return {
      isValid:
        action.value.length == 0 ||
        (action.value.includes("@") && action.value.includes(".")),
      value: action.value,
    };
  }
};

const cityReducer = (state, action) => {
  if (action.type === cityActionType) {
    return { isValid: action.value.length > 1, value: action.value };
  }
};

const postcodeReducer = (state, action) => {
  if (action.type === postcodeActionType) {
    return { isValid: true, value: action.value };
  }
};*/

const ShipingAddress = (props) => {
  /*const [isFormValid, setIsFormValid] = useState(false);
  const defaultInputValue = (valueFromParent) => {
    return { isValid: //valueFromParent !== ""
    true, value: valueFromParent };
  };

  const [fNameState, dispatchFNameState] = useReducer(
    fNameReducer,
    defaultInputValue(props.savedValues.firstName)
  );

  const [lNameState, dispatchLNameState] = useReducer(
    lNameReducer,
    defaultInputValue(props.savedValues.lastName)
  );

  const [addressState, dispatchAddressState] = useReducer(
    addressReducer,
    defaultInputValue(props.savedValues.address)

  );

  const [phoneState, dispatchPhoneState] = useReducer(
    phoneReducer,
    defaultInputValue(props.savedValues.phone)

  );

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    isValid: true,
    value: props.savedValues.email,
  });

  const [cityState, dispatchCityState] = useReducer(
    cityReducer,
    defaultInputValue(props.savedValues.city)

  );
  const [postcodeState, dispatchPostcodeState] = useReducer(postcodeReducer, {
    isValid: true,
    value: props.savedValues.postcode,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log("checking form validity");
      setIsFormValid(
        fNameState.isValid &&
          lNameState.isValid &&
          addressState.isValid &&
          phoneState.isValid &&
          emailState.isValid &&
          cityState.isValid &&
          postcodeState.isValid
      );
    }, 500);

    return () => {
      //console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [
    fNameState,
    lNameState,
    addressState,
    phoneState,
    emailState,
    cityState,
    postcodeState,
  ]);


const onNextHandler = () => {
  props.onNext({
    firstName: fNameState.value,
    lastName: lNameState.value,
    address: addressState.value,
    phone: phoneState.value,
    email: emailState.value,
    city: cityState.value,
    postcode: postcodeState.value,
  });
};

  const firstNameOnChangeHandler = (event) => {
    //console.log(`firstNameOnChangeHandler ${event.target.value}`);
    dispatchFNameState({ type: fnameActionType, value: event.target.value });
  };

  const lastNameOnChangeHandler = (event) => {
    dispatchLNameState({ type: lnameActionType, value: event.target.value });
  };

  const addressOnChangeHandler = (event) => {
    dispatchAddressState({
      type: addressActionType,
      value: event.target.value,
    });
  };

  const phoneOnChangeHandler = (event) => {
    dispatchPhoneState({ type: phoneActionType, value: event.target.value });
  };

  const emailOnChangeHandler = (event) => {
    dispatchEmailState({ type: emailActionType, value: event.target.value });
  };

  const cityOnChangeHandler = (event) => {
    dispatchCityState({ type: cityActionType, value: event.target.value });
  };

  const postcodeOnChangeHandler = (event) => {
    dispatchPostcodeState({
      type: postcodeActionType,
      value: event.target.value,
    });
  };*/

  const [isValid, setIsValid] = useState(false);

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
        {/* {Object.keys(formik.errors).length === 0 > 0  && <div>{JSON.stringify(formik.errors.firstName)}</div>} */}

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              error={formik.errors.firstName ?? false}
              fluid
              label="First name"
              placeholder="First name"
              onChange={formik.handleChange} //{firstNameOnChangeHandler}
              value={formik.values.fName} //{formik.handleChange} //{fNameState.value}
              id="firstName"
              type="text"
              name="firstName"
            />
            {/* {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null} */}

            {/* <Form.Input
              fluid
              label="lName"
              placeholder="Last name"
              onChange={lastNameOnChangeHandler}
              value={lNameState.value}
            /> */}
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={formik.handleChange} //{firstNameOnChangeHandler}
              value={formik.values.lName} //{formik.handleChange} //{fNameState.value}
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
              onChange={formik.handleChange} //{addressOnChangeHandler}
              value={formik.values.address} //{addressState.value}
              id="address"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Phone/Mobile *"
              placeholder="Phone/Mobile *"
              onChange={formik.handleChange} //{phoneOnChangeHandler}
              value={formik.values.phone} //{phoneState.value}
              type="number"
              id="phone"
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              onChange={formik.handleChange} //{emailOnChangeHandler}
              value={formik.values.email} //{emailState.value}
              id="email"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="City/Town *"
              placeholder="City/Town *"
              onChange={formik.handleChange} //{cityOnChangeHandler}
              value={formik.values.city} //{cityState.value}
              id="city"
            />
            <Form.Input
              fluid
              label="Postcode"
              placeholder="Postcode"
              onChange={formik.handleChange} //{postcodeOnChangeHandler}
              value={formik.values.postcode} //{postcodeState.value}
              type="number"
              id="postcode"
            />
          </Form.Group>
          <Button
            type="submit"
            positive
            // onClick={onNextHandler}
            content="Next"
            icon="right arrow"
            labelPosition="right"
            // disabled={!isFormValid}
            // disabled={!isValid}
            visibility={props.onNext == undefined ? "hidden" : "visible"}
          />
          {/* <button type="submit">submit</button> */}
        </Form>
        <footer></footer>
      </div>
    </React.Fragment>
  );
};

export default ShipingAddress;
