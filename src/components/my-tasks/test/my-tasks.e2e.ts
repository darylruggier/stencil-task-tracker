import { newE2EPage } from '@stencil/core/testing';

describe('my-tasks', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-tasks></my-tasks>');

    const element = await page.find('my-tasks');
    expect(element).toHaveClass('hydrated');
  });
});
