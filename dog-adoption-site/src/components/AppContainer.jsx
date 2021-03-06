import React, { Component } from 'react'
import AvailableDogs from './AvailableDogs'
import AdoptionForm from './AdoptionForm'
class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // dogArray is not defined as a property of state
        }
    }
    updateDogArray = (updatedArray) => {
        this.setState({ dogArray: updatedArray })
    }
    render() {
        return (
            <div>

                <AvailableDogs />
                <AdoptionForm />
            </div>
        )
    }
}



export default AppContainer;