import React from 'react';
import './ContactForm.css';
import { Container } from 'reactstrap';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: ''
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    alert(`Your message is sent to ${this.state.email}`)
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="contactForm">
        <h1 className="titrecontact">Contact</h1>
        <h3 className="titrecontact">Des ameliorations ? Questions ? venez en discuter : </h3>

        <form className="formContainer" onSubmit={this.submitForm}>
          <fieldset>

            <div className="centerContent">
              <label className="title" htmlFor="name"> Name :</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Title movie"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>

            <div className="form-data">
              <label className="title" htmlfor="email">Email :</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Steven@Spielberg.com"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>

            <div className="form-data">
              <label className="title" htmlFor="comment"></label>
              <textarea
                type="textarea"
                name="comment"
                id="comment"
                placeholder="Tell us..."
                onChange={this.onChange}
                value={this.state.comment}
              />

              <button color="warning">send</button>
            </div>

          </fieldset>
        </form>

      </div>

    );
  }
}

export default ContactForm;