import React, { useState } from "react";

function Faq() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div id="faq">
      <div className="row p-0 m-0">
        <div className="col-md-4 col-11 mx-auto mt-5">
          <p className="text-center faq-header">Frequently Asked Questions</p>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-md-4 mx-auto pb-5 mb-5 col-11">
          <div className="row">
            <div className="col-12 p-3 faq-style">
              <div className="row">
                <div className="col-10">
                  <h6 className="text-weight-light faq-text">
                    Can this work in my venue?
                  </h6>
                </div>
                <div
                  className="col-2 text-right"
                  onClick={() => setShow(!show)}
                  style={{ cursor: "pointer" }}
                >
                  +
                </div>
              </div>
              {show ? (
                <div className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-3 faq-style">
              <div className="row">
                <div className="col-10">
                  <h6 className="text-weight-light faq-text">
                    Can this work in my venue?
                  </h6>
                </div>
                <div
                  className="col-2 text-right"
                  onClick={() => setShow2(!show2)}
                  style={{ cursor: "pointer" }}
                >
                  +
                </div>
              </div>
              {show2 ? (
                <div className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-3 faq-style">
              <div className="row">
                <div className="col-10">
                  <h6 className="text-weight-light faq-text">
                    How will this drive savings in my business?
                  </h6>
                </div>
                <div
                  className="col-2 text-right"
                  onClick={() => setShow3(!show3)}
                  style={{ cursor: "pointer" }}
                >
                  +
                </div>
              </div>
              {show3 ? (
                <div className="mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
