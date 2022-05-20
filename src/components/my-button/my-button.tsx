import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Prop() text: string;
  @Prop() color: string;
  @Event() onClick: EventEmitter<any>;

  render() {
    return (
      <button color={this.color} onClick={() => this.onClick}>
        {this.text}
      </button>
    );
  }
}
