export default {
  title: 'Components/MyTask',
};

const Template = args => `<my-task task="${args.task}"> </my-task>`;

export const MyTask = Template.bind({});
MyTask.args = {
  task: {
    id: '1',
    title: 'Sample Task',
    description: 'This is a simple test task',
    dueDate: 'Tomorrow',
    reminder: false,
  },
};
