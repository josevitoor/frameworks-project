import React from 'react';
import Result from '../components/result';

export default {
    title: 'Result',
    component: Result,
};

const Template = (args) => <Result {...args} />;

export const PrimaryResultPage = Template.bind({});
PrimaryResultPage.storyName = 'Votação 1'
PrimaryResultPage.args = {
    votes: [{ 'option': 'Sim', 'count': 5 }, { 'option': 'Não', 'count': 3 }],
}

export const SecondaryResultPage = Template.bind({});
SecondaryResultPage.storyName = 'Votação 2'
SecondaryResultPage.args = {
    votes: [{ 'option': 'Sim', 'count': 3 }, { 'option': 'Não', 'count': 3 }, { 'option': 'Talvez', 'count': 2 }],
}
