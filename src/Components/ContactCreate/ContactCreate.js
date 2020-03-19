import React, {Fragment,Component} from 'react'
import "./ContactCreate.css"

class ContactCreate extends Component{

    state = {
        name:null,
        email:null,
        phone:null,
        address:null,
        avatar: null,
        gender: null
    }

    getName = (event) =>{
        this.setState({
            name: event.target.value
        });
    }
    getPhone = (event) =>{
        this.setState({
            phone: event.target.value
        });
    }
    getEmail = (event) =>{
        this.setState({
            email: event.target.value
        });
    }
    getAvatar = (event) =>{
        this.setState({
            avatar: event.target.value
        });
    }

    getGender = (event) =>{
       
        this.setState({
            gender:  (document.getElementById("gridRadios1").checked) ? "men" : "women"
        });
    }
    

    submitForm = (event)=>{
        event.preventDefault();
        const {name,avatar,phone,email,gender} = this.state;
        this.props.contactCreate(name,avatar,phone,email,gender);
    }

    render(){
        return(
            <Fragment>
                    <form onSubmit={this.submitForm}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name contact</label>
                        <input onChange={this.getName} type="text" class="form-control" placeholder="Enter name"></input>
                    </div> 
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone contact</label>
                        <input onChange={this.getPhone} type="tel" class="form-control" placeholder="Enter phone"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email contact</label>
                        <input onChange={this.getEmail} type="email" class="form-control" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group" onClick={this.getGender}>
                        <label for="exampleInputEmail1">Gender</label>
                        <div class="form-check">
          <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
          <label class="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
          <label class="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Avatar contact</label>
                        <input onChange={this.getAvatar} type="number" min="1" max="99" class="form-control" placeholder="Select number avatar"></input>
                    </div>
 
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Fragment>

        );
    }
}

export default ContactCreate;