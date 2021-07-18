import React from 'react';
import PropTypes from 'prop-types';

export default function Result(props) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const arrayCount = props.votes.map((votes, index) => (
        votes.count
    ))
    const votesTotal = arrayCount.reduce(reducer);
    const answers = props.votes.map((votes, index) => (
        <p key={index.toString()}>
            {index + 1}. {votes.option} - {votes.count} votes ({votes.count * 100 / votesTotal}%)
        </p>
    ))
    return (
        <div>
            {answers}
        </div>
    )
}

Result.propTypes = {
    votes: PropTypes.array,
};