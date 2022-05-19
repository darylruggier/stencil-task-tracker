import { Component, h } from '@stencil/core';

@Component({
  tag: 'task-tracker',
  styleUrl: 'task-tracker.scss',
  shadow: true,
})
export class TaskTracker {
  render() {
    return (
      <div class="container">
        <div class="task-tracker-title">
          <h1>StencilJS Task Tracker</h1>
          <button class="btn">Add Task</button>
        </div>
        <div class="task-tracker-body"></div>
      </div>
    );
  }
}
