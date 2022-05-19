import { newSpecPage } from '@stencil/core/testing';
import { TaskTracker } from '../task-tracker';

describe('task-tracker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TaskTracker],
      html: `<task-tracker></task-tracker>`,
    });
    expect(page.root).toEqualHtml(`
      <task-tracker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </task-tracker>
    `);
  });
});
