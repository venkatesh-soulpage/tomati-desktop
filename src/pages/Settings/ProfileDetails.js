import React from "react";
import { Form } from "react-bootstrap";
import * as Action from "_actions";
import Loading from "components/Loading";
import { CameraFill } from "react-bootstrap-icons";

function ProfileDetails({
  values,
  edit,
  handleChange,
  setSuccess,
  props,
  handleUpdateUser,
  handleImg,
  temp,
}) {
  return (
    <div>
      <div className="d-flex align-items-top">
        <div className="w-75 mr-4 mb-2">
          <Form>
            <Form.Group>
              <Form.Control
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange("first_name")}
                value={values.first_name}
                className="mb-3 h-100"
                disabled={!edit}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={values.last_name}
                onChange={handleChange("last_name")}
                required
                className="mb-3 h-100"
                disabled={!edit}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={values.email}
                onChange={(e) => {
                  setSuccess(true);
                  props.dispatch(
                    Action.updateUserError(
                      "To change email contact support on hello@tomati.app"
                    )
                  );
                }}
                required
                className="mb-3 h-100"
                disabled={!edit}
              />
            </Form.Group>
            <Form.Group>
              <button
                className="btn w-25 btn-danger mt-5"
                onClick={handleUpdateUser}
              >
                {edit ? props.auth.isFetching ? <Loading /> : "Save" : "Edit"}
              </button>
            </Form.Group>{" "}
          </Form>
        </div>
        <div className="ml-auto w-50 h-75 border p-4">
          <h4 className="text-dark fs-16">Profile Picture</h4>
          <div className="d-flex justify-content-between align-items-center">
            <img
              className="rounded-circle"
              src={temp}
              alt="pic"
              height="50px"
              width="50px"
            />
            <button className="btn h-75 btn-outline-dark" disabled={!edit}>
              <label
                htmlFor="profileImage"
                className="d-flex align-items-center cr-p m-0"
                disabled={!edit}
              >
                <CameraFill className="mr-3" />
                Add New
              </label>
            </button>
          </div>
          <Form.Group>
            <Form.File
              type="file"
              id="profileImage"
              className="d-none"
              onChange={handleImg}
              required
              disabled={!edit}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
