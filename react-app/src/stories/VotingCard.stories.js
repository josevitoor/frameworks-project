import React from 'react';
import VotingCard from '../components/votingCard';


export default {
    title: 'VotingCard',
    component: VotingCard,
    argTypes: {
        state: {
            options: ['open', 'close'],
            control: { type: 'radio' }
        },
    },
};

const Template = (args) => <VotingCard {...args} />;

export const PrimaryVotingCardPage = Template.bind({});
PrimaryVotingCardPage.storyName = 'Segue o relator'
PrimaryVotingCardPage.args = {
    title: 'Segue o relator?',
    state: 'open',
    votes: [{ 'option': 'Sim', 'count': 6 }, { 'option': 'Não', 'count': 2 }],
}

export const SecondaryVotingCardPage = Template.bind({});
SecondaryVotingCardPage.storyName = 'Continuamos amanhã'
SecondaryVotingCardPage.args = {
    title: 'Continuamos amanhã?',
    state: 'close',
    votes: [{ 'option': 'Sim', 'count': 3 }, { 'option': 'Não', 'count': 3 }, { 'option': 'Talvez', 'count': 2 }],
}