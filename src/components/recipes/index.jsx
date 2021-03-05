import React, { Component} from "react"

export default class Recipe extends Component {

    alertFunction = async(str) => {
        await alert(str);
    }

    render() {
        return (
            <h1 onClick={() => {
                this.alertFunction("Test");
                //more functions here
            } }>Hello World</h1>
        )
    }
}