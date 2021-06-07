import { Component } from "react";
import ApiActions from "services/shared/api/ApiActions";
import { Get, Post } from "services/shared/api/Api";
import Cookies from "universal-cookie"
import Report from "components/report"
import NavBar from "components/navbar"
import { Container, Form, Button, Navbar } from "react-bootstrap"
import "./index.css";

export default class Reports extends Component {
    constructor() {
        super();
        this.state = {
            reports: [],
            myReports: [],
            role: ""
        }
    }

    async componentDidMount() {
        const result = await Get(ApiActions.getRole);
        if (result.status === 200) {
            var role = await result.text();
            this.setState({role: role});
        }

        console.log(role);

        if (this.state.role === "Moderator" || this.state.role === "Admin") {
            const result2 = await Get(ApiActions.getReports);
            if (result2.status === 200) {
                var reports = JSON.parse(await result2.text());
                this.setState({reports: reports})
            }
        }

        const result3 = await Post(ApiActions.fetchUserId);

        if (result3.status === 200) {
            var id = await result3.text();
            const result4 = await Post(ApiActions.getMyReports, JSON.parse(id));

            if (result4.status === 200) {
                var myReports = JSON.parse(await result4.text());
                this.setState({myReports: myReports});
                console.log(this.state.myReports);
            }
        }
    }

    checkLogin = () => {
        const renderedMyReports = this.state.myReports.map(function(myReport){
            return <Report reportId={myReport.reportId} postId={myReport.postId} reporterId={myReport.reporterId} moderation={false}></Report>
        })

        if ((new Cookies().get("Jwt") !== undefined) && (this.state.role === "Moderator" || this.state.role === "Admin")) {
            const renderedReports = this.state.reports.map(function(report){
                return <Report reportId={report.reportId} postId={report.postId} reporterId={report.reporterId} moderation={true}></Report>
            })

            return (
            <div className="reports">
                <NavBar></NavBar>
                <Container className="allReports">
                    <h2>Reports</h2>
                    {renderedReports}
                </Container>
                <Container>
                    <h2>My Reports</h2>
                    {renderedMyReports}
                </Container>
            </div>
            )
        }

        return (
            <div className="reports">
            <NavBar></NavBar>
            <Container className="myReports">
                <h2>My Reports</h2>
                {renderedMyReports}
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