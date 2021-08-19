import FormComponent from '../components/Form.vue';

export default {
    title: 'Formulário',
    component: FormComponent,
};

const Template = args => ({
    components: { FormComponent },
    setup() {
        return { args };
    },
    template: '<FormComponent v-bind="args" />',
});

export const PrimaryVotingCardPage = Template.bind({});
PrimaryVotingCardPage.storyName = 'Formulário 1'
PrimaryVotingCardPage.args = {
    title: 'Segue o relator?',
    votes: [{ 'option': 'Sim', 'count': 6 }, { 'option': 'Não', 'count': 2 }],
}

export const SecondaryVotingCardPage = Template.bind({});
SecondaryVotingCardPage.storyName = 'Formulário 2'
SecondaryVotingCardPage.args = {
    title: 'Continuamos amanhã?',
    votes: [{ 'option': 'Sim', 'count': 3 }, { 'option': 'Não', 'count': 3 }, { 'option': 'Talvez', 'count': 2 }],
}

