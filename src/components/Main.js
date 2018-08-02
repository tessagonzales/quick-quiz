import React, { Component } from 'react'
import axios from 'axios';
import Question from './Question';


class Main extends Component {

    state = {
        trivia: [],
    }

    componentDidMount() {
        axios.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`)
        .then(res => {
            this.setState({
                trivia: res.data.results
            })
        })
    }

    render () {
        const { container } = styles;
        const trivias = this.state.trivia.map(trivia => <Question key={trivia.question} trivia={trivia} />)

        return (
            <div style={container}>
                {trivias}
            </div>
        )
    }
};

export default Main;

const styles = {
    container: {
        margin: 50,
        padding: 20,
        border: '1px outset lightgrey'
    }
}