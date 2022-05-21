import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'add-task-modal',
  styleUrl: 'add-task-modal.scss',
  shadow: true,
})
export class AddTaskModal {
  @State() description: string;
  @State() dueDate: string = '';
  @State() setReminder: boolean = false;
  @State() id: number = 0;

  @Prop() onAdd: (task: any) => void; // change to Event ?

  handleSubmit(e) {
    e.preventDefault();

    // some validation
    if (!this.description) {
      alert('Please enter a task description');
      return;
    }
    this.onAdd({ id: this.id, description: this.description, due: this.dueDate, reminder: this.setReminder });

    this.description = '';
    this.dueDate = '';
    this.setReminder = false;
    this.id++;
  }

  setTaskDescription(e) {
    this.description = e.target.value;
  }

  setTaskDueDate(e) {
    this.dueDate = e.target.value;
  }

  render() {
    return (
      <div class="add-task-container">
        <div class="add-task-form">
          <form class="form" onSubmit={e => this.handleSubmit(e)}>
            <div class="task-description">
              <h4>Task Description</h4>
              <input type="text" value={this.description} onInput={e => this.setTaskDescription(e)} />
            </div>
            <div class="task-due-date">
              <h4>Task Due Date</h4>
              <input type="text" value={this.dueDate} onInput={e => this.setTaskDueDate(e)} />
            </div>
            <div class="task-set-reminder">
              <h4>Set Reminder</h4>
              <input type="checkbox" checked={this.setReminder} onChange={() => (this.setReminder = !this.setReminder)} />
            </div>
            <div class="add-task-submit">
              <input type="submit" value="Save Task" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
