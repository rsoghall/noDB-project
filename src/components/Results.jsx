import React, { Component } from "react";
import Result from "./Result";
import moment from "moment";

class Results extends Component {
  constructor() {
    super();

    this.state = {
      date: moment().format("M-DD-YY"),
      time: moment().format("h:mm A"),
      bloodGlucose: "",
      a1C: null
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let bg = this.state;

    this.props.handleCreateBG(bg);
    this.setState({
      date: moment().format("M-DD-YY"),
      time: moment().format("h:mm A"),
      bloodGlucose: '',
      a1C: null
    });
  };
  render() {
    const { blood, updateBG, deleteBG } = this.props;
    const { date, time, bloodGlucose } = this.state;
    return (
      <div className="inputResultsForm">
        
        <form className="inputForm" onSubmit={this.handleClick}>
          
          <input 
            onChange={this.handleChange}
            value={date}
            type="text"
            name="date"
            placeholder="Date"
          />
          <input
            onChange={this.handleChange}
            value={time}
            type="text"
            name="time"
            placeholder="Time"
          />
          <input
            onChange={this.handleChange}
            value={bloodGlucose}
            type="text"
            name="bloodGlucose"
            placeholder="Blood Glucose"
          />
          <button type="submit">Get A1c</button>
        </form>
        {blood.map(bg => {
          return (
            <Result
              key={bg.id}
              bg={bg}
              updateBG={updateBG}
              deleteBG={deleteBG}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
