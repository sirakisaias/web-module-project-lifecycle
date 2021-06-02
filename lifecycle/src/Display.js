import React, { Component } from 'react'
import axios from 'axios'

export default class Display extends Component{

    state = {
        followers:[],
    }

    componentDidMount(){
        axios
        .get('https://api.github.com/users/sirakisaias/followers')
        .then(res => {
            console.log('follower', res)
            this.setState ({
               followers: res.data
            })
        })
        .catch()
    }
    render() {

        const {data} = this.props

        return (
            <div>
                <h1>{data.bio}</h1>    
                <h3>Name: {data.name}, from: {data.location}</h3>
                <a href={data.html_url}>github link</a>
                <p>followed by: {this.state.followers.login}</p>
            </div>
        )
    }
}
