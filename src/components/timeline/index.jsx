import Recipe from "components/recipes"
import React, { Component} from "react"
import { Container} from "react-bootstrap"

export default class Timeline extends Component {
    render() {
        return (
            <Container className="">
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