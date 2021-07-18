import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultComponent } from '../components/result.component';

export default {
    title: 'Result',
    component: ResultComponent,
    argTypes: {
        votes: { control: 'array' },
    },
} as Meta;

const Template: Story<ResultComponent> = (args: ResultComponent) => ({
    props: args,
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
