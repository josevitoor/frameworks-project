import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoothComponent } from '../components/booth.component';

export default {
  title: 'Booth',
  component: BoothComponent,
  argTypes: {
    options: { control: 'array' },
  },
} as Meta;

const Template: Story<BoothComponent> = (args: BoothComponent) => ({
  props: args,
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
