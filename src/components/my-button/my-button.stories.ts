export default {
  title: 'Components/MyButton',
};

const Template = args => `<my-button text="${args.text}" color="${args.color}" </my-button>`;

export const Button = Template.bind({});
Button.args = {
  text: 'Click',
  color: 'Blue',
};
