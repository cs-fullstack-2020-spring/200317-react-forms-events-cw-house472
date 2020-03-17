import React, { Component } from 'react'

class AdoptionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogName : "",
            dogAge : "",
            dogBreed  : "",
            dogArray: []
        }
    }
formSubmit = (event) => {
    event.preventDefault();
    this.state.dogArray.push({
        name : this.state.dogName,
        age : this.state.dogAge,
        breed : this.state.dogBreed
    })
this.setState({
    dogArray : this.state.dogArray
})
    this.props.updateDogArray(this.state.dogArray)
    this.setState({dogName : "",dogAge : "",dogBreed  : ""})
}
infoChange = (event) => {
    if (event.target.name == "dogName") {
        this.setState({dogName : event.target.value})
    }else if (event.target.name == "dogAge"){
        this.setState({dogAge :event.target.value})
    }else if (event.target.name == "dogBreed"){
        this.setState({dogBreed : event.target.value})
    }
}
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Adoption Form</legend>
                        <label htmlFor=""> Dog Name</label>
                        <input onChange = {this.infoChange} value = {this.state.dogName} type="text" name="dogName" id="dogName"/>

                        <label htmlFor="">Dog Age</label>
                        <input onChange = {this.infoChange} value = {this.state.dogAge} type="number" name="dogAge" id="dogAge"/>
                        

                        <label htmlFor=""> Dog Breed</label>
                        <input onChange = {this.infoChange} value = {this.state.dogBreed} type="text" name="dogBreed" id="dogBreed"/>

                        <label htmlFor="">Dog Color</label>
                        <select name="dogColor" id="dogColor">
                            <option value="">--</option>
                            <option value="brown">Brown</option>
                            <option value="black">Black</option>
                            <option value="spotted">Spotted</option>

                        </select>
                        <button onClick = {this.formSubmit} >Submit</button>
                        
                    </fieldset>
                </form>

            </div>
        )
    }
}
export default AdoptionForm;