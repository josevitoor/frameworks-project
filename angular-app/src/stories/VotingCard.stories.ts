import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { VotingCardComponent } from '../components/votingCard.component';
import { CommonModule } from '@angular/common';
import { BoothComponent } from '../components/booth.component';
import { ResultComponent } from '../components/result.component';

export default {
    title: 'VotingCard',
    component: VotingCardComponent,
    decorators: [
        moduleMetadata({
            declarations: [ResultComponent, BoothComponent],
            imports: [CommonModule],
        }),
    ],
    argTypes: {
        title: { control: 'text' },
        votes: { control: 'array' },
        state: {
            options: ['open', 'close'],
            control: { type: 'radio' }
        },
    },
} as Meta;

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
    props: args,
});

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