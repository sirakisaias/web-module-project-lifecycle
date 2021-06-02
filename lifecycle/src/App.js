import React from 'react'
import axios from 'axios'
import Display from './Display';

export default class App extends React.Component {

 state = {
      user_name:[],
  }
 componentDidMount(){
   axios
   .get('https://api.github.com/users/sirakisaias')
   .then(res => {
     console.log(res)
     this.setState ({
       user_name: res.data
     })
   })
   .catch (err =>{
     console.log(err)
   })
 }
  render() {
    return (
      <div>
        {/* <h1>Sirak folders</h1> */}
        {/* <p>{this.state.user_name}</p> */}
        <Display data={this.state.user_name}/>
      </div>
    )
  }
}

