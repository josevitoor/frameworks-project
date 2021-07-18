import ResultComponent from '../components/Result.vue';

export default {
    title: 'Result',
    component: ResultComponent,
};

const Template = args => ({
    components: { ResultComponent },
    setup() {
        return { args };
    },
    template: '<ResultComponent v-bind="args" />',
});

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
