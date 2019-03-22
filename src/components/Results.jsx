import React, { Component } from 'react'
import Result from './Result'

class Results extends Component {
    constructor(){
        super();

        this.state = {
            date: '',
            time: '',
            bloodGlucose: null,
            a1C: null
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target

        this.setState({
          [name]: value
        })
    }

    handleClick = () => {
      let bg = this.state

      this.props.handleCreateBG(bg)
    }
  render() {
    const {blood, updateBG, deleteBG} = this.props
    return (
      <div>
        <h2>Input Blood Glucose Reading</h2>
        <form>
          <input onChange={this.handleChange} type="text" name="date" placeholder="Date"/>
          <input onChange={this.handleChange} type="text" name="time" placeholder="Time"/>
          <input onChange={this.handleChange} type="number" name="bloodGlucose" placeholder="Blood Glucose"/>
          <button onClick={this.handleClick}>Get A1c</button>
        </form>
      {blood.map(bg => {
      return <Result 
        key={bg.id}
        bg={bg}
        updateBG={updateBG}
        deleteBG={deleteBG}
        />
      })}
      </div>
    )
  }
}

export default Results
