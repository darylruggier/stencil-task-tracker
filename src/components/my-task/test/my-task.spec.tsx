import { newSpecPage } from '@stencil/core/testing';
import { MyTask } from '../my-task';

describe('my-task', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTask],
      html: `<my-task></my-task>`,
    });
    expect(page.root).toEqualHtml(`
      <my-task>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-task>
    `);
  });
});
