import { Component } from "react";
import ApiActions from "services/shared/api/ApiActions";
import { Get, Post } from "services/shared/api/Api";
import Cookies from "universal-cookie"
import Request from "components/request"
import NavBar from "components/navbar"
import { Container, Form, Button } from "react-bootstrap"
import "./index.css";

export default class Requests extends Component {
    constructor() {
        super();
        this.state = {
            requests: [],
            role: ""
        }
        this.upgradeToModerator = this.upgradeToModerator.bind(this);
        this.upgradeToChef = this.upgradeToChef.bind(this);
        this.upgradeToAdmin = this.upgradeToAdmin.bind(this);
    }

    async componentDidMount() {
        const result = await Get(ApiActions.getRole);
        if (result.status === 200) {
            var role = await result.text();
            this.setState({role: role});
        }

        console.log(role);

        if (this.state.role === "Moderator" || this.state.role === "Admin") {
            const result2 = await Get(ApiActions.getRequests);
            if (result2.status === 200) {
                var newRequests = JSON.parse(await result2.text());
                this.setState({requests: newRequests})
            }
        }
      
    }

    async upgradeToChef() {
        const input = await Post(ApiActions.fetchUserId);
        var request = {
            UserId: JSON.parse(await input.text()),
            RequestType: 0
        }

        const result = await Post(ApiActions.postRequest, request)
    }

    async upgradeToModerator() {
        const input = await Post(ApiActions.fetchUserId);
        var request = {
            UserId: JSON.parse(await input.text()),
            RequestType: 1
        }

        const result = await Post(ApiActions.postRequest, request)
    }

    async upgradeToAdmin() {
        const input = await Post(ApiActions.fetchUserId);
        var request = {
            UserId: JSON.parse(await input.text()),
            RequestType: 2
        }

        const result = await Post(ApiActions.postRequest, request)
    }


    checkLogin = () => {
        if ((new Cookies().get("Jwt") !== undefined) && (this.state.role === "Chef" || this.state.role === "Moderator" || this.state.role === "Admin")) {
            if (this.state.role === "Moderator" || this.state.role === "Admin") {
                
                console.log(this.state.requests);
                const renderedRequests = this.state.requests.map(function(request){
                    return <Request requestId={request.requestId} requestType={request.requestType} userId={request.userId}></Request>
                })

                return (
                    <div className="requests">
                        <NavBar></NavBar>
                        <Container className="addRequestsContainer">
                            <h2>Requests</h2>
                            {renderedRequests}
                        </Container>
                        {(() => {
                            if (this.state.role === "Moderator") {
                                return (
                                    <Container className="addRequestContainer">
                                    <h2>Request</h2>
                                    <Button variant="dark" className="button" size="lg" block onClick={this.upgradeToAdmin}>Request upgrade to Admin</Button> 
                                    </Container>
                                )
                            }
                        })()}
                    </div>
                )
            }

            if (this.state.role === "Chef" ) {
                return (
                    <div className="requests">
                        <NavBar></NavBar>
                        <Container className="addRequestContainer">
                        <h2>Request</h2>
                        <Button variant="dark" className="button" size="lg" block onClick={this.upgradeToModerator}>Request upgrade to Moderator</Button> 
                        </Container>
                    </div>
                ) 
            }
        }

        return (
            <div className="requests">
                    <NavBar></NavBar>
                    <Container className="addRequestContainer">
                    <h2>Request</h2>
                    <Button variant="dark" className="button" size="lg" block onClick={this.upgradeToChef}>Request upgrade to Chef</Button> 
                    </Container>
                </div>
        )  
    }

    render() {
        return (
            this.checkLogin()
        )
    }
}