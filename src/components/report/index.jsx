import { Component } from "react";
import { Post } from "services/shared/api/Api";
import ApiActions from "services/shared/api/ApiActions";
import { Button, Container, Form } from "react-bootstrap"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import "./index.css";

export default class Request extends Component {
    constructor(props) {
        super(props);
        this.reportId = this.props.reportId;
        this.postId = this.props.postId;
        this.reporterId = this.props.reporterId;
        this.moderation = this.props.moderation;

        this.state = {
            reportId: this.reportId,
            reporterId: this.reporterId,
            postId: this.postId,
            moderation: this.moderation,
            username: "",
            postTitle: "",
            postContent: ""
        }

        this.removeRecipe = this.removeRecipe.bind(this);
        this.falseAlarm = this.falseAlarm.bind(this);
    }

    async componentDidMount() {
        const result = await Post(ApiActions.fetchAccountInfo, this.state.reporterId);

        var username = "";
        if (result.status === 200) {
            const jsonData = await result.text();
            const data = JSON.parse(jsonData);

            username = data.displayName;
        }

        var postTitle = "";
        var postContent = "";

        const result2 = await Post(ApiActions.getRecipe, this.state.postId);
        if (result2.status === 200) {
            const jsonData = await result2.text();
            const data = JSON.parse(jsonData);

            postTitle = data.title;
            postContent = data.content;
        }

        this.setState({username: username, postTitle: postTitle, postContent: postContent});
    }

    async removeRecipe() {
        var report = {
            ReportId: this.state.reportId,
            PostId: this.state.postId,
            ReporterId: this.state.reportId
        }

        const result = await Post(ApiActions.removeRecipe, report);

        if (result.status === 200) {
            window.location.pathname = "/reports";
        }

        else {
            alert("Removal of recipe failed");
        }
    }

    async falseAlarm() {
        var report = {
            ReportId: this.state.reportId,
            PostId: this.state.postId,
            ReporterId: this.state.reportId
        }

        const result = await Post(ApiActions.removeReport, report);

        if (result.status === 200) {
            window.location.pathname = "/reports";
        }

        else {
            alert("Removal of report failed");
        }
    }

    renderPage() {
        if (this.state.moderation === true) {
            return (
                <div className="report">
                    <Container className="reportContainer">
                        <h2>{this.state.username}</h2>
                        <Form.Group>
                            <Form.Label>Report ID</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.reportId}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Reporter ID</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.reporterId}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Reporter Name</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.username}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post ID</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.postId}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.postTitle}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.postContent}></Form.Control>
                        </Form.Group>
                        <Button variant="dark" className="button" size="lg" block onClick={this.removeRecipe}>Remove Recipe</Button> 
                        <Button variant="dark" className="button" size="lg" block onClick={this.falseAlarm}>False Alarm</Button>
                    </Container>
                </div>
            )
        }
        else {
            return (
                <div className="report">
                    <Container className="reportContainer">
                        <h2>{this.state.username}</h2>
                        <Form.Group>
                            <Form.Label>Report ID</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.reportId}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Reporter ID</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.reporterId}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Reporter Name</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.username}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post ID</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.postId}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.postTitle}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control type="text" readOnly={true} value={this.state.postContent}></Form.Control>
                        </Form.Group>
                       
                    </Container>
                </div>
            )
        }
    }

    render() {
        return (
            this.renderPage()
        )
    }   
}
  