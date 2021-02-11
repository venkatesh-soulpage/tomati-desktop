import React, { useEffect, useState } from "react";
import OutletDetails from "./components/OutletDetails";
import CreateMenu from "./components/CreateMenu";
import { Card, Form } from "react-bootstrap";

const Index = () => {
  const [values, setValues] = useState({
    name: "",
    cover_image: [],
    logo_img: [],
    menu: [],
    plan: 1,
    location_id: null,
    phone_number: null,
    latitude: null,
    longitude: null,
    description: null,
    address: null,
    step: 1,
  });
  const { step } = values;

  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleStep = (values) => {
    setValues((values) => ({ ...values, step: values.step + 1 }));
  };

  console.log(values);

  const handleCreateOutlet = async (e) => {
    e.preventDefault();
    const {
      name,
      cover_image,
      logo_img,
      menu,
      plan,
      location_id,
      phone_number,
      latitude,
      longitude,
      description,
      address,
    } = values;

    // const url = await fileToBase64(cover_image[0]);
    // const url2 = await fileToBase64(logo_img[0]);
    console.log(cover_image);

    // console.log({
    //   name,
    //   phone_number,
    //   address,
    //   location_id,
    //   description,
    //   cover_image: { name: cover_image[0].name, data: url },
    //   logo_img: { name: logo_img[0].name, data: url2 },
    // });
  };
  return (
    <div className="bg-light container-fluid py-5">
      <div className="container">
        <Card className="p-5 w-50 mt-5 mx-auto">
          {step === 1 ? (
            <>
              <Form
                id="register-form"
                // onLoad={() => props.handleRegisterError(null)}
                autoComplete="off"
              >
                {/* <AlertMessage
              variant="danger"
              error={props.auth.registerError}
              onDismiss={() => {
                props.handleRegisterError(null);
              }}
            ></AlertMessage> */}
                <OutletDetails
                  values={values}
                  setValues={setValues}
                  handleChange={handleChange}
                  handleStep={handleStep}
                  // handleSignUpData={handleSignUpData}
                />
              </Form>
            </>
          ) : step === 2 ? (
            <>
              <Form
                id="email-form"
                onSubmit={handleCreateOutlet}
                // onLoad={() => props.handleRegisterError(null)}
                autoComplete="off"
              >
                {/* <AlertMessage
              variant="danger"
              error={props.auth.registerError}
              onDismiss={() => {
                props.handleRegisterError(null);
              }}
            ></AlertMessage> */}
                <CreateMenu
                  values={values}
                  handleChange={handleChange}
                  // setValues={setValues}
                  handleStep={handleStep}
                  handleCreateOutlet={handleCreateOutlet}
                />
              </Form>
            </>
          ) : null}
        </Card>
      </div>
    </div>
  );
};

export default Index;
