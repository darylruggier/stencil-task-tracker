import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-tasks',
  styleUrl: 'my-tasks.scss',
  shadow: true,
})
export class MyTasks {
  @Prop() tasks: Object[];
  @Prop() onToggle: any; // use event ?
  @Prop() onDelete: any; // use event ?

  render() {
    return (
      <div class="my-tasks">
        {this.tasks?.map((task, index) => (
          <my-task key={index} task={task} onToggle={this.onToggle} onDelete={this.onDelete}></my-task>
        ))}
      </div>
    );
  }
}
