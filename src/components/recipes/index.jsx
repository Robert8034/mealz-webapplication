import React, { Component} from "react"
import { Button } from "react-bootstrap";
import "./index.css";
import ApiActions from "services/shared/api/ApiActions";
import { Post } from "services/shared/api/Api";

var title;
var content;
var id;

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.content = this.props.content;
        this.id = this.props.id;

        this.state = {
            postid: this.props.id,
            reporterid: null
        }
        this.reportRecipe = this.reportRecipe.bind(this);
    }

    alertFunction = async(str) => {
        await alert(str);
    }

    async reportRecipe() {
        const result = await Post(ApiActions.fetchUserId);
        if (result.status === 200) {
            var userId = await result.text();
            await this.setState({postid: this.id, reporterid: JSON.parse(userId)});
            console.log(this.id);
            console.log(userId);

            const result2 = await Post(ApiActions.reportRecipe, this.state)
            
        }
    }

    render() {
        return (
            <div className="recipe">
                <div className="recipe-text">
                    <h1>{this.title}</h1>
                    <p>{this.content}</p>
                </div>
                <div className="recipe-image">
                </div>
                <div className="report-button">
                    <Button variant="dark" className="button" size="m" block onClick={this.postPage}>Likes:</Button> 
                    <Button variant="dark" className="button" size="m" block onClick={this.reportRecipe}>Report</Button> 
                </div>
            </div>   
        )
    }
}