import { newE2EPage } from '@stencil/core/testing';

describe('add-task-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<add-task-modal></add-task-modal>');

    const element = await page.find('add-task-modal');
    expect(element).toHaveClass('hydrated');
  });
});
