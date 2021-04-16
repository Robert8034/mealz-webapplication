import Recipe from "components/recipes"
import TimelineTop from "components/timelineTop"
import React, { Component} from "react"
import { Container} from "react-bootstrap"

export default class Timeline extends Component {
    render() {
        return (
            <Container>
                <TimelineTop></TimelineTop>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
            </Container>
        )
    }
}