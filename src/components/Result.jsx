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
        const {date, time, bloodGlucose} = this.state
        this.props.add(date, time, bloodGlucose)
        this.setState({
          date: '',
          time: '',
          bloodGlucose: null
        })  
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

    handleUpdateClick = () => {
        this.props.updateBG(this.state)
        this.setState({
            edit: false
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
      <form onSumbit={this.handleSubmit}>
        <input onChange={this.handleChange} value={date} type="text" name="date" placeholder="Date"/>
        <input onChange={this.handleChange} value={time} type="text" name="time" placeholder="Time"/>
        <input onChange={this.handleChange} value={bloodGlucose} type="number" name="bloodGlucose" placeholder="Blood Glucose"/>
        <button onClick={this.handleUpdateClick}> Edit BG </button>
        <button onClick={this.handleDeleteClick}> Delete BG </button>
      </form>
    ) : (
      <div style={{
            display:'flex', 
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            width: '100vw',
            // position:'absolute',
            // marginLeft:'13rem',
            borderBottom: '1px solid #C9D4DE'
            }}>
        <h3>{this.props.bg.date}</h3>
        <h3>{this.props.bg.time}</h3>
        <h3>{this.props.bg.bloodGlucose}</h3>
        <h3>{this.props.bg.a1C}</h3>
        <button onClick={this.handleEditClick}>edit</button>
      </div>

    )
  }
}

export default Result
