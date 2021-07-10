import React, { Component } from "react";
import "./Regisform.css";
import image1 from "../Image/recaplogo.png";

class Regisform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      fullname: "",
      number: "",
      nextofkinnumber: "",
      CheckNo: false,
      CheckYes: false,
      CheckYespay: false,
      CheckParent: false,
      CheckOrg: false,
      location: "",
      school: "",
      reasontojoin: "",
      infosource: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.email);
    console.log(this.state.fullname);
    console.log(this.state.number);
    console.log(this.state.nextofkinnumber);
    console.log(this.state.CheckNo);
    console.log(this.state.CheckYes);
    console.log(this.state.CheckYespay);
    console.log(this.state.CheckParent);
    console.log(this.state.CheckOrg);
    console.log(this.state.location);
    console.log(this.state.school);
    console.log(this.state.reasontojoin);
    console.log(this.state.infosource);
    event.preventDefault();

    this.setState({
      email: "",
      fullname: "",
      number: "",
      nextofkinnumber: "",
      CheckNo: false,
      CheckYes: false,
      CheckYespay: false,
      CheckParent: false,
      CheckOrg: false,
      location: "",
      school: "",
      reasontojoin: "",
      infosource: " ",
    });

    alert("Your form has just been submitted");
  };

  render() {
    return (
      <section className="container">
        <form className="col-lg-6" onSubmit={this.handleSubmit}>
          <div className="formdiv upper-div">
            <h2>Codetrain Registration Form</h2>
            <p>
              This form is the first step to register for Codetrain's program
              starting on 25th July 2020. Our admissions team will reach out to
              you after successfully submitting your form. <br /> <br />
              <span className="required"> * Required</span>
            </p>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="email">
              <h5>
                Email <span className="required"> *</span>{" "}
              </h5>

              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                placeholder="Your Email"
                required="required"
              />
            </label>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="fullname">
              <h5>
                Full Name <span className="required">*</span>{" "}
              </h5>

              <input
                type="text"
                value={this.state.fullname}
                onChange={this.handleChange}
                name="fullname"
                placeholder="Your Answer"
                required="required"
              />
            </label>
          </div>
          <br />
          <div className="formdiv number-formdiv">
            <label htmlFor="number">
              <h5>
                {" "}
                Phone Number <span className="required">*</span>{" "}
              </h5>

              <input
                type="number"
                value={this.state.number}
                onChange={this.handleChange}
                name="number"
                placeholder="Your Answer"
                required="required"
              />
            </label>
          </div>
          <br />
          <div className="formdiv number-formdiv">
            <label htmlFor="nextofkinnumber">
              <h5> Phone number of next of kin </h5>
              <h6>
                Phone number of someone we can reach out to in case your phone
                is off or not reachable. Eg, your parent, guardian or sibling,
                or spouse
              </h6>

              <input
                type="number"
                value={this.state.nextnumber}
                onChange={this.handleChange}
                name="nextofkinnumber"
                placeholder="Your Answer"
              />
            </label>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="">
              <h5>
                Can you pay 60% or more of the full Codetrain fees (GHS6000 for
                Ghanaian applicants or $1,200 for international applicants)
                <span className="required">*</span>{" "}
              </h5>{" "}
              <br />
              <input
                type="checkbox"
                name="CheckNo"
                checked={this.state.CheckNo}
                onChange={this.handleChange}
              />{" "}
              No <br /> <br />
              <input
                type="checkbox"
                name="CheckYes"
                checked={this.state.CheckYes}
                onChange={this.handleChange}
              />{" "}
              Yes
            </label>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="check2">
              <h5>
                Please indicate who is going to pay your fees
                <span className="required">*</span>{" "}
              </h5>{" "}
              <br />
              <input
                type="checkbox"
                name="check"
                name="CheckYespay"
                checked={this.state.CheckYespay}
                onChange={this.handleChange}
              />{" "}
              Yes <br /> <br />
              <input
                type="checkbox"
                name="check"
                name="CheckParent"
                checked={this.state.CheckParent}
                onChange={this.handleChange}
              />{" "}
              Parent / Sponsor <br /> <br />
              <input
                type="checkbox"
                name="check"
                name="CheckOrg"
                checked={this.state.CheckOrg}
                onChange={this.handleChange}
              />{" "}
              Organization
            </label>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="location">
              <h5>
                Location<span className="required"> *</span>{" "}
              </h5>

              <input
                type="text"
                value={this.state.location}
                onChange={this.handleChange}
                name="location"
                placeholder="Your Answer"
                required="required"
              />
            </label>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="school">
              <h5>
                Current or previous school<span className="required"> *</span>{" "}
              </h5>

              <input
                type="text"
                value={this.state.school}
                onChange={this.handleChange}
                name="school"
                placeholder="Your Answer"
                required="required"
              />
            </label>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="reasontojoin">
              <h5>
                Why do you want to join Codetrain{" "}
                <span className="required">*</span>{" "}
              </h5>

              <input
                type="text"
                value={this.state.reasontojoin}
                onChange={this.handleChange}
                name="reasontojoin"
                placeholder="Your Answer"
                required="required"
              />
            </label>
          </div>
          <br />
          <div className="formdiv">
            <label htmlFor="infosource">
              <h5>
                How did you hear about Codetrain ?{" "}
                <span className="required"> *</span>{" "}
              </h5>

              <input
                type="text"
                value={this.state.infosource}
                onChange={this.handleChange}
                name="infosource"
                placeholder="Your Answer"
                required="required"
              />
            </label>
          </div>
          <br />
          <p className="copy">
            A copy of your responses will be emailed to the address you
            provided.
          </p>{" "}
          <br />
          <div className="submit-page">
            <button type="submit" className="sub">
              Submit
            </button>

            <span className="progressb">
              {" "}
              <span className="line progress-bar"></span> Page 1 of 1
            </span>
          </div>
        </form>

        <br />

        {/* Footer */}
        <div class="text-center">
          <p className="never-submit">
            Never submit passwords through Google Forms.
          </p>

          <div className="recapture-div">
            <span>
              {" "}
              <img src={image1} className="img" alt="" />{" "}
              <span className="recaplogo">reCAPTCHA</span>{" "}
            </span>{" "}
            <br />
            <span>
              <a>Privacy</a>
              <a>Terms</a>
            </span>
          </div>

          <br />
          <div className="content">
            This content is niether created nor endorsed by Google.
            <a>Report Abuse</a> -<a>Terms of Service</a> -<a>Privacy Policy</a>
          </div>

          <h3 className="google">Google Forms</h3>
        </div>
      </section>
    );
  }
}

export default Regisform;
