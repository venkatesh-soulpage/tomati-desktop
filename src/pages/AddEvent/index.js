import React, { useEffect, useState } from "react";
// redux
import { addEvent } from "_actions/event";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getLocationRegister } from "_actions/auth";
// local components
import EventDetails from "./components/EventDeatails";
import CreateMenu from "./components/CreateMenu";
import EventSchedule from "./components/EventSchedule";
// react icons
import { Card, Form } from "react-bootstrap";
// lodash
import _ from "lodash";

const Index = (props) => {
  const [tempMenu, setMenu] = useState(null);
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
  });
  const { step } = values;

  useEffect(() => {
    props.dispatch(getLocationRegister());
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

  console.log(values);

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
    } = values;

    const url = await fileToBase64(cover_image[0]);
    const url2 = await fileToBase64(logo_img[0]);

    props.dispatch(
      addEvent({
        name,
        phone_number,
        address,
        location_id,
        description,
        cover_image: { name: cover_image[0].name, data: url },
        logo_img: { name: logo_img[0].name, data: url2 },
        menu,
        start_time,
        end_time,
        comments,
        expected_guests,
        expected_hourly_guests,
      })
    );
  };

  const HeaderText = {
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: "600",
  };
  return (
    <div className="bg-light container-fluid py-1">
      <div className="container">
        <Card className="p-5 w-75 mt-0 mx-auto">
          {step === 1 ? (
            <>
              <div style={HeaderText} className="text-start form-legend pb-5">
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
              <div style={HeaderText} className="text-start form-legend pb-5">
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
              <div style={HeaderText} className="text-start form-legend pb-5">
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
    </div>
  );
};

function mapStateToProps(state) {
  return { event: state.event, auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));
