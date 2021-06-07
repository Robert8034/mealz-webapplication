import { Component } from "react";
import { Post } from "services/shared/api/Api";
import ApiActions from "services/shared/api/ApiActions";
import { Button, Container, Form } from "react-bootstrap"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import "./index.css";

export default class Request extends Component {
    constructor(props) {
        super(props);
        this.requestId = this.props.requestId;
        this.requestType = this.props.requestType;
        this.userId = this.props.userId;

        this.state = {
            requestId: this.requestId,
            userId: this.userId,
            requestType: this.requestType,
            requestTypeString: "",
            username: ""
        }

        this.approveRequest = this.approveRequest.bind(this);
        this.declineRequest = this.declineRequest.bind(this);
    }

    async componentDidMount() {
        const result = await Post(ApiActions.fetchAccountInfo, this.state.userId);

        var username = "";
        if (result.status === 200) {
            const jsonData = await result.text();
            const data = JSON.parse(jsonData);

            username = data.displayName;
        }

        var requestTypeStringVar = ""

        if (this.state.requestType === 0) requestTypeStringVar = "Upgrade to Chef";
        if (this.state.requestType === 1) requestTypeStringVar = "Upgrade to Moderator";
        if (this.state.requestType === 2) requestTypeStringVar = "Upgrade to Admin";

        this.setState({username: username, requestTypeString: requestTypeStringVar});
    }

    async approveRequest() {
        if (this.state.requestType === 0) {
            var request = {
                RequestId: this.state.requestId,
                UserId: this.state.userId,
                RequestType: this.state.requestType
            }
            const result = await Post(ApiActions.approveRequestToChef, request)

            if (result.status === 200) {
                window.location.pathname = "/requests";
            }

            else {
                console.log("Approval was not completed")
            }
        }

        if (this.state.requestType === 1) {
            var request = {
                RequestId: this.state.requestId,
                UserId: this.state.userId,
                RequestType: this.state.requestType
            }
            const result = await Post(ApiActions.approveRequestToModerator, request)

            if (result.status === 200) {
                window.location.pathname = "/requests";
            }

            else {
                console.log("Approval was not completed")
            }
        }

        if (this.state.requestType === 2) {
            var request = {
                RequestId: this.state.requestId,
                UserId: this.state.userId,
                RequestType: this.state.requestType
            }
            const result = await Post(ApiActions.approveRequestToAdmin, request)

            if (result.status === 200) {
                window.location.pathname = "/requests";
            }

            else {
                console.log("Approval was not completed")
            }
        }
    }

    async declineRequest() {
        if (this.state.requestType === 0) {
            var request = {
                RequestId: this.state.requestId,
                UserId: this.state.userId,
                RequestType: this.state.requestType
            }
            const result = await Post(ApiActions.declineRequestToChef, request)

            if (result.status === 200) {
                window.location.pathname = "/requests";
            }
        }

        if (this.state.requestType === 1) {
            var request = {
                RequestId: this.state.requestId,
                UserId: this.state.userId,
                RequestType: this.state.requestType
            }
            const result = await Post(ApiActions.declineRequestToModerator, request)

            if (result.status === 200) {
                window.location.pathname = "/requests";
            }
        }

        if (this.state.requestType === 2) {
            var request = {
                RequestId: this.state.requestId,
                UserId: this.state.userId,
                RequestType: this.state.requestType
            }
            const result = await Post(ApiActions.declineRequestToAdmin, request)

            if (result.status === 200) {
                window.location.pathname = "/requests";
            }
        }
    }

    render() {
        return (
            <div className="request">
                <Container className="requestContainer">
                    <h2>{this.state.username}</h2>
                    <Form.Group>
                        <Form.Label>Request ID</Form.Label>
                        <Form.Control type="text" readOnly={true} value={this.state.requestId}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="text" readOnly={true} value={this.state.userId}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Request Type</Form.Label>
                        <Form.Control type="text" readOnly={true} value={this.state.requestTypeString}></Form.Control>
                    </Form.Group>
                    <Button variant="dark" className="button" size="lg" block onClick={this.approveRequest}>Approve</Button> 
                    <Button variant="dark" className="button" size="lg" block onClick={this.declineRequest}>Decline</Button>
                </Container>
            </div>
        )
    }
}