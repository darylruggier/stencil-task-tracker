import { newSpecPage } from '@stencil/core/testing';
import { AddTaskModal } from '../add-task-modal';

describe('add-task-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddTaskModal],
      html: `<add-task-modal></add-task-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <add-task-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </add-task-modal>
    `);
  });
});
