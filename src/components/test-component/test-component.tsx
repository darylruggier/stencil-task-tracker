import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-component',
})
export class TestComponent {
  @Prop() word: string;

  render() {
    return <div>This is a test component, you're a {this.word}</div>;
  }
}
