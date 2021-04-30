import Recipe from "components/recipes"
import TimelineTop from "components/timelineTop"
import React, { Component} from "react"
import { Container, Button} from "react-bootstrap"
import { Post, Get } from "services/shared/api/Api";
import ApiActions from "services/shared/api/ApiActions";
import "./index.css"

export default class Timeline extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            index: 0
        }
        this.loadMoreRecipes = this.loadMoreRecipes.bind(this);
    }

    async componentDidMount() {
        const result = await Post(ApiActions.getRecipes, this.state.index);
        
        var recipes = [];

        var newRecipes = JSON.parse(await result.text());

        Array.prototype.push.apply(recipes, newRecipes);

        var index = newRecipes.length;

        this.setState({index: index, recipes: recipes});
    }

    async loadMoreRecipes() {
        const result = await Post(ApiActions.getRecipes, this.state.index);
        
        var recipes = this.state.recipes;

        var newRecipes = JSON.parse(await result.text());

        Array.prototype.push.apply(recipes, newRecipes);

        var index = this.state.index + newRecipes.length

        this.setState({index: index, recipes: recipes});

    }

    renderPage = () => {
        const renderedRecipes = this.state.recipes.map(function(recipe){
            return <Recipe title={recipe.title} content={recipe.content} id={recipe.id}></Recipe>
        })

        return (
            <Container>
                <TimelineTop></TimelineTop>
                {renderedRecipes}
                <Button variant="dark" size="lg" block onClick={this.loadMoreRecipes} className="loadMoreButton">Load more recipes</Button> 
            </Container>
        )
    }

    render() {
        return (
            this.renderPage()
        )
    }
}