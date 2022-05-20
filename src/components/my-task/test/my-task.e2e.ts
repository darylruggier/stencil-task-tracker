import { newE2EPage } from '@stencil/core/testing';

describe('my-task', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-task></my-task>');

    const element = await page.find('my-task');
    expect(element).toHaveClass('hydrated');
  });
});
