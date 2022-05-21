import { Component, h, Prop } from '@stencil/core';
import { Task } from '../task-tracker/task-tracker';
@Component({
  tag: 'my-task',
  styleUrl: 'my-task.scss',
  shadow: true,
})
export class MyTask {
  @Prop() task: Task;
  @Prop() onToggle: (id: number) => void; // use event instead ?
  @Prop() onDelete: (id: number) => void;

  render() {
    return (
      <div class={`task-container ${this.task.reminder && 'reminder'}`} onClick={() => this.onToggle(this.task.id)}>
        <div class="task-top">
          <div class="task-description">
            <h2>{this.task.description}</h2>
          </div>
          <div class="delete-task-button">
            <h4 onClick={() => this.onDelete(this.task.id)}>X</h4>
          </div>
        </div>
        <div class="task-duedate">
          <h3>{this.task.dueDate}</h3>
        </div>
      </div>
    );
  }
}
