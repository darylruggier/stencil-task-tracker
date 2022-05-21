import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'task-tracker',
  styleUrl: 'task-tracker.scss',
  shadow: true,
})
export class TaskTracker {
  @State() isOpen: boolean = false;
  @State() tasks: Object[] = [];
  // @State() id: number = 0;

  addTask = task => {
    const newTask = { ...task };
    this.tasks = [...this.tasks, newTask];
    console.log('added new task');
    console.log(this.tasks.length);
  };

  deleteTask = (id: number) => {
    console.log('1)');
    this.tasks.filter(task => task[0] !== id); // TODO: fix this not working ?
    console.log('deleted task');
  };

  toggleReminder = (id: number) => {
    // this.tasks.map(task => (task.id === id ? { ...task, setReminder: !task.setReminder } : task.setReminder)); // TODO: fix this
  };

  render() {
    return (
      <div class="container">
        <div class="task-tracker-top">
          <h1>StencilJS Task Tracker</h1>
          <my-button color={this.isOpen ? 'red' : '#82c6ed'} text={this.isOpen ? 'Close' : 'Add Task'} onClick={() => (this.isOpen = !this.isOpen)} class="btn"></my-button>
        </div>
        {this.isOpen && <add-task-modal onAdd={e => this.addTask(e)}></add-task-modal>}
        <div class="task-tracker-body">{this.tasks.length > 0 ? <my-tasks onDelete={this.deleteTask} tasks={this.tasks}></my-tasks> : 'No current tasks.'}</div>
      </div>
    );
  }
}
