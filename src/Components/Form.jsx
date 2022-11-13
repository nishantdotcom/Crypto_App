import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      skill: "",
      gender: "Male",
      email: "",
      dateofBirth: "",
    };
  }
  hadleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleSecondNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSkillChange = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangeDob = (event) => {
    this.setState({
      dateofBirth: event.target.value,
    });
  };
  handleSubmitForm = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <div>
          <label>Enter First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          ></input>
        </div>

        <div>
          <label>Enter Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleSecondNameChange}
          ></input>
        </div>

        <div>
          <label>Enter Your skill</label>
          <select
            name="skill"
            value={this.state.skill}
            onChange={this.handleSkillChange}
          >
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="Nodejs">Nodejs</option>
            <option value="3js">3js</option>
          </select>
        </div>

        <div value={this.state.gender} onChange={this.hadleGenderChange}>
          <label>
            Enter Gender :
            <label>
              Male
              <input type="radio" name="gender" value="Male"></input>
            </label>
            <label>
              Female <input type="radio" name="gender" value="Female"></input>
            </label>
          </label>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          ></input>
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateofBirth"
            value={this.state.dateofBirth}
            onChange={this.handleChangeDob}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
