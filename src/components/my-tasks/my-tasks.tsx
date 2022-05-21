import { Component, h, Prop } from '@stencil/core';
import { Task } from '../task-tracker/task-tracker';

@Component({
  tag: 'my-tasks',
  styleUrl: 'my-tasks.scss',
  shadow: true,
})
export class MyTasks {
  @Prop() tasks: Task[];
  @Prop() onToggle: (id: number) => void; // use event ?
  @Prop() onDelete: (id: number) => void; // use event ?

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
