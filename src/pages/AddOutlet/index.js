import React, { useEffect, useState } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
// react router
import { withRouter } from "react-router-dom";
// local components
import OutletDetails from "./components/OutletDetails";
import CreateMenu from "./components/CreateMenu";
import CustomModal from "components/CustomModal";
// react bootstrap
import { Card, Form } from "react-bootstrap";

//image assets
import Error from "assets/img/Error.svg";

const Index = (props) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    cover_image: null,
    logo_img: null,
    menu: null,
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

  useEffect(() => {
    props.dispatch(Action.getLocationRegister());
  }, []);

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

  const handleFile = (name) => (event) => {
    const value = event.target.files;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleStep = (e) => {
    e.preventDefault();
    setValues((values) => ({ ...values, step: values.step + 1 }));
  };

  const handleStepPrev = (values) => {
    setValues((values) => ({ ...values, step: values.step - 1 }));
  };

  const handleCreateOutlet = async (e) => {
    e.preventDefault();
    const {
      name,
      cover_image,
      logo_img,
      menu,
      location_id,
      phone_number,
      description,
      address,
    } = values;

    if (
      !name ||
      !cover_image ||
      !logo_img ||
      !menu ||
      !location_id ||
      !phone_number ||
      !description ||
      !address
    ) {
      setError(true);
      setMessage("Please Fill all Fields");
    } else {
      const url = await fileToBase64(cover_image[0]);
      const url2 = await fileToBase64(logo_img[0]);

      props.dispatch(
        Action.addOutlet({
          name,
          phone_number,
          address,
          location_id: location_id,
          description,
          cover_image: { name: cover_image[0].name, data: url },
          logo_img: { name: logo_img[0].name, data: url2 },
          menu,
        })
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card className="p-5 rounded">
              {step === 1 ? (
                <>
                  <div className="text-start form-legend mb-3 fs-24 fw-600">
                    Menu Details
                  </div>
                  <Form
                    id="register-form"
                    onSubmit={handleStep}
                    autoComplete="off"
                  >
                    <OutletDetails
                      values={values}
                      handleChange={handleChange}
                      handleFile={handleFile}
                    />
                  </Form>
                </>
              ) : step === 2 ? (
                <>
                  <div className="text-start form-legend pb-5 fs-24 fw-600">
                    Create Menu
                  </div>
                  <Form
                    id="email-form"
                    onSubmit={handleCreateOutlet}
                    autoComplete="off"
                  >
                    <CreateMenu
                      values={values}
                      setValues={setValues}
                      handleCreateOutlet={handleCreateOutlet}
                      handleStepPrev={handleStepPrev}
                      props={props}
                    />
                  </Form>
                </>
              ) : null}
            </Card>
          </div>
        </div>
      </div>
      <CustomModal
        show={error}
        onHide={() => setError(false)}
        message={message}
        statusicon={Error}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    outlet: state.outlet,
  };
}

export default withRouter(connect(mapStateToProps)(Index));
