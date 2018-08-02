import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap'

const Question = ({ trivia }) => {

    let choices = trivia.incorrect_answers
    choices.push(trivia.correct_answer)
    // console.log("CHOICES ==> \n", choices)

    let shuffle = (arr) => {
         let currentIndex = arr.length, temporaryValue, randomIndex;

         while (0 !== currentIndex) {
             randomIndex = Math.floor(Math.random() * currentIndex);
             currentIndex -= 1;

             temporaryValue = arr[currentIndex];
             arr[currentIndex] = arr[randomIndex];
             arr[randomIndex] = temporaryValue;
         }
         return arr;
    }

    // console.log("shuffling... ", shuffle(choices))
    const { card } = styles;
    const answerList = choices.map((choice,idx) => <CardText key={idx}>{choice}</CardText>)
    // console.log('ANSWERLIST MAP ==> \n', answerList)

    const renderHTML = (escapedHTML) => React.createElement("div", {
        dangerouslySetInnerHTML: {
            __html: escapedHTML
        }
    });

    return (
        <div>
            <Card body className="text-center" style={card}>
                <CardTitle>{renderHTML(trivia.question)}</CardTitle>
                {shuffle(answerList)}
                <CardText style={{color:'red'}}><small>{trivia.correct_answer}</small></CardText>
                <Button outline color="info">Submit Answer</Button>
            </Card>
        </div>
    )
};

export default Question;

const styles = {
    card: {
        margin: 15,
        border: '1px outset grey',
    },
}