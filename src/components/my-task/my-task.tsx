import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-task',
  styleUrl: 'my-task.scss',
  shadow: true,
})
export class MyTask {
  @Prop() task: any;
  @Prop() onToggle: (task: any) => void; // use event instead ?
  @Prop() onDelete: (task: any) => void;

  render() {
    return (
      <div class="task" onClick={() => this.onToggle(this.task.id)}>
        <div class="task-description">
          <h2>{this.task.description}</h2>
        </div>
        <div class="task-duedate">
          <h3>{this.task.dueDate}</h3>
        </div>
        <div class="delete-task-button">
          <button onClick={() => this.onDelete(this.task.id)}>Delete Task</button>
        </div>
      </div>
    );
  }
}
