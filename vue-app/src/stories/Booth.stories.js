import BoothComponent from '../components/Booth.vue';

export default {
    title: 'Booth',
    component: BoothComponent,
};

const Template = args => ({
    components: { BoothComponent },
    setup() {
        return { args };
    },
    template: '<BoothComponent v-bind="args" />',
});

export const PrimaryBoothPage = Template.bind({});
PrimaryBoothPage.storyName = 'Sim/Não'
PrimaryBoothPage.args = {
    options: ['Sim', 'Não'],
}

export const SecondaryBoothPage = Template.bind({});
SecondaryBoothPage.storyName = 'Sim/Não/Talvez'
SecondaryBoothPage.args = {
    options: ['Sim', 'Não', 'Talvez'],
}


