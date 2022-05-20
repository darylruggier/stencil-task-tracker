import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-tasks',
  styleUrl: 'my-tasks.scss',
  shadow: true,
})
export class MyTasks {
  @Prop() tasks: Object[];

  render() {
    return (
      <div class="my-tasks">
        {this.tasks?.map(task => (
          <my-task task={task}></my-task>
        ))}
      </div>
    );
  }
}
