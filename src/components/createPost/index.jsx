import NavBar from "components/navbar";
import { Component } from "react";
import ApiActions from "services/shared/api/ApiActions";
import { Post } from "services/shared/api/Api";
import { Container, Form, Button } from "react-bootstrap";
import "./index.css";
var userId = "";

export default class CreatePost extends Component {
    async componentDidMount() {
        const result = await Post(ApiActions.fetchUserId);
        if (result.status === 200) {
            userId = await result.text();
        }
        else {
            window.location.pathname = "/";
        }
    }

    async postRecipe(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("userId", JSON.parse(userId));
        const formDataObj = Object.fromEntries(formData.entries());

        const result = await Post(ApiActions.postRecipe, formDataObj);
        if (result.status === 200) {
            window.location.pathname = "/";
        }
    }
   
    render() {
        return (
            <div id="createPostPage">
                <NavBar></NavBar>
                <Container className="recipeContainer">
                    <h2>Share your recipe!</h2>
                    <Form onSubmit={this.postRecipe} id="recipeForm">
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="A captivating title for your recipe" name="title"/>
                            <Form.Text className="text-muted">Keep it short and simple</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Recipe</Form.Label>
                            <Form.Control type="textarea" placeholder="Put your steps for your delicious recipe here!" name="content"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}