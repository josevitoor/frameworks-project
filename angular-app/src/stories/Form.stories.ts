import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FormComponent } from '../components/form.component';
import { CommonModule } from '@angular/common';
import { BoothComponent } from '../components/booth.component';
import { VotingCardComponent } from '../components/votingCard.component';
import { FormsModule } from '@angular/forms'

export default {
    title: 'Form',
    component: FormComponent,
    argTypes: {
        votes: { control: 'array' },
        title: { control: 'text' },
    },
    decorators: [
        moduleMetadata({
            declarations: [VotingCardComponent, BoothComponent],
            imports: [CommonModule, FormsModule],
        }),
    ],
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
    props: args,
});

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
