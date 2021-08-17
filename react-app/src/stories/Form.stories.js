import React from 'react';
import Form from '../components/form';

export default {
    title: 'Form',
    component: Form,
};

const Template = (args) => <Form {...args} />;

export const PrimaryResultPage = Template.bind({});
PrimaryResultPage.storyName = 'Formulário 1'
PrimaryResultPage.args = {
    title: 'Segue o relator?',
    votes: [{ 'option': 'Sim', 'count': 5 }, { 'option': 'Não', 'count': 3 }],
}

export const SecondaryResultPage = Template.bind({});
SecondaryResultPage.storyName = 'Formulário 2'
SecondaryResultPage.args = {
    title: 'Continuamos amanhã?',
    votes: [{ 'option': 'Sim', 'count': 3 }, { 'option': 'Não', 'count': 3 }, { 'option': 'Talvez', 'count': 2 }],
}
