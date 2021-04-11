import { Component } from "react";
import { Post } from "services/shared/api/Api";
import { Container, Form, Button } from "react-bootstrap";
import NavBar from "components/navbar";
import ApiActions from "services/shared/api/ApiActions";
import "./index.css";
var userId = "";

export default class Account extends Component {
    constructor() {
        super();
        this.state = {
            userId: "",
            displayName: "",
            biography: "",
            email: ""
        }
    }

    async changeAccount(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        
        const result = await Post(ApiActions.updateUser, formDataObj);
        if (result.status === 200) {
            window.location.pathname = "/account";
        }
    }

    async componentDidMount() {
        const result = await Post(ApiActions.fetchUserId);
        if (result.status === 200) {
            userId = await result.text();
        }

        var json = JSON.parse(userId);

        const result2 = await Post(ApiActions.fetchAccountInfo, json);
        if (result2.status === 200) {
            const jsonData = await result2.text();
            const data = JSON.parse(jsonData);
            this.setState({userId: data.userId, displayName: data.displayName, biography: data.biography, email: data.email})
        }
        console.log(this.state);
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value})
    }

    accountPage = () => {
        console.log(this.state);
        return (
            <div className="account">
                <NavBar></NavBar>
                <Container className="accountContainer">
                    <h2>Account</h2>
                    <Form onSubmit={this.changeAccount} id="accountForm">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="What do we call you?" name="displayName" onChange={this.changeHandler} value={this.state.displayName}/>
                            <Form.Text className="text-muted">What everyone sees when you post</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Biography</Form.Label>
                            <Form.Control type="textarea" placeholder="Tell us something about yourself" name="biography" onChange={this.changeHandler} value={this.state.biography}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Your email adress" name="email" onChange={this.changeHandler} value={this.state.email}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="This is your unique ID in the system" name="userId" readOnly={true} value={this.state.userId}/>
                            <Form.Text className="text-muted">This is your unique ID in the system</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }

    render() {
        return this.accountPage();
    }
}