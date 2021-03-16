import React, { useEffect, useState } from "react";
// redux
import * as Action from "_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// local components
import EventDetails from "./components/EventDeatails";
import CreateMenu from "./components/CreateMenu";
import EventSchedule from "./components/EventSchedule";
import CustomModal from "components/CustomModal";

// react icons
import { Card, Form } from "react-bootstrap";
// lodash
import _ from "lodash";
import Error from "assets/img/Error.svg";

const Index = (props) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    name: null,
    phone_number: null,
    start_time: new Date(),
    end_time: new Date(),
    expected_guests: null,
    expected_hourly_guests: null,
    comments: null,
    address: null,
    location_id: null,
    cover_image: null,
    description: null,
    showVenueModal: false,
    menu: null,
    inviteModal: false,
    owner_email: null,
    display_name: null,
    custom_message: null,
    logo_img: null,
    step: 1,
    qr_isActive: true,
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
      start_time,
      end_time,
      comments,
      expected_guests,
      expected_hourly_guests,
      qr_isActive,
    } = values;

    if (
      !name ||
      !cover_image ||
      !logo_img ||
      !menu ||
      !location_id ||
      !phone_number ||
      !description ||
      !address ||
      !start_time ||
      !end_time ||
      !comments
    ) {
      setError(true);
      setMessage("Please Fill all Fields");
    } else {
      const url = await fileToBase64(cover_image[0]);
      const url2 = await fileToBase64(logo_img[0]);

      props.dispatch(
        Action.addEvent({
          name,
          phone_number,
          address,
          location_id: location_id.id,
          description,
          cover_image: { name: cover_image[0].name, data: url },
          logo_img: { name: logo_img[0].name, data: url2 },
          menu,
          start_time,
          end_time,
          comments,
          expected_guests,
          expected_hourly_guests,
          qr_isActive,
        })
      );
    }
  };

  const HeaderText = {
    fontSize: "24px",
    fontWeight: "600",
  };
  return (
    <div className="bg-light container-fluid py-1">
      <div className="container">
        <Card className="p-5 w-75 mt-0 mx-auto">
          {step === 1 ? (
            <>
              <div className="text-start form-legend pb-5 fs-24 fw-600">
                Event Details
              </div>
              <Form id="register-form" autoComplete="off" onSubmit={handleStep}>
                <EventDetails
                  values={values}
                  setValues={setValues}
                  handleChange={handleChange}
                  handleFile={handleFile}
                  handleStep={handleStep}
                />
              </Form>
            </>
          ) : step === 2 ? (
            <>
              <div className="text-start form-legend pb-5 fs-24 fw-600">
                Event Scedule
              </div>
              <Form id="email-form" onSubmit={handleStep} autoComplete="off">
                <EventSchedule
                  values={values}
                  handleChange={handleChange}
                  handleStep={handleStep}
                  setValues={setValues}
                  handleCreateOutlet={handleCreateOutlet}
                  handleStepPrev={handleStepPrev}
                />
              </Form>
            </>
          ) : step === 3 ? (
            <>
              <div className="text-start form-legend pb-5 fs-24 fw-600">
                Upload Menu
              </div>
              <Form
                id="menu-form"
                onSubmit={handleCreateOutlet}
                autoComplete="off"
              >
                <CreateMenu
                  values={values}
                  handleChange={handleChange}
                  setValues={setValues}
                  handleStep={handleStep}
                  handleCreateOutlet={handleCreateOutlet}
                  handleStepPrev={handleStepPrev}
                  props={props}
                />
              </Form>
            </>
          ) : null}
        </Card>
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
    event: state.event,
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Index));
