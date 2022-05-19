import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'task-tracker',
  styleUrl: 'task-tracker.scss',
  shadow: true,
})
export class TaskTracker {
  @State() isOpen: boolean = false;

  render() {
    return (
      <div class="container">
        <div class="task-tracker-top">
          <h1>StencilJS Task Tracker</h1>
          <button onClick={() => (this.isOpen = !this.isOpen)} class="btn">
            Add Task
          </button>
        </div>
        {this.isOpen && <add-task-modal></add-task-modal>}
        <div class="task-tracker-body">
          <my-tasks></my-tasks>
        </div>
      </div>
    );
  }
}
