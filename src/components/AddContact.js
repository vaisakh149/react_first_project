import React, { Component } from 'react'

 class AddContact extends Component {
   state ={
     name: "",
     email:""
   };
   add = (e) =>{
     e.preventDefault();
     if(this.state.name=== "" || this.state.email===""){
       alert('All fields are mandatory');
       return;
     }
    //  this will send the input feild valuses to the app component
     this.props.addcontactHamdler(this.state);
    //  to remve the emal and name we need to change the state
    this.setState({name:"",email:""});
   }
  render() {
    return (
      <div className='ui container main'>
          <h2 style={{position:'relative', width:'100%'}} >add Contact</h2>
          <form className='ui form' onSubmit={this.add}>
              <div className='field'>
                <label>Name</label>
                <input type='text'
                 name='name' 
                 placeholder='Your Name'
                 value={this.state.name}
                 onChange={(e)=>this.setState({name:e.target.value})}/>
              </div>
              <div className='field'>
                <label>Email</label>
                <input type='email' name='email' placeholder='Your email'
                 value={this.state.email}
                 onChange={(e)=>this.setState({email:e.target.value})}/>
              </div>
              <button className='ui button blue'>Add</button>
          </form>
      </div>
    )
  }
}
export default AddContact;