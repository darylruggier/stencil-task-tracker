import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-tracker',
  styleUrl: 'task-tracker.scss',
  shadow: true,
})
export class TaskTracker {
  @State() isOpen: boolean = false;
  @State() tasks: Object[];

  addTask = task => {
    this.tasks.push(task);
    console.log('pushed task, total tasks:', this.tasks);
  };

  render() {
    return (
      <div class="container">
        <div class="task-tracker-top">
          <h1>StencilJS Task Tracker</h1>
          <my-button color={this.isOpen ? 'red' : '#82c6ed'} text={this.isOpen ? 'Close' : 'Add Task'} onClick={() => (this.isOpen = !this.isOpen)} class="btn"></my-button>
        </div>
        {this.isOpen && <add-task-modal onAdd={e => this.addTask(e)}></add-task-modal>}
        <div class="task-tracker-body">
          <my-tasks></my-tasks>
        </div>
      </div>
    );
  }
}
