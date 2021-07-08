//for displaying single name (getting correct output)
import React, { Component,useState } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={value : " ",name:' '}
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({value:event.target.value});
}
handleSubmit(event){
  //alert(this.state.value);
  event.preventDefault();
  this.setState({
  
    name:this.state.value
  })
}  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="centered">
      <div className="header"><h1>CodeMonk Task</h1></div>
          
      <input type="text" value={this.state.value} onChange={this.handleChange} className="input1" placeholder="enter your text"></input>
   
      <h2>{this.state.name}</h2>
      <button className="final">Submit</button>
      </div>
    </form>
    )
  }
}

export default App


//for printing multiple names(followed with errors)
//please check this code

// import React, { Component,useState } from 'react'

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state ={value : " ",names:[]}
// this.handleChange=this.handleChange.bind(this);
// this.handleSubmit=this.handleSubmit.bind(this);
//   }

// handleChange(event) {
//   this.setState({value:event.target.value});
// }
// handleSubmit(event){
//   //alert(this.state.value);
//   event.preventDefault();
//   this.setState({
  
//     names:this.state.names.push(this.state.value)
//   })
// }  
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//       <div className="centered">
//       <div className="header"><h1>CodeMonk Task</h1></div>
//       <ul>
//         {
//           this.state.names.map((name,key)=>{
//             return (
//               <li>name</li>
//             )
//           })
//         }
      
//       <input type="text" value={this.state.value} onChange={this.handleChange} className="input1" placeholder="enter your text"></input>
//       </ul>
//       <h2>{this.state.name}</h2>
//       <button className="final">Submit</button>
//       </div>
//     </form>
//     )
//   }
// }

// export default App



