/// <reference types="@wix/sled-test-runner" />
import { Page } from 'puppeteer-core';

describe('happy flow', () => {
  let _page: Page;

  const SLED_DEFAULT_MSID = '986cc99b-760a-41b1-b7bb-bb951fd6b079';
  const APP_ENTRY_POINT = 'wsr-vidas-onboard'; // FIXME - set your own bizmgr entry point URI

  beforeEach(async () => {
    const { page } = await sled.newPage();
    _page = page;
    await sled.loginAsUser(_page, 'wixqatest.sledcrashcourse@gmail.com'); // FIXME - set your own automation user. Read more in article https://bo.wix.com/wix-docs/fe-guild/infra/sled/getting-started/users
    await _page.goto(
      'https://www.wix.com/dashboard/' +
        SLED_DEFAULT_MSID +
        '/' +
        APP_ENTRY_POINT,
    );
  });

  it('should render dashboard home for authenticated user', async () => {
    const selector = '[data-hook="home"]'; // FIXME - set your own element's selector
    await _page.waitForSelector(selector);
    const text = await _page.$eval(
      selector,
      (e: Element) => (e as HTMLElement).innerText,
    );
    expect(text).toBe('Dashboard'); // FIXME - set your own element's text
  });
});
