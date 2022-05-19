import { newE2EPage } from '@stencil/core/testing';

describe('task-tracker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<task-tracker></task-tracker>');

    const element = await page.find('task-tracker');
    expect(element).toHaveClass('hydrated');
  });
});
