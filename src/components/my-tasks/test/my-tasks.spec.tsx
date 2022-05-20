import { newSpecPage } from '@stencil/core/testing';
import { MyTasks } from '../my-tasks';

describe('my-tasks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyTasks],
      html: `<my-tasks></my-tasks>`,
    });
    expect(page.root).toEqualHtml(`
      <my-tasks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-tasks>
    `);
  });
});
