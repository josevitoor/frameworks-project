import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Booth from './booth';
import VotingCard from './votingCard';
import { TextField, Container } from "@material-ui/core";
import './style.css';

export default function Form(props) {
    const [titulo, setTitulo] = useState(props.title);
    const [votesOption, setOption] = useState(props.votes.map((votes) => (
        votes.option
    )))
    const [votesCount, setCount] = useState(props.votes.map((votes) => (
        votes.count
    )))
    const [voteArray, setVoteArray] = useState(props.votes);
    const [votingState, setVotingState] = useState('close');
    const [msgState, setMsgState] = useState('close');

    const formOptions = props.votes.map((votes, index) => (
        <>
            <TextField
                id={"option" + index}
                label={"Opção " + index}
                onChange={event => {
                    setOption(votesOption.map((vote, inde) => (
                        index === inde ? event.target.value : vote
                    )));
                }}
                variant="outlined"
                margin="normal"
                size="small"
                value={votesOption[index]}
                fullWidth
                required
                error={votesOption[index].length <= 0}
            />
            <TextField
                id={"votes" + index}
                label={"Votes " + index}
                onChange={event => {
                    setCount(votesCount.map((vote, inde) => (
                        index === inde ? event.target.value : vote
                    )));
                }}
                variant="outlined"
                margin="normal"
                size="small"
                type="number"
                value={votesCount[index]}
                fullWidth
                required
                error={votesCount[index] < 0 || votesCount[index] == ''}
            />
        </>
    ))
    function validationError() {
        const votesValidation = props.votes.map((votes, index) => (
            (votesOption[index].length <= 0 || votesCount[index] <= 0 || votesCount[index] == '' || titulo.length <= 0) ? true : false
        ))
        for (var i = 0; i < votesValidation.length; i++) {
            if (votesValidation[i] == true) {
                return true;
            }
        }
        return false;
    }
    function vote(optionIndex) {
        let step = [];
        for (var i in votesOption) {
            let votes = {
                option: votesOption[i],
                count: votesCount[i]
            }
            step.push(votes);
            setVoteArray(step);
        }
        validationError() === false ? setVotingState('open') : setMsgState('open');
    }
    const panel = votingState === 'close' ? (
        <form>
            <Container component="article" maxWidth="sm">
                <TextField
                    value={titulo}
                    id="titulo"
                    onChange={event => {
                        setTitulo(event.target.value);
                    }}
                    label="Título"
                    variant="outlined"
                    margin="normal"
                    size="large"
                    fullWidth
                    required
                    error={titulo.length <= 0}
                />
                {formOptions}
                {msgState == 'open' ? <p className={'error'}>
                    É preciso preencher todos os campos!
                </p> : null}
                <Booth options={['Atualizar']} onVote={vote} />
            </Container>
        </form>
    ) : (
        <>
            <VotingCard title={titulo} state={'open'} votes={voteArray} />
        </>
    )

    return (
        panel
    );
}

Form.propTypes = {
    title: PropTypes.string,
    votes: PropTypes.array,
};