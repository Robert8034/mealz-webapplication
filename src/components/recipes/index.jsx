import React, { Component} from "react"
import "./index.css";

export default class Recipe extends Component {

    alertFunction = async(str) => {
        await alert(str);
    }

    render() {
        return (
            <div className="recipe">
                <div className="recipe-text">
                    <h1 onClick={() => {
                    this.alertFunction("Test");
                    } }>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat libero, malesuada vitae magna id, Donec bibendum lacus arcu, sed venenatis leo venenatis et.a, non gravida augue turpis in dolor. Nulla tristique ipsum lectus, at scelerisque urna porta facilisis. Pellentesque consectetur dignissim mauris eget fringilla. Suspendisse eros mauris, sodales pretium augue et, vehicula interdum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tristique eget lacus et dictum. Ut sed bibendum nisi, in porttitor justo.</p>
                </div>
                <div className="recipe-image">
                </div>
            </div>
            
        )
    }
}