import React from 'react';
import Booth from '../components/booth';

export default {
  title: 'Booth',
  component: Booth,
};

const Template = (args) => <Booth {...args} />;

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
