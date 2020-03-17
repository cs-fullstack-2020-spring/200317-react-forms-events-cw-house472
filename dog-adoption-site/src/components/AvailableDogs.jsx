import React, { Component } from 'react'
import AdoptionForm from './AdoptionForm'

class AvailableDogs extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        // dogArray isn't being passed as a an attribute to this child component
        // and you were missing a closing div tag on line 30 
        return (
            <div>
                <ul>
                    <li>Collie</li>
                    <li>Poodle</li>
                    <li>Beagle</li>
                    <li>Labrador</li>

                </ul>
                {
                    this.props.dogArray.map((dog, index) => {
                        return (
                            <div>
                                <p> Name: {dog.dogName} </p>
                                <p> Name: {dog.dogAge} </p>
                                <p> Name: {dog.dogBreed} </p>
                            </div>
                        )
                    })

                }

            </div>
        )
    }
}


export default AvailableDogs;