import React from "react";
import Text from "./text";
const request = require("superagent");

const webform = "https://formcarry.com/s/6__zVmrmm7p";

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        email: "",
        message: "",
      },
      response: {
        error: "",
        success: "",
      },
      fadeout: false,
    };
    this.onValue = this.onValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.testEmail = this.testEmail.bind(this);
  }

  onValue(field, value) {
    const { request } = this.state;
    const nextRequest = Object.assign(request, { [field]: value });
    this.setState({ request: nextRequest });
  }

  onSubmit(event) {
    event.preventDefault();
    this.sendReq();
  }

  async sendReq() {
    const res = await request
      .post(webform)
      .set("Accept", "application/json")
      .send(this.state.request);
    this.displayResponseStatus(res.statusType);
  }

  displayResponseStatus(response) {
    switch (response) {
      case 2:
        this.setState({
          response: {
            success: "Message received successfully. Thank you.",
          },
        });
        break;
      case 4:
        this.setState({
          response: {
            error:
              "Error sending message. Please check your details or try again later.",
          },
        });
        break;
      case 5:
        this.setState({
          response: {
            error: "Server error. Please try again later.",
          },
        });
        break;
      default:
        this.setState({
          response: {
            error:
              "Error sending message. Please check your details or try again later.",
          },
        });
        break;
    }
    window.setTimeout(() => {
      this.setState({ fadeout: true });
      window.setTimeout(() => {
        this.setState({
          response: { error: "", success: "" },
          request: { email: "", message: "" },
          fadeout: false,
        });
      }, 500);
    }, 2000);
  }

  testEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.toLowerCase()
    );
  }

  render() {
    const { request, response, fadeout } = this.state;
    const { error, success } = response;
    const { email, message } = request;
    const styles = fadeout ? "fadeout" : "fadein";
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <Text
              type="email"
              field="email"
              placeholder="Your email"
              value={email}
              error="Incorrect email format"
              validateFn={(value) => this.testEmail(value)}
              context={this}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Text
              type="text"
              multiline
              field="message"
              placeholder="Your message"
              value={message}
              context={this}
            />
          </div>
        </div>
        {(() => {
          if (!!success) {
            return (
              <span className={styles}>
                <span className="success">{success}</span>
              </span>
            );
          } else if (!!error) {
            return (
              <span className={styles}>
                <span className="error">{error}</span>
              </span>
            );
          } else {
            return (
              <button
                className="fadein pink"
                name="submit"
                value="submit"
                disabled={!this.testEmail(email)}
                onClick={this.onSubmit}
              >
                submit
              </button>
            );
          }
        })()}
      </div>
    );
  }
}
