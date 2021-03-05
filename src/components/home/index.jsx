import NavBar from "components/navbar"
import Timeline from "components/timeline"
import React, { Component} from "react"

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavBar></NavBar>
                <Timeline></Timeline>
            </div>   
        )
    }
}