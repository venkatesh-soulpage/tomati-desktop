import React from "react";

function Faq() {
  const FAQStyle = {
    border: "1px solid #C3CAD8",
    borderRadius: "12px",
    background: "#fff",
    color: "#2C3A56",
    marginTop: "32px",
  };

  const HeadingStyle = {
    fontSize: "36px",
    fontWeight: "semibold",
    lineHeight: "52px",
    color: "#2C3A56",
    marginTop: "32px",
  };

  const FAQ = ({ Q }) => (
    <div className="row">
      <div className="col-12 p-3" style={FAQStyle}>
        <div className="row">
          <div className="col-10" style={{ fontSize: "20px" }}>
            {Q}
          </div>
          <div className="col-2 text-right">+</div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ background: "#F5F6F9" }} id="faq">
      <div className="row p-0 m-0">
        <div className="col-md-4 col-11 mx-auto mt-5">
          <p className="text-center" style={HeadingStyle}>
            Frequently Asked Questions
          </p>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-md-4 mx-auto pb-5 mb-5 col-11">
          <FAQ Q="Can this work in my venue?" />
          <FAQ Q="How is Tomati different?" />
          <FAQ Q="How will this drive savings in my business?" />
        </div>
      </div>
    </div>
  );
}

export default Faq;
