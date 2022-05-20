import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-task',
  styleUrl: 'my-task.scss',
  shadow: true,
})
export class MyTask {
  @Prop() task: any;
  render() {
    return (
      <div class="task" onClick={() => (this.task.setReminder = !this.task.setReminder)}>
        <div class="task-description">
          <h2>{this.task.description}</h2>
        </div>
        <div class="task-duedate">
          <h3>{this.task.dueDate}</h3>
        </div>
      </div>
    );
  }
}
