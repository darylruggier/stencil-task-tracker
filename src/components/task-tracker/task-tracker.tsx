import { Component, h, State } from '@stencil/core';

export interface Task {
  id: number;
  description: string;
  dueDate: string;
  reminder: boolean;
}

@Component({
  tag: 'task-tracker',
  styleUrl: 'task-tracker.scss',
  shadow: true,
})
export class TaskTracker {
  @State() isOpen: boolean = false;
  @State() tasks: Task[] = [];
  // @State() id: number = 0;

  addTask = (task: Task) => {
    const newTask = { ...task };
    this.tasks = [...this.tasks, newTask];
    console.log('added new task');
    console.log(this.tasks.length);
    console.log('Tasks: ', this.tasks);
  };

  deleteTask = (id: number) => {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    console.log('deleted task');
    console.log('Tasks: ', this.tasks);
  };

  toggleReminder = (id: number) => {
    this.tasks = this.tasks.map((task: Task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)); // TODO: fix this
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
          {this.tasks.length > 0 ? <my-tasks tasks={this.tasks} onDelete={this.deleteTask} onToggle={this.toggleReminder}></my-tasks> : 'No current tasks.'}
        </div>
      </div>
    );
  }
}
