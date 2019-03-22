import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results';
import AverageA1c from './AverageA1c';




class A1cResults extends Component {
    constructor (){
        super();
        this.state ={
            blood: []
        }
    }

    componentDidMount() {
        axios.get('/api/blood').then(res => {
          console.log(res.data)
          this.setState({
            blood: res.data
          })
        }).catch(err => {
          console.log('The error is', err)
        })
      }

    updateBG = (bg) => {
        axios.put(`/api/blood/${bg.id}`, bg)
        .then(res => {
            this.setState({
                blood: res.data
            })
        }).catch(err => console.log('There is an error in update', err))
    }  


    createBG = (bg) => {
        axios.post('api/blood', bg)
        .then(res => {
            this.setState({
                blood: res.data
            })
        }).catch(err => console.log('This is the error', err))
    }

    deleteBG = (id) => {
        axios.delete(`/api/blood/${id}`)
        .then(res => {
            this.setState({
                blood: res.data
            })
        }).catch(err => console.log('This is the error', err))
    }
  render() {
    return (
      <div>
          <Results 
            blood={this.state.blood}
            handleCreateBG={this.createBG}
            updateBG={this.updateBG}
            deleteBG={this.deleteBG}
            />
            <div className="Average">
              <AverageA1c
                 blood={this.state.blood}/>
            </div>
        
      </div>
    )
  }
}

export default A1cResults
