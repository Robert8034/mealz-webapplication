import React, { Component} from "react"
import "./index.css";
var title;
var content;
var id;

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.content = this.props.content;
        this.id = this.props.id;
    }

    alertFunction = async(str) => {
        await alert(str);
    }

    render() {
        return (
            <div className="recipe">
                <div className="recipe-text">
                    <h1 onClick={() => {
                    this.alertFunction("Test");
                    } }>{this.title}</h1>
                    <p>{this.content}</p>
                </div>
                <div className="recipe-image">
                </div>
            </div>
            
        )
    }
}