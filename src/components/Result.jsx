import React, { Component } from 'react'

class Result extends Component {
    constructor(props) {
        super(props)
        this.state ={
            id: props.bg.id,
            time: props.bg.time,
            date: props.bg.date,
            bloodGlucose: props.bg.bloodGlucose,
            a1C: props.bg.a1C,
            edit: false
        }

    }

    handleSubmit =(e) => {
        e.preventDefault()
        this.props.updateBG(this.state)
        this.setState({
          date: '',
          time: '',
          bloodGlucose: '',
          edit: false
        })
       
      }


    
    calculateA1c =() => {
      const {bloodGlucose} = this.state
        let a1C = (46.7 + +bloodGlucose)/28.7
        return (a1C.toFixed(1))

    }
    
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value,   
            
        })
    }

    handleEditClick = () => {
        this.setState({
            edit: true
        })
    }

    handleDeleteClick = () => {
        this.props.deleteBG(this.state.id)
        this.setState({
            edit: false
        })
    }
  render() {
      let {date, time, bloodGlucose} = this.state
    return this.state.edit ? (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={date} type="text" name="date" placeholder="Date"/>
        <input onChange={this.handleChange} value={time} type="text" name="time" placeholder="Time"/>
        <input onChange={this.handleChange} value={bloodGlucose} type="number" name="bloodGlucose" placeholder="Blood Glucose"/>
        <input disabled value={this.calculateA1c()} type="text"/>
        <div>
          <button type="submit"> Submit </button>
          <button onClick={this.handleDeleteClick}> Delete BG </button>
        </div>
      </form>
    ) : (
      <div className="inputData">
          <h2>{this.props.bg.date}</h2>
          <h2>{this.props.bg.time}</h2>
          <h2>{this.props.bg.bloodGlucose}</h2>
          <h2>{this.props.bg.a1C.toFixed(1)}</h2>
          <button onClick={this.handleEditClick}>edit</button>
    
      </div>

    )
  }
}

export default Result
